window.onscroll = () => fixNavBar();

const fixNavBar = () => {
	let bar = document.getElementById("bar");
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		bar.classList.remove("primary-nav");
		bar.classList.add("fixed-nav");
	} else {
		bar.classList.add("primary-nav");
		bar.classList.remove("fixed-nav");
	}
}

let slideIndex = 0;
carousel();

function carousel() {
	let slides = document.getElementsByClassName("slide");
	let dots = document.getElementsByClassName("slide-dot");
	for(let i = 0; i < slides.length; i++) {
		slides[i].classList.add("slide-inactive");
		dots[i].classList.remove("active");
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].classList.remove("slide-inactive");
	slides[slideIndex - 1].classList.add("slide-active");
	dots[slideIndex - 1].classList.add("active");
	setTimeout(carousel, 7000);
}

let hamburgerCircle = document.querySelector(".hamburger-circle");
let hamburger = document.getElementById("hamburger");
let ex = document.getElementById("ex");
let mainNav = document.querySelector(".main-nav");
hamburgerCircle.addEventListener("click", () => {

	if (hamburger.classList.contains("hidden")) {
		hamburger.classList.remove("hidden");
		ex.classList.add("hidden");
		mainNav.classList.remove("show-nav");
	} else {
		ex.classList.remove("hidden");
		hamburger.classList.add("hidden");
		mainNav.classList.add("show-nav");
	}
});

let navLinks = document.getElementsByClassName("nav-link");
for(let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", () => {
		if (mainNav.classList.contains("show-nav")) {
			mainNav.classList.remove("show-nav");
			hamburger.classList.remove("hidden");
			ex.classList.add("hidden");
		}
	});
}