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
    if (localStorage.getItem("watched-storage")){
        makerAndRender.moviesRenderOnPage(toLibraryRenderDataCreator("watched-storage"));
    } else {
        refs.galeryEl.innerHTML = `<p>В разделе WATCHED еще ничего нет</p>`
    }
};

function queueSectionRender () {
    console.log('ПОшла рендерится секция Кьюв-е');
    if (localStorage.getItem("queue-storage")){
        makerAndRender.moviesRenderOnPage(toLibraryRenderDataCreator("queue-storage"));
    } else {
        refs.galeryEl.innerHTML = `<p>В разделе QUEUE еще ничего нет</p>`
    }
};


function toLibraryRenderDataCreator (storage) {
    const downloadFromLocaleStorage = JSON.parse(localStorage.getItem(storage));
 

    return downloadFromLocaleStorage.map(item => {
      item.genre_ids = item.genres.map(genresObject => genresObject.id);
      return item;
    })
   
}
export { onLibraryWatchedBtn, onLibraryQueueBtn };