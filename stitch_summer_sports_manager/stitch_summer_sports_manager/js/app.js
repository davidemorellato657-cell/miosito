const App = {
  init: () => {
    const user = Store.getCurrentUser();
    if (!user && !window.location.pathname.includes('login.html')) {
      window.location.href = 'login.html';
      return;
    }
    App.applyPermissions(user);
    if (typeof Page !== 'undefined' && Page.init) Page.init();
  },

  applyPermissions: (user) => {
    if (!user) return;
    
    // Elements with data-role attribute will be hidden if user doesn't match
    const elements = document.querySelectorAll('[data-role]');
    elements.forEach(el => {
      const allowedRoles = el.getAttribute('data-role').split(',');
      if (!allowedRoles.includes(user.role)) {
        el.remove();
      }
    });
  },

  confirmLogout: () => {
    const modal = document.getElementById('logout-modal');
    if (modal) modal.classList.remove('hidden');
    else App.logout();
  },

  hideModal: (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
  },

  logout: () => {
    Store.logout();
    window.location.href = 'login.html';
  }
};

document.addEventListener('DOMContentLoaded', App.init);
window.App = App;
