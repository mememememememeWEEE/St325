//do not pass the "<header>" tag;
const processHeader = (header) => {
	header.split(`/>`).forEach(line => {
		console.log(line.slice(1, 4) + '\n');
		if (line.slice(1, 21) == `link rel="stylesheet"`) {
			console.log("it is stylesheet reference")
		} else if (line.slice(1, 6) == `script`) {
			console.log("it is script reference")
		};
	});
};



const fetchHtml = (URL) => {
	return fetch(URL)
		.then((response) => response.text())
		.then((data) => {
			document.body.innerHTML = data;
		})
	.catch((error) => {
		console.error(error);
	});
}

const list =  fetchHtml('https://en.wikipedia.org/wiki/Cricket_World_Cup')
