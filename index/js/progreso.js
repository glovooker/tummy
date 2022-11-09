const MAX = 9

const cp = new CircleProgress('.progress', {
	max: MAX,
	value: 1,
	animationDuration: 400,
	textFormat: (val) => val,
});

document.querySelector('#value-input').addEventListener('change', e => {
	const val = e.target.value;
	cp.value = val;
	cp.el.style.setProperty('--progress-value', val / MAX);
})