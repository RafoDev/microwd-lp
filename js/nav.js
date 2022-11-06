const nav = () => {
  const burger = document.getElementById('burger');
  const b_u = document.querySelector('.burger-u');
  const b_m = document.querySelector('.burger-m');
  const b_d = document.querySelector('.burger-d');
  burger.addEventListener('click', () => {
    const menuLinkList = document.querySelector('.header-nav');
    b_u.classList.toggle('burger-u-cross');
    b_m.classList.toggle('burger-m-cross');
    b_d.classList.toggle('burger-d-cross');
    menuLinkList.classList.toggle('header-nav-show');
  });

}
export default nav;