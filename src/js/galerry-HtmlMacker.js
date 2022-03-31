import { GENRES } from './genres';
import { refs } from './refs'; 

export const makerAndRender = {
    releaseDateConverter (dateString) {
        return dateString.slice(0, 4);
    },
    
    genreСonverter (genresDataCollection) {
        return genresDataCollection.map(item => {
          for (const genreItem of GENRES) {
            if (item === genreItem.id) {
              return genreItem.name;
            }
          }
        }).join(", ");
        
    },
    
    movieCardMaker ({poster_path, title, genre_ids, release_date, vote_average, id}) {
      
        return  `
                <div class="card">
                    <img src=https://image.tmdb.org/t/p/w300${poster_path} width="280" height="398" data-id="${id}">
                    <div class="card__description">
                      <h4 class="movie-name">${title}</h4>
                      <div class="movie-spesification">
                        <span class="movie-genre">${makerAndRender.genreСonverter(genre_ids)}</span>
                        <span class="movie-release-delimeter"></span>
                        <span class="movie-release">${makerAndRender.releaseDateConverter(release_date)}</span>
                        <span class="movie-rating">${vote_average}</span>
                      </div>
                    </div>
                </div>
        `
    },
    moviesRenderOnPage (data) {
      refs.galeryEl.innerHTML = data.reduce((forRender, item) => {
        return forRender += makerAndRender.movieCardMaker(item);
      }, "");
    },
    moviesAddOnPage (data) {
      refs.galeryEl.insertAdjacentHTML('beforeend', data.reduce((forRender, item) => {
        return forRender += makerAndRender.movieCardMaker(item);
      }, ""))
    },
    
    
};


