const slide = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


slide.addEventListener('mousedown', e => {
	isDown = true;
	slide.classList.add('active');

	pageX = e.pageX;
	startX = pageX - slide.offsetLeft;
	
	scrollLeft = slide.scrollLeft;
});
	

slide.addEventListener('mouseup', () => {
	isDown = false;
	slide.classList.remove('active');
});

slide.addEventListener('mouseleave', () =>{
	isDown = false;
	slide.classList.remove('active');
})


slide.addEventListener('mousemove', e => {
	if(!isDown) return;
	e.preventDefault();

	const x = e.pageX - slide.offsetLeft;

	const deviation = x - startX;

	slide.scrollLeft = scrollLeft - deviation;
});
	



