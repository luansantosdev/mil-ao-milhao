/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
  }
  showMenu('bx','menu-mobile')
  
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav-link-mobile')
  
  function linkAction(){
    const navMenu = document.getElementById('menu-mobile')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('active-menu-mobile')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  /*==================== CHANGE BACKGROUND HEADER ====================*/ 
  function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
  }
  window.addEventListener('scroll', scrollHeader)
// Contagem regressiva
var countDownDate = new Date("November 17, 2021 05:06:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("contador").innerHTML = 
    '<div>' + days + ':' + '<span>DIAS</span></div>' +
    '<div>' + hours + ':' + '<span>HORAS</span></div>' +
    '<div>' + minutes + ':' + '<span>MIN</span></div>' +
    '<div>' + seconds +  '<span>SEG</span></div>';

    document.getElementById("contador2").innerHTML = 
    '<div>' + days + ':' + '<span>DIAS</span></div>' +
    '<div>' + hours + ':' + '<span>HORAS</span></div>' +
    '<div>' + minutes + ':' + '<span>MIN</span></div>' +
    '<div>' + seconds +  '<span>SEG</span></div>';

}, 1000);

// Modal inscrição 
const button = document.getElementById('btn');
const modal = document.getElementById('mymodal');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    modal.classList.add('modal-active');
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
})
