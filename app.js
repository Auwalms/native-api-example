const apiKey = "b1a08983" // http://www.omdbapi.com/
let $index = 1;
$.ajax({
    type: 'GET',
    url: 'http://www.omdbapi.com/?apikey=' + apiKey + '&s=batman',
    success: function (resp) {
        _.each(resp.Search, displayAlbums)
    },
    error: function (error) {
        console.log("failed with error: ", error)
    }
});


function displayAlbums(albums) {
    $("tbody").append(createAlbumHTML(albums));
}

function createAlbumHTML(album) {
    console.log(album.Title)
    let albumRow = document.createElement('tr');
    let serialNOData = document.createElement("td");
    serialNOData.innerHTML = $index++;
    let albumTitleData = document.createElement("td");
    albumTitleData.innerHTML = album.Title;
    let albumYearData = document.createElement("td");
    albumYearData.innerHTML = album.Year;
    let albumPosterData = document.createElement("td");
    const posterImage = document.createElement("img");
    posterImage.src = album.Poster;
    posterImage.classList.add("image", "lazy");
    albumPosterData.appendChild(posterImage);

    albumRow.appendChild(serialNOData);
    albumRow.appendChild(albumTitleData);
    albumRow.appendChild(albumYearData);
    albumRow.appendChild(albumPosterData);
    return albumRow;
}