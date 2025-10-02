const startColorInput = document.getElementById('start-color');
const endColorInput = document.getElementById('end-color');

  const generateGradient = () => {
	const startColor = startColorInput.value;
	const endColor = endColorInput.value;

	const gradientCSS = `linear-gradient(45deg, ${startColor}, ${endColor})`;
	document.body.style.background = gradientCSS;
	document.getElementById("tvscreen").style.background=gradientCSS;
	document.getElementById("hexcolor1").innerText = startColor;
	document.getElementById("hexcolor2").innerText = endColor;	
	hexcolor2.value = endColor;
};

// Initialize with default values
generateGradient();

// Auto-update gradient on input changes
	startColorInput.addEventListener('input', generateGradient);
	endColorInput.addEventListener('input', generateGradient);
	generateGradient();

