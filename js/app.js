const checkbox = document.querySelector('#checkbox');
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
	checkbox.setAttribute('checked', true);
}

checkbox.addEventListener('change', function () {
	console.log(this.checked);
	// document.body.classList.toggle('is-dark-mode');
	//document.body.style.setProperty('--cardGray', 'blue');
	if (!this.checked) {
		document.body.classList.remove('is-light-mode');
		document.body.classList.add('is-dark-mode');
		// --baseBackground: #1d2029;
		// --baseColor: white;
		// --cardGray: #252b43;
		// --gray: #8088ad;
		// --lightGray: #1d2029;
		// --cardTitle: #8088ad;
		// --switchSpinner: #262b3e;
		// --switch: linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
	} else {
		document.body.classList.remove('is-dark-mode');
		document.body.classList.add('is-light-mode');
	}
});
