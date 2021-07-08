import './scroll.scss';

function listenToScroll() {
	const scrollParent = document.querySelector('.landing-page');
	let lastScroll = 0;
	console.log(scrollParent)

	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			scrollParent.classList.remove("scroll-up");
			return;
		}
	
		if (currentScroll > lastScroll && !scrollParent.classList.contains("scroll-down")) {
			scrollParent.classList.remove("scroll-up");
			scrollParent.classList.add("scroll-down");
		} 
		else if (
			currentScroll < lastScroll &&
			scrollParent.classList.contains("scroll-down")
		) {
			scrollParent.classList.remove("scroll-down");
			scrollParent.classList.add("scroll-up");
		}
		lastScroll = currentScroll;
	});
}

export default listenToScroll;
