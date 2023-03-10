//do not pass the "<header>" tag;
// function processHeader(header) {
// 	header.split(`/>`).forEach(line => {
// 		console.log(line.slice(1, 4) + '\n');
// 		if (line.slice(1, 21) == `link rel="stylesheet"`) {
// 			console.log("it is stylesheet reference")
// 		} else if (line.slice(1, 6) == `script`) {
// 			console.log("it is script reference")
// 		};
// 	});
// };

function FetchDependency(html) {
	const parser = new DOMParser().parseFromString(html, 'text/html');
	const CSSLinks = parser.head.getElementsByTagName('link');
}

async function FetchHtml(url) {
	try {
		const res = await fetch(url);
		const html = await res.text();
		return html;
	} catch (err) {
		console.error(`an error has occurred while fetching "${url}":\n${err}`);
		return err;
	}
}

const wikipediaPage = "https://en.wikipedia.org/wiki/Web_API";
let data;

//example
FetchHtml(wikipediaPage)
  .then(html => {
    data = html;
	console.log();
	document.body.innerHTML = data;
  })
  .catch(error => {
    console.error("An error occurred:", error);
});

//apparently this is undefined but the console.log above is valid
console.log(data)
//nvm the one above is an ASYNC function (ie it technically runs after this console.log)
