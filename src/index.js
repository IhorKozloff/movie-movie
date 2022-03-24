import { API } from './js/API';
import { refs } from './js/refs';
import { makerAndRender } from './js/galerry-HtmlMacker';
import { onCardClick, onTrailerBtn } from './js/modal-window-functional';
import { onHomeBtn, onSubmitSearchForm, onLibraryBtn } from './js/header-functional';
import { onLibraryWatchedBtn, onLibraryQueueBtn } from './js/library-HtmlMacker';



function onStart () {
  API.searchAPITop().then(result => {
    makerAndRender.moviesRenderOnPage(result);
    
  });
};


onStart();
refs.galeryEl.addEventListener('click', onCardClick);
refs.searchFormEl.addEventListener('submit', onSubmitSearchForm);
refs.homeBtnEl.addEventListener('click', onHomeBtn);
refs.libraryBtnEl.addEventListener('click', onLibraryBtn);
refs.libraryWatchedBtnEl.addEventListener('click', onLibraryWatchedBtn);
refs.libraryQueueBtnEl.addEventListener('click', onLibraryQueueBtn);




