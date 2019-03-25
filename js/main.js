(() => {
	const badge = document.querySelector('img'),
		footerText = document.querySelector('h3');

	function animImage() {
		TweenMax.to(badge, 1, { scaleX: 1.025, scaleY: 1.025, rotation: 50 ease:Elastic.easeOut, onComplete: animFooterText});
	}

	function animFooter() {
		TweenMax.to(footerText, 0.7, { scaleX: 1.1, scaleY: 1.25, ease:Elastic.easeInOut});
	}

	animImage();

})();