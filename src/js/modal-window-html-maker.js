// Конвертеры для рендеринга................
function queueTextContentGenerate (dataToSearchID) {

    if (localStorage.getItem("queue-storage")){
      const downloadFromLocaleStorage = JSON.parse(localStorage.getItem("queue-storage"));
      const check = downloadFromLocaleStorage.find(item => item.id === dataToSearchID);
  
      if(!check) {
        return "add to queue"
      } else {
        return "remove queue"
      };
  
  
  
    } else {
      return "add to queue"
    }
  
   
    
};
function watchedTextContentGenerate (dataToSearchID) {
  
    if (localStorage.getItem("watched-storage")){
      const downloadFromLocaleStorage = JSON.parse(localStorage.getItem("watched-storage"));
      const check = downloadFromLocaleStorage.find(item => item.id === dataToSearchID);
  
      if(!check) {
        return "add to watched"
      } else {
        return "remove watched"
      };
  
  
  
    } else {
      return "add to watched"
    }
  
   
    
};
function modalWindowGenresConverter (data) {
    return data.map(item => {
      return item.name
    }).join(", ");
};  
  
  // Рендеринг модального окна
export function modalWindowRender ({poster_path, original_title, popularity, genres, vote_average, vote_count, overview, id}) {
    return `
      <div class="modal-overlay">
        <div class="modal-inform-movie">
          <button type="button" class="modal-btn-close"></button>
          <div class="image-wrapper">
            <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="" width="400px" height="477px">
          </div>
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
              <button type="button" class="inform-btn" data-inform-btn="watched">${watchedTextContentGenerate(id)}</button>
              <button type="button" class="inform-btn" data-inform-btn="queue">${queueTextContentGenerate(id)}</button>
            </div>
            <div class="trailer-btn-wrapper">
              <div class="trailer-tittle-wrapper">
                <p class="trailer-tittle trailer-tittle-upper">watch</p>
                <p class="trailer-tittle trailer-tittle-lower">trailer</p>
              </div>
              <span class="trailer-pointer"></span>
              <button type="button" class="inform-btn trailer-btn"></button>
            </div>
          </div>
        </div>
      </div>
   `
};

export function modalWindowTrailerRender ({key}) {
  const youTubeRef = `http://www.youtube.com/embed/${key}`;
      console.log(youTubeRef);
      const trailerMurkUp = `
          <iframe id="ytplayer" type="text/html" width="890" height="600" frameborder="0" allowfullscreen allow="autoplay" 
          src="http://www.youtube.com/embed/${key}?autoplay=1"></iframe>
          <button type="button" class="trailer-close-btn"> Close</button>
      `;
      document.querySelector('.modal-inform-movie').insertAdjacentHTML('afterbegin', trailerMurkUp);
}
  // .........................................
  