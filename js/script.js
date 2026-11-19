const mobileBtn =   document.querySelctor('.btn-mobile');
const navLinks = document.getElementByid('nav-links')
const icon = document.querySelctor('btn-mobile i')


mobileBtn.addEventListener('click', ()  => {
   navLinks.classList.toggle('show');
   icon.classList.toggle('fa-times');
   icon.classList.toggle('fa-bars');
})