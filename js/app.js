/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
"use strict";
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');





/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// scroll to the clicked section
const scrollTo = function (t) {
  if (t.matches('a')) {
    //get the section related to the clicked lonk using nav-data
    const targetSection = document.querySelector(`[data-nav='${t.innerText}']`);
    targetSection.scrollIntoView({ 'behavior': 'smooth' });
  }
}

//check if element is in view 
//margin is a number by define min distace between element and viewport top initialy = 100
const isInView = function (DOMRect, margin = 100) {
  return (DOMRect.top <= margin && DOMRect.bottom >= margin)
}



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav

const fragment = document.createDocumentFragment();
for (const sec of sections) {
  const newLi = document.createElement('li');
  const newLink = document.createElement('a')
  newLink.classList.add('menu__link');
  newLink.innerText = sec.getAttribute('data-nav');
  newLink.setAttribute('data-link', newLink.innerText);
  newLi.appendChild(newLink);
  fragment.appendChild(newLi);
}
navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
function addActiveSection() {
  sections.forEach(element => {
    element.classList.remove('your-active-class')
    if (isInView(element.getBoundingClientRect())) {
      element.classList.add('your-active-class');
      const val = element.getAttribute('data-nav')
      addActiveNav(val)
    }
  });
}


//Add active to nav list 
function addActiveNav(data) {
  console.log("hit it")
  navList.querySelectorAll('li a').forEach(element => {
    element.classList.remove('active')
    if (data === element.innerText) {
      console.log(element.innerText);
      element.classList.add('active')
    }
  });


}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

//get section names


// Scroll to section on link click
navList.addEventListener('click', e => scrollTo(e.target))
// Set sections as active
window.addEventListener('scroll', () => addActiveSection())
