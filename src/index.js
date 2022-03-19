const refs = {
    modalWindowEl: document.querySelector('.modal-overlay'),
    modalCloseBtnEl: document.querySelector('.modal-btn-close'),
    movieCardEl: document.querySelector('.card'),
    galeryEl: document.querySelector('.gallery1'),
    searchFormEl: document.querySelector('.header-form'),
};
const APIKEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";
const GENRES = [
  {id: 28, name: 'Action'},
  {id: 12, name: 'Adventure'},
  {id: 16, name: 'Animation'},
  {id: 35, name: 'Comedy'},
  {id: 80, name: 'Crime'},
  {id: 99, name: 'Documentary'},
  {id: 18, name: 'Drama'},
  {id: 10751, name: 'Family'},
  {id: 14, name: 'Fantasy'},
  {id: 36, name: 'History'},
  {id: 27, name: 'Horror'},
  {id: 10402, name: 'Music'},
  {id: 9648, name: 'Mystery'},
  {id: 10749, name: 'Romance'},
  {id: 878, name: 'Science Fiction'},
  {id: 10770, name: 'TV Movie'},
  {id: 53, name: 'Thriller'},
  {id: 10752, name: 'War'},
  {id: 37, name: 'Western'},
]

function onSubmitSearchForm (e) {
    e.preventDefault();
 
    const searchedMovie = e.currentTarget.elements.movie.value;
    console.log(searchedMovie)
    
    searchAPIName(searchedMovie).then(result => {
      console.log(result[0])
      moviesRenderOnPage(result);
    })
    
    

}


function searchAPIName (name) {
   return fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75&query=${name}`).then(response => response.json()).then(data => data.results) 
};
function searchAPITop () {
  return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75`).then(response => response.json()).then(data => data.results)
}



function movieCardMaker ({poster_path, title, genre_ids, release_date, vote_average}) {
  
return  `
        <div class="card">
            <img src=https://image.tmdb.org/t/p/original${poster_path} width="280" height="398">
            <div class="card__description">
              <h4 class="movie-name">${title}</h4>
              <div class="movie-spesification">
                <span class="movie-genre">${genreСonverter(genre_ids)}</span>
                <span class="movie-release-delimeter"></span>
                <span class="movie-release">${releaseDate(release_date)}</span>
                <span class="movie-rating">${vote_average}</span>
              </div>
            </div>
        </div>
`
}
refs.searchFormEl.addEventListener('submit', onSubmitSearchForm);

function genreСonverter (genresArray) {
  return genresArray.map(item => {
    for (genre of GENRES) {
      if (item === genre.id) {
        return genre.name;
      }
    }
  }).join(", ");
  
}
function releaseDate (dateString) {
return dateString.slice(0, 4);
}

function onStart () {
  searchAPITop().then(result => {
    moviesRenderOnPage(result);
  });
};


function moviesRenderOnPage (data) {
  refs.galeryEl.innerHTML = data.reduce((forRender, item) => {
    return forRender += movieCardMaker(item);
}, "");
};
onStart ()