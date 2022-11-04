const nav = () => {
  const navToggle = document.getElementById('header-nav__menu-icon-label-close');
  navToggle.addEventListener('click', () => {
    const menuLinkList = document.querySelector('.header-nav');
    menuLinkList.classList.toggle('header-nav-show');
    navToggle.classList.toggle('header-nav__menu-icon-label-close-show');
  });

}
export default nav;