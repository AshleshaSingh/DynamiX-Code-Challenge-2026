document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById("menu");
	const menuBtn = document.getElementById("menu-btn");
	const menuIcon = document.getElementById("menu-icon");

	function toggleMenu() {
	const isOpen = menu.classList.toggle("visible");

	menuBtn.setAttribute("aria-expanded", isOpen);
	menuBtn.setAttribute(
		"aria-label",
		isOpen ? "Close menu" : "Open menu"
	);

	menuIcon.src = isOpen
		? "assets/xmark.svg"
		: "assets/bars.svg";
	}

	menuBtn.addEventListener("click", toggleMenu);
});

// Form validation
const form = document.getElementById('contact-form');

if (form) {
	form.addEventListener('submit', function (event) {

		if (!form.checkValidity()) {
			event.preventDefault();
			form.reportValidity();
			return;
		}

		event.preventDefault();
		alert('Form submitted!');
		form.reset();
	});
}

// Back-to-top: show after scrolling and smooth-scroll on click
const backBtn = document.getElementById('back-to-top');
document.addEventListener('DOMContentLoaded', function () {
    if (!backBtn) return;

    function toggleBackToTop() {
        const doc = document.documentElement;
        // if page isn't scrollable, keep it hidden
        if (doc.scrollHeight <= window.innerHeight) {
            backBtn.classList.remove('show');
            return;
        }

        //show when user has scrolled down a liitle from the top
		const scrolled = window.scrollY || window.pageYOffset;
		const showAfter = 50; //px from top
		backBtn.classList.toggle('show', scrolled > showAfter);
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    // initialize state in case page is already scrolled
    toggleBackToTop();

    backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});