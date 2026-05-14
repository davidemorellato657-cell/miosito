const STORE_KEYS = {
  TOURNAMENTS: 'ssm_tournaments',
  TEAMS: 'ssm_teams',
  MATCHES: 'ssm_matches',
  PLAYERS: 'ssm_players',
  USER: 'ssm_user',
  ALL_USERS: 'ssm_all_users'
};

const Store = {
  save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  load: (key) => JSON.parse(localStorage.getItem(key)) || [],

  // User Management
  getCurrentUser: () => JSON.parse(localStorage.getItem(STORE_KEYS.USER)) || null,
  
  register: (email, password, name, role) => {
    const users = Store.load(STORE_KEYS.ALL_USERS);
    if (users.find(u => u.username === name)) {
      return { success: false, msg: 'Nome utente già usato, prova con un altro nome' };
    }
    if (users.find(u => u.email === email)) {
      return { success: false, msg: 'Email già registrata.' };
    }
    const newUser = { id: Date.now(), email, password, name, username: name, role };
    users.push(newUser);
    Store.save(STORE_KEYS.ALL_USERS, users);
    return { success: true };
  },

  verifyAndLogin: (username, password) => {
    const users = Store.load(STORE_KEYS.ALL_USERS);
    // Find by username (new) or name (old)
    const user = users.find(u => (u.username === username || u.name === username) && u.password === password);
    if (!user) {
      const exists = users.find(u => u.username === username || u.name === username);
      if (exists) return { success: false, msg: 'Password errata.' };
      return { success: false, msg: 'Utente non trovato. Registrati prima di accedere.' };
    }
    // Ensure old users have username property
    if (!user.username) user.username = user.name;
    localStorage.setItem(STORE_KEYS.USER, JSON.stringify(user));
    return { success: true, user };
  },
  resetPassword: (email, newPassword) => {
    const users = Store.load(STORE_KEYS.ALL_USERS);
    const user = users.find(u => u.email === email);
    if (!user) return { success: false, msg: 'Utente non trovato.' };
    user.password = newPassword;
    Store.save(STORE_KEYS.ALL_USERS, users);
    return { success: true };
  },

  login: (name, role) => {
    const user = { name, role };
    localStorage.setItem(STORE_KEYS.USER, JSON.stringify(user));
    return user;
  },
  logout: () => localStorage.removeItem(STORE_KEYS.USER),

  // Tournaments
  getTournaments: () => Store.load(STORE_KEYS.TOURNAMENTS),
  addTournament: (tournament) => {
    const ts = Store.getTournaments();
    ts.push({ 
      id: Date.now(), 
      password: '', // Default empty if not provided
      ...tournament 
    });
    Store.save(STORE_KEYS.TOURNAMENTS, ts);
  },
  unlockTournament: (tournamentId, password) => {
    const ts = Store.getTournaments();
    const t = ts.find(t => t.id === tournamentId);
    if (!t) return { success: false, msg: 'Torneo non trovato.' };
    if (!t.password || t.password === password) {
      const unlocked = JSON.parse(localStorage.getItem('ssm_unlocked_tournaments') || '[]');
      if (!unlocked.includes(tournamentId)) {
        unlocked.push(tournamentId);
        localStorage.setItem('ssm_unlocked_tournaments', JSON.stringify(unlocked));
      }
      return { success: true };
    }
    return { success: false, msg: 'Password errata.' };
  },
  isTournamentUnlocked: (tournamentId) => {
    const user = Store.getCurrentUser();
    if (user?.role === 'organizer') return true;
    const unlocked = JSON.parse(localStorage.getItem('ssm_unlocked_tournaments') || '[]');
    const t = Store.getTournaments().find(t => t.id === tournamentId);
    if (!t?.password) return true;
    return unlocked.includes(tournamentId);
  },
  deleteTournament: (tournamentId) => {
    // Remove tournament
    const ts = Store.getTournaments().filter(t => t.id !== tournamentId);
    Store.save(STORE_KEYS.TOURNAMENTS, ts);
    
    // Cleanup associated teams
    const teams = Store.load(STORE_KEYS.TEAMS).filter(t => t.tournamentId !== tournamentId);
    Store.save(STORE_KEYS.TEAMS, teams);
    
    // Cleanup associated matches
    const matches = Store.load(STORE_KEYS.MATCHES).filter(m => m.tournamentId !== tournamentId);
    Store.save(STORE_KEYS.MATCHES, matches);
  },

  // Teams
  getTeams: (tournamentId) => {
    const teams = Store.load(STORE_KEYS.TEAMS);
    return tournamentId ? teams.filter(t => t.tournamentId === tournamentId) : teams;
  },
  addTeam: (team) => {
    const teams = Store.load(STORE_KEYS.TEAMS);
    const user = Store.getCurrentUser();
    teams.push({ 
      id: Date.now(), 
      ...team, 
      owner: user ? user.username : 'admin',
      players: [] 
    });
    Store.save(STORE_KEYS.TEAMS, teams);
  },
  updateTeam: (updatedTeam) => {
    const teams = Store.load(STORE_KEYS.TEAMS);
    const index = teams.findIndex(t => t.id === updatedTeam.id);
    if (index !== -1) {
      teams[index] = updatedTeam;
      Store.save(STORE_KEYS.TEAMS, teams);
    }
  },
  deleteTeam: (teamId) => {
    const teams = Store.load(STORE_KEYS.TEAMS);
    const filteredTeams = teams.filter(t => t.id !== teamId);
    Store.save(STORE_KEYS.TEAMS, filteredTeams);
  },
  randomizeGroups: (tournamentId, numGroups) => {
    let teams = Store.getTeams(tournamentId);
    if (teams.length < numGroups) return { success: false, msg: 'Troppe poche squadre per il numero di gironi richiesto.' };
    
    // Shuffle teams
    const shuffled = [...teams].sort(() => 0.5 - Math.random());
    
    const allTeams = Store.load(STORE_KEYS.TEAMS);
    shuffled.forEach((team, index) => {
      const groupIdx = (index % numGroups) + 1;
      const groupName = `Girone ${String.fromCharCode(64 + groupIdx)}`; // Girone A, B, C...
      
      const targetTeam = allTeams.find(t => t.id === team.id);
      if (targetTeam) targetTeam.groupName = groupName;
    });
    
    Store.save(STORE_KEYS.TEAMS, allTeams);
    return { success: true };
  },

  // Players
  addPlayerToTeam: (teamId, player) => {
    const teams = Store.load(STORE_KEYS.TEAMS);
    const team = teams.find(t => t.id === teamId);
    if (team) {
      if (!team.players) team.players = [];
      team.players.push({ id: Date.now(), ...player, goals: 0 });
      Store.save(STORE_KEYS.TEAMS, teams);
    }
  },
  removePlayerFromTeam: (teamId, playerId) => {
    const teams = Store.load(STORE_KEYS.TEAMS);
    const team = teams.find(t => t.id === teamId);
    if (team && team.players) {
      team.players = team.players.filter(p => p.id !== playerId);
      Store.save(STORE_KEYS.TEAMS, teams);
    }
  },

  // Matches
  getMatches: (tournamentId) => {
    const matches = Store.load(STORE_KEYS.MATCHES);
    return tournamentId ? matches.filter(m => m.tournamentId === tournamentId) : matches;
  },
  addMatch: (match, goalMap = {}) => {
    const matches = Store.load(STORE_KEYS.MATCHES);
    matches.push({ id: Date.now(), ...match });
    Store.save(STORE_KEYS.MATCHES, matches);
    
    // Update player goals
    const teams = Store.load(STORE_KEYS.TEAMS);
    Object.keys(goalMap).forEach(key => {
      const [teamId, playerId] = key.split('-').map(Number);
      const count = goalMap[key];
      const team = teams.find(t => t.id === teamId);
      if (team) {
        const player = team.players.find(p => p.id === playerId);
        if (player) {
          player.goals = (player.goals || 0) + count;
        }
      }
    });
    Store.save(STORE_KEYS.TEAMS, teams);
    
    Store.updateStandings(match.tournamentId);
  },

  // Standings Logic
  updateStandings: (tournamentId) => {
    // This will be used to calculate standings on the fly in the UI
  },

  calculateStandings: (tournamentId) => {
    const teams = Store.getTeams(tournamentId);
    const matches = Store.getMatches(tournamentId);
    
    const standings = teams.map(team => ({
      ...team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    }));

    matches.forEach(match => {
      const teamA = standings.find(t => t.id === match.teamAId);
      const teamB = standings.find(t => t.id === match.teamBId);

      if (!teamA || !teamB) return;

      teamA.played++;
      teamB.played++;

      const scoreA = match.scoreA;
      const scoreB = match.scoreB;

      teamA.goalsFor += scoreA;
      teamA.goalsAgainst += scoreB;
      teamB.goalsFor += scoreB;
      teamB.goalsAgainst += scoreA;

      if (scoreA > scoreB) {
        teamA.won++;
        teamA.points += 3;
        teamB.lost++;
      } else if (scoreA < scoreB) {
        teamB.won++;
        teamB.points += 3;
        teamA.lost++;
      } else {
        teamA.drawn++;
        teamB.drawn++;
        teamA.points += 1;
        teamB.points += 1;
      }
    });

    return standings.sort((a, b) => b.points - a.points || (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst));
  },

  getTopScorers: (tournamentId) => {
    const soccerSports = ['calcio', 'calcetto'];
    
    if (tournamentId) {
      const tournament = Store.getTournaments().find(t => t.id === tournamentId);
      if (!soccerSports.includes(tournament?.sport)) return [];
    }

    const ts = Store.getTournaments();
    const soccerTournaments = ts.filter(t => soccerSports.includes(t.sport));
    const soccerTIds = soccerTournaments.map(t => t.id);

    const allTeams = Store.load(STORE_KEYS.TEAMS);
    let filteredTeams = allTeams;
    
    if (tournamentId) {
      filteredTeams = allTeams.filter(t => t.tournamentId === tournamentId);
    } else {
      // Global ranking but only for soccer sports
      filteredTeams = allTeams.filter(t => soccerTIds.includes(t.tournamentId));
    }

    let allPlayers = [];
    filteredTeams.forEach(team => {
      if (team.players) {
        team.players.forEach(p => {
          allPlayers.push({ ...p, teamName: team.name });
        });
      }
    });
    return allPlayers.sort((a, b) => b.goals - a.goals).slice(0, 3);
  },

  getTeamPerformance: (teamId) => {
    const matches = Store.load(STORE_KEYS.MATCHES).filter(m => m.teamAId === teamId || m.teamBId === teamId);
    // Sort matches by date
    matches.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    let cumulativePoints = 0;
    const history = matches.map((m, index) => {
      let points = 0;
      const isTeamA = m.teamAId === teamId;
      const teamScore = isTeamA ? m.scoreA : m.scoreB;
      const oppScore = isTeamA ? m.scoreB : m.scoreA;

      if (teamScore > oppScore) points = 3;
      else if (teamScore === oppScore) points = 1;
      
      cumulativePoints += points;
      return { 
        matchIndex: index + 1, 
        points: cumulativePoints,
        result: points === 3 ? 'W' : (points === 1 ? 'D' : 'L')
      };
    });

    return history;
  },

  checkScoreLimit: (sport, scoreA, scoreB) => {
    const noDrawSports = ['pallavolo', 'green_volley', 'basket', 'beach_volleyball'];
    if (noDrawSports.includes(sport) && scoreA === scoreB) {
        return { valid: false, msg: "In questo sport non è ammesso il pareggio." };
    }

    const limit = (sport === 'beach_volleyball') ? 21 : (['pallavolo', 'green_volley'].includes(sport) ? 25 : null);
    if (!limit) return { valid: true };

    const max = Math.max(scoreA, scoreB);
    const min = Math.min(scoreA, scoreB);
    const diff = max - min;

    if (max < limit) return { valid: false, msg: `Il punteggio deve raggiungere almeno ${limit}.` };
    if (max === limit && diff >= 2) return { valid: true };
    if (max > limit && diff === 2) return { valid: true };
    if (max > limit && diff < 2) return { valid: false, msg: "Deve esserci uno scarto di 2 punti dopo il deuce." };
    
    return { valid: false, msg: "Punteggio non valido per le regole del set." };
  },

  getMinPlayers: (sport) => {
    const mins = {
      'beach_volleyball': 2,
      'pallavolo': 6,
      'calcio': 11,
      'calcetto': 5,
      'basket': 3,
      'green_volley': 3
    };
    return mins[sport] || 0;
  }
};

window.Store = Store;
