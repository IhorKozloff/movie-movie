import { API } from './API'
import { refs } from './refs';

export function onCardClick (event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const idToSearch = event.target.dataset.id;

  API.searchAPIbyID(idToSearch).then(result => {
      
    refs.galeryEl.insertAdjacentHTML("afterbegin", modalWindowRender(result));
      
  });
  refs.galeryEl.addEventListener('click', onModalWindowCloseBtn);
};

function modalWindowRender ({poster_path, original_title, popularity, genres, vote_average, vote_count, overview}) {
  return `
    <div class="modal-overlay">
      <div class="modal-inform-movie">
        <button type="button" class="modal-btn-close">X</button>
      <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="" width="400px" height="477px">
      <div class="inform-block">
        <h2>${original_title}</h2>
        <ul class="movie-inform">
          <li class="inform-item">
            <p class="item-name">Vote / Votes</p>
            <span class="item-value">${vote_average} / ${vote_count}</span>
          </li>
          <li class="inform-item">
            <p class="item-name">Popularity</p>
            <span class="item-value">${popularity}</span>
          </li>
          <li class="inform-item">
            <p class="item-name">Original Title</p>
            <span class="item-value">${original_title}</span>
          </li>
          <li class="inform-item">
            <p class="item-name">Genre</p>
            <span class="item-value">${modalWindowGenresConverter(genres)}</span>
          </li>
        </ul>
        
        <div class="movie-description">
          <p>About </p>
          <p class="description-text">${overview}</p>
        </div>
        <div class="infrom-btns-wrapper">
          <button type="button" class="inform-btn" data-inform-btn="watched">add to Watched </button>
          <button type="button" class="inform-btn" data-inform-btn="queue">queue</button>
        </div>
      </div>
      </div>
    </div>
 `
};
 
function modalWindowGenresConverter (data) {
  return data.map(item => {
    return item.name
  }).join(", ");
};  

function onModalWindowCloseBtn (event) {
  if (event.target.className !== 'modal-btn-close') {
    return
  }
  document.querySelector('.modal-overlay').remove();
  refs.galeryEl.removeEventListener('click', onModalWindowCloseBtn);
};