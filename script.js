const searchButton = document.querySelector('button');
const results = document.querySelector('.results');
let spotifyData = [];
let html = "";

function populateData(input) {
	spotifyData = [];
	html = "";
	const searchTerm = document.querySelector('.search').value;
	const endpoint = `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`;
	

	fetch(endpoint)
		.then(blob => blob.json())
		.then(data => spotifyData.push(...data.artists.items)
		.then(spotifyData.map(function(artist) {
					console.log(artist.name);
					console.log(artist.uri);
					console.log(spotifyData);
				    html += `
				    	<div class="artist">
					    	<div class="name"> ${artist.name} </div>
					    	<iframe src="https://embed.spotify.com/?uri=${artist.uri}" width="250" height="330" frameborder="0" allowtransparency="true"></iframe>
				    	</div>
				    `;
				    results.innerHTML = html;

				    document.querySelector('.search').value = '';
				})

		));



}
searchButton.addEventListener('click', populateData);