// Elements
const hamburgerCircle = document.querySelector('.hamburger-circle');
const hamburger = document.querySelector('#hamburger');
const ex = document.querySelector('#ex');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

// Event Listeners
window.addEventListener('scroll', fixNavBar);
hamburgerCircle.addEventListener('click', handleHamburgerClick);
navLinks.forEach(navLink => {
  navLink.addEventListener('click', handleNavClick);
});

// Functions
function fixNavBar() {
  const bar = document.querySelector('#bar');
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    bar.classList.remove('primary-nav');
    bar.classList.add('fixed-nav');
  } else {
    bar.classList.add('primary-nav');
    bar.classList.remove('fixed-nav');
  }
}

function handleHamburgerClick() {
  if (hamburger.classList.contains('hidden')) {
		hamburger.classList.remove('hidden');
		ex.classList.add('hidden');
		mainNav.classList.remove('show-nav');
	} else {
		ex.classList.remove('hidden');
		hamburger.classList.add('hidden');
		mainNav.classList.add('show-nav');
	}
}

function handleNavClick() {
  if (mainNav.classList.contains('show-nav')) {
    mainNav.classList.remove('show-nav');
    hamburger.classList.remove('hidden');
    ex.classList.add('hidden');
  }
}


// Carousel
let slideIndex = 0;
carousel();

function carousel() {
	const slides = document.querySelectorAll('.slide');
	const dots = document.querySelectorAll('.slide-dot');
	for(let i = 0; i < slides.length; i++) {
		slides[i].classList.add('slide-inactive');
		dots[i].classList.remove('active');
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].classList.remove('slide-inactive');
	slides[slideIndex - 1].classList.add('slide-active');
	dots[slideIndex - 1].classList.add('active');
	setTimeout(carousel, 7000);
}