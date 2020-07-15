function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
const heartCount = document.querySelector('#heart');

window.addEventListener('keyup', function(e) {
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = `${currTop + 50}px`;
	} 
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = (currTop <= 0) ? `${currTop}px` : `${currTop - 50}px`;
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft + 50}px`;
		avatar.style.transform = 'scale(1,1)';
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = (currLeft <= 0) ? `${currLeft}px` : `${currLeft - 50}px`;
		avatar.style.transform = 'scale(-1,1)';
	}
	if (isTouching(avatar,coin)) {
		moveCoin();
		heartCount.innerText = +(heartCount.innerText) + 1;
	}
	
});

const extractPos = (pos) => +(pos.slice(0,-2)) ;

const moveCoin = () => {
	const vert = Math.floor(Math.random() * window.innerHeight);
	const horz = Math.floor(Math.random() * window.innerWidth);
	coin.style.top = `${vert}px`;
	coin.style.left = `${horz}px`;
};

moveCoin();
