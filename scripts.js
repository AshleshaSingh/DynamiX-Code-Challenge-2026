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

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});

// Back-to-top: show after scrolling and smooth-scroll on click
document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.getElementById('back-to-top');
    if (!backBtn) return;

    function toggleBackToTop() {
        const doc = document.documentElement;
        // if page isn't scrollable, keep it hidden
        if (doc.scrollHeight <= window.innerHeight) {
            backBtn.classList.remove('show');
            return;
        }

        const threshold = 20; // px from bottom
        const atBottom = (window.innerHeight + window.scrollY) >= (doc.scrollHeight - threshold);
        backBtn.classList.toggle('show', atBottom);
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    // initialize state in case page is already scrolled
    toggleBackToTop();

    backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});