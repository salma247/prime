const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navLinks =  document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
})