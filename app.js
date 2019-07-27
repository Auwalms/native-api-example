const apiKey = ""; // get yours from http://www.omdbapi.com/;

fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=batman&page=2`)
    .then(response => response.json())
    .then(response => {
        if (!response.Response) {
            console.error("You are on your own!")
        } else {
            let albums = response.Search;
            albums.forEach((album, $index) => {
                displayAlbums(album, $index);
            });
        }
    })
    .catch(error => console.error(error))

function displayAlbums(albums, $index) {
    document.querySelector("tbody").append(createAlbumHTML(albums, $index));
}

function createAlbumHTML(album, $index) {
    let albumRow = document.createElement('tr');
    let serialNOData = document.createElement("td");
    serialNOData.innerHTML = $index + 1;
    let albumTitleData = document.createElement("td");
    albumTitleData.innerHTML = album.Title;
    let albumYearData = document.createElement("td");
    albumYearData.innerHTML = album.Year;
    let albumPosterData = document.createElement("td");
    let posterImage = document.createElement("img");
    posterImage.src = album.Poster;
    posterImage.classList.add("image", "is-128x128");
    posterImage.setAttribute("loading", "lazy");
    albumPosterData.appendChild(posterImage);

    albumRow.appendChild(serialNOData);
    albumRow.appendChild(albumTitleData);
    albumRow.appendChild(albumYearData);
    albumRow.appendChild(albumPosterData);
    return albumRow;
}