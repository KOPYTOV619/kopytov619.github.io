var item = document.querySelector(".item");

onmousemove = function (e) {
	item.style.position = 'fixed';
	item.style.left = e.clientX + -5 + 'px';
	item.style.top = e.clientY + -5 + 'px';
};