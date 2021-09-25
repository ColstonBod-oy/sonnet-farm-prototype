$(document).ready(function () {
	// smooth scrolling
	$(".navbar a").click(function (e) {
		e.preventDefault();

		document.querySelector(this.hash).scrollIntoView({
			behavior: "smooth",
		});
	});

	// link highlighting & navbar shadow
	const linkOne = document.querySelector(".home-link");
	const linkTwo = document.querySelector(".products-link");
	const sectionOne = document.querySelector(".home");
	const sectionOneOptions = { rootMargin: "-200px 0px 0px 0px" };
	const sectionOneObserver = new IntersectionObserver(function (
		entries,
		sectionOneObserver
	) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				linkOne.classList.remove("active");
				linkTwo.classList.add("active");
				document.querySelector(".home-link").style.color = "";
				document.querySelector(".navbar").classList.add("navbar-shadow");
			} else {
				linkOne.classList.add("active");
				linkTwo.classList.remove("active");
				document.querySelector(".navbar").classList.remove("navbar-shadow");
			}
		});
	},
	sectionOneOptions);

	sectionOneObserver.observe(sectionOne);
});
