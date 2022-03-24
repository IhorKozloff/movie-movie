import { refs } from './refs';
import {makerAndRender} from './galerry-HtmlMacker';



function onLibraryWatchedBtn () {
if (!refs.libraryWatchedBtnEl.classList.contains('library-active')) {

    refs.libraryQueueBtnEl.classList.remove('library-active');
    refs.libraryWatchedBtnEl.classList.add('library-active')
    watchedSectionRender();
} 
};

function onLibraryQueueBtn () {
    if (!refs.libraryQueueBtnEl.classList.contains('library-active')) {

        refs.libraryWatchedBtnEl.classList.remove('library-active');

        refs.libraryQueueBtnEl.classList.add('library-active');
        queueSectionRender();
    } 
};



function watchedSectionRender () {
    console.log('ПОшла рендерится секция Вотчед');
    getAndRenderDataFromLocalStorage('watched-storage');
    
};

function queueSectionRender () {
    console.log('ПОшла рендерится секция Кьюв-е');
    getAndRenderDataFromLocalStorage('queue-storage');
};


function toLibraryRenderDataCreator (storage) {

    return storage.map(item => {
      item.genre_ids = item.genres.map(genresObject => genresObject.id);
      return item;
    })
   
}

function getAndRenderDataFromLocalStorage (storage) {
    const storageDownloadData = JSON.parse(localStorage.getItem(storage));
    if (storageDownloadData){
        
        makerAndRender.moviesRenderOnPage(toLibraryRenderDataCreator(storageDownloadData));
    } else {
        
        refs.galeryEl.innerHTML = `<p>В ${storage.split("-")[0]} пока еще пусто</p>`
    }
}
export { onLibraryWatchedBtn, onLibraryQueueBtn, watchedSectionRender, queueSectionRender };