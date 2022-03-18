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
    
    searchAPIName(searchedMovie).then(result => {
      console.log(result[0])
      
       let forRender = "";
        result.map(item => {
          forRender += galleryMurkUpMaker(item);
      })
      refs.galeryEl.innerHTML = forRender;
    })
    
    

}


function searchAPIName (name) {
   return fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75&query=${name}`).then(response => response.json()).then(data => data.results) 
};

function galleryMurkUpMaker ({poster_path, title, genre_ids, release_date, vote_average}) {
 
return  `
        <div class="card">
            <img src=https://image.tmdb.org/t/p/original${poster_path} width="280" height="398">
            <div class="card__description">
              <h4 class="movie-name">${title}</h4>
              <div class="movie-spesification">
                <span class="movie-genre">${genre_ids}</span>
                <span class="movie-release">${release_date}</span>
                <span class="movie-rating">${vote_average}</span>
              </div>
            </div>
        </div>
`
}
refs.searchFormEl.addEventListener('submit', onSubmitSearchForm);

