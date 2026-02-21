document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById("menu");
	const menuBtn = document.getElementById("menu-btn");
	const menuIcon = document.getElementById("menu-icon");

	function toggleMenu() {
	const isOpen = menu.classList.toggle("visible");

	menuBtn.setAttribute("aria-expanded", isOpen);

	menuIcon.src = isOpen
		? "assets/xmark.svg"
		: "assets/bars.svg";
	}

	menuBtn.addEventListener("click", toggleMenu);
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});

window.onscroll = function () {
	if (window.scrollY > 500) {
		document.getElementById('back-to-top').style.display = "block";
	}
};