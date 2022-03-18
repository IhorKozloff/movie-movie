const refs = {
    modalWindowEl: document.querySelector('.modal-overlay'),
    modalCloseBtnEl: document.querySelector('.modal-btn-close'),
    movieCardEl: document.querySelector('.card'),
    galeryEl: document.querySelector('.gallery1'),
    searchFormEl: document.querySelector('.header-form'),
};
const APIKEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";


function onSubmitSearchForm (e) {
    e.preventDefault();
    const searchedMovie = e.currentTarget.elements.movie.value;
    console.log(searchedMovie)
    
    searchAPIName(searchedMovie);

}


function searchAPIName (name) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75&query=${name}`).then(response => response.json()).then(data => {
    console.log(data)
})
};

function galleryRender ({poster_path, title, release_date, genre_ids, vote_average}) {
refs.galeryEl.innerHTML = `
        <div class="card">
            <img src=${poster_path}>
            <div class="card__description">
              <h4 class="movie-name">${title}</h4>
              <div class="movie-spesification">
                <span class="movie-genre">Drama, Action</span>
                <span class="movie-release">2020</span>
                <span class="movie-rating">10.0</span>
              </div>
            </div>
        </div>
`
}
refs.searchFormEl.addEventListener('submit', onSubmitSearchForm);

