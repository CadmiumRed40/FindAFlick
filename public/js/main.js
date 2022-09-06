const deleteBtn = document.querySelectorAll('.del')
const flixItem = document.querySelectorAll("span.not");
const flixWatched = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteFlix)
})

Array.from(flixItem).forEach((el) => {
    el.addEventListener("click", markComplete);
});

Array.from(flixWatched).forEach((el) => {
    el.addEventListener("click", markIncomplete);
});

async function deleteFlix() {
    const flixId = this.parentNode.dataset.id;
    try {
        const response = await fetch("flix/deleteFlix", {
            method: "delete",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                flixIdFromJSFile: flixId,
            }),
        });
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markComplete() {
    const flixId = this.parentNode.dataset.id;
    try {
        const response = await fetch("flix/markComplete", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                flixIdFromJSFile: flixId,
            }),
        });
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markIncomplete() {
    const flixId = this.parentNode.dataset.id;
    try {
        const response = await fetch("flix/markIncomplete", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                flixIdFromJSFile: flixId,
            }),
        });
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

document.getElementById('search-movie').addEventListener('click', getMovie)

async function getMovie() {
    let givenTitle = document.getElementById('text-movie').value;
    try {
        const response = await fetch(`search/?title=${givenTitle}`);
        const data = await response.json().then(x => x);
        addMovieDataToDOM(data[0]);
    } catch (err) {
        console.log(err)
    }
}



async function addMovieDataToDOM(data) {
    if (data) {
        document.querySelector('.movieInfo').classList.remove('displayNone');
        document.querySelector('#moviePoster').src = data.poster
        document.querySelector('#movieTitle').innerText = data.title
        document.querySelector('#movieYear').innerText = data.year
        document.querySelector('#movieDirectors').innerText = data.directors.join(', ')
        document.querySelector('#movieWriters').innerText = data.writers.join(', ')
        document.querySelector('#movieLeadActors').innerText = data.cast.join(', ')
        document.querySelector('#movieIMDB').innerText = data.imdb.rating
        document.querySelector('#movieTomatoes').innerText = data.tomatoes.viewer.rating
        document.querySelector('#movieSynopsis').innerText = data.fullplot
    } else {
        alert('Media not found. Please try another movie.');
    }
}
