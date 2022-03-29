import { API } from './js/API';
import { refs } from './js/refs';
import { makerAndRender } from './js/galerry-HtmlMacker';
import { onCardClick, onTrailerBtn } from './js/modal-window-functional';
import { onHomeBtn, onSubmitSearchForm, onLibraryBtn } from './js/header-functional';
import { onLibraryWatchedBtn, onLibraryQueueBtn } from './js/library-HtmlMacker';
// import { moreBtnIndicator } from './js/more-btn-functional';



function onStart () {
  
   

  API.searchAPITop().then(result => {
    const totalPages = result.total_pages;
    
    makerAndRender.moviesRenderOnPage(result.results);
    // если у резалта число страниц больше  константы - то загрузить кнопку
  })
  // .then(x => {
  //   makerAndRender.seeMoreBtnRender();
  //   const moreBtnEl = document.querySelector('#watch-more-btn');
  //   moreBtnEl.addEventListener('click', onMoreBtn);


  //   function onMoreBtn () {
  //     console.log('Загрузить еще');
  //   }
  // });
 
  
};


onStart();
refs.galeryEl.addEventListener('click', onCardClick);
refs.searchFormEl.addEventListener('submit', onSubmitSearchForm);
refs.homeBtnEl.addEventListener('click', onHomeBtn);
refs.libraryBtnEl.addEventListener('click', onLibraryBtn);
refs.libraryWatchedBtnEl.addEventListener('click', onLibraryWatchedBtn);
refs.libraryQueueBtnEl.addEventListener('click', onLibraryQueueBtn);




