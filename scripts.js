import './CSS/styles.css';
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('darkModeIcon');

  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-sun');
  });

  const headerMobileButton = document.querySelector('.header__mobile-button');
  const sidenav = document.querySelector('.sidenav');
  const iconMobile = headerMobileButton.querySelector('i');

  iconMobile.addEventListener('click', function () {
    sidenav.classList.toggle('hidden');
    iconMobile.classList.toggle('fa-bars');
    if (sidenav.classList.contains('hidden')) {
      // If sidenav is hidden, make the "fa-bars" icon appear
      iconMobile.classList.remove('fa-bars');
      iconMobile.classList.add('fa-bars');
    } else {
      // If sidenav is visible, make the "fa-bars" icon change to a close icon or any other desired icon
      iconMobile.classList.remove('fa-bars');
      iconMobile.classList.add('fa-bars');
    }
  });
});
