const convertBtn = document.querySelector('.convert-btn');
const URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `http://localhost:4000/download?URL=${URL}`;
	// fetch(`http://localhost:4000/download?URL=${URL}`, {
	// 	method: 'GET',
	// })
	// 	.then(res => res.json())
	// 	.then(json => console.log(json));
}
