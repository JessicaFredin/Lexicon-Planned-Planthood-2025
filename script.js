const toggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
	header.classList.toggle("nav-open");
});
