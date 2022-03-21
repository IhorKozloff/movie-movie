import { API } from './js/API';
import { refs } from './js/refs';
import { makerAndRender } from './js/HtmlMacker';
import { onCardClick } from './js/modal-inform-window';


const beginingInterface = {

  moviesRenderOnPage (data) {
    refs.galeryEl.innerHTML = data.reduce((forRender, item) => {
      return forRender += makerAndRender.movieCardMaker(item);
    }, "");
  },
  
  onSubmitSearchForm (e) {
    e.preventDefault();
   
    const searchedMovie = e.currentTarget.elements.movie.value;
    console.log(searchedMovie)
      
    API.searchAPIName(searchedMovie).then(result => {
      console.log(result[0])
      beginingInterface.moviesRenderOnPage(result);
    });
  },
  
  
  onStart () {
    API.searchAPITop().then(result => {
      this.moviesRenderOnPage(result);
      
    });
  },
  
  
  onHomeBtn () {
    window.location.reload()
  },
  
  
  
};

refs.searchFormEl.addEventListener('submit', beginingInterface.onSubmitSearchForm);
refs.homeBtnEl.addEventListener('click', beginingInterface.onHomeBtn);
refs.galeryEl.addEventListener('click', onCardClick);



beginingInterface.onStart();
