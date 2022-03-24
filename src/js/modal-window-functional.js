import { API } from './API'
import { refs } from './refs';
import { modalWindowRender } from './modal-window-html-maker';
import { watchedSectionRender, queueSectionRender } from './library-HtmlMacker';

let movieDataObjectToLocalStorage = {};


export function onCardClick (event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const idToSearch = event.target.dataset.id;
  




  API.searchAPIbyID(idToSearch).then(result => {
      
    refs.preGalleryEl.innerHTML = `${modalWindowRender(result)}`;
    
    movieDataObjectToLocalStorage = result;
  });
  refs.preGalleryEl.addEventListener('click', onModalWindowCloseBtn);
  refs.preGalleryEl.addEventListener('click', onAddToWatched);
  refs.preGalleryEl.addEventListener('click', onQueue);


  function onTrailerBtn (event) {
    if(!event.target.classList.contains('trailer-btn')) {
      return;
    }
    API.searchAPIVideos(idToSearch).then(trailersCatalogue => {
      console.log(trailersCatalogue[0])
    })

  }
  refs.preGalleryEl.addEventListener('click', onTrailerBtn);

  
  
};


 









// Функционал, кнопки и т.д......................

function onModalWindowCloseBtn (event) {
  if (event.target.className !== 'modal-btn-close') {
    return
  }
  document.querySelector('.modal-overlay').remove();
  refs.galeryEl.removeEventListener('click', onModalWindowCloseBtn);
};

function onAddToWatched (event) {
  if (event.target.dataset.informBtn !== "watched") {
    return
  }
  
  console.log('нажато на вотчед')


  if (localStorage.getItem("watched-storage")){
    const downloadFromLocaleStorage = JSON.parse(localStorage.getItem("watched-storage"));
    const check = downloadFromLocaleStorage.find(item => item.id === movieDataObjectToLocalStorage.id);
  
    if (!check) {
      downloadFromLocaleStorage.push(movieDataObjectToLocalStorage);
      localStorage.setItem("watched-storage", JSON.stringify(downloadFromLocaleStorage));
    } else {
      downloadFromLocaleStorage.splice(downloadFromLocaleStorage.indexOf(check), 1);

      if (downloadFromLocaleStorage.length === 0) {
        localStorage.removeItem("watched-storage");
      } else {
        localStorage.setItem("watched-storage", JSON.stringify(downloadFromLocaleStorage));
      }
      
      if (refs.libraryWatchedBtnEl.classList.contains('library-active')) {
        watchedSectionRender();
      }
      
    
    };
  
  //иначе если локал сторедж не тру - создать массив запихнуть туда обьект и залить в созданный локал сторедж
  } else {
    const toStorageArr = [];
    toStorageArr.push(movieDataObjectToLocalStorage)
    localStorage.setItem("watched-storage", JSON.stringify(toStorageArr));
  }
//замена текста в кнопках
    if(event.target.textContent === "add to watched") {
      event.target.textContent = "remove watched";
    } else {
      event.target.textContent = "add to watched";
    };


};

function onQueue (event) {
  if (event.target.dataset.informBtn !== "queue") {
    return
  }
  console.log('нажато на кьюве')

if (localStorage.getItem("queue-storage")){
  const downloadFromLocaleStorage = JSON.parse(localStorage.getItem("queue-storage"));
  
  
  const check = downloadFromLocaleStorage.find(item => item.id === movieDataObjectToLocalStorage.id);
  console.log(check)



  if (!check) {
    downloadFromLocaleStorage.push(movieDataObjectToLocalStorage);
    localStorage.setItem("queue-storage", JSON.stringify(downloadFromLocaleStorage));
  } else {
    downloadFromLocaleStorage.splice(downloadFromLocaleStorage.indexOf(check), 1);
    if (downloadFromLocaleStorage.length === 0) {
      localStorage.removeItem("queue-storage");
    } else {
      localStorage.setItem("queue-storage", JSON.stringify(downloadFromLocaleStorage));
    }
    if (refs.libraryQueueBtnEl.classList.contains('library-active')) {
      queueSectionRender();
    }
  };


  } else {
    const toStorageArr = [];
    toStorageArr.push(movieDataObjectToLocalStorage)
    localStorage.setItem("queue-storage", JSON.stringify(toStorageArr));
  }







  if(event.target.textContent === "add to queue") {
    event.target.textContent = "remove queue";
  } else {
    event.target.textContent = "add to queue";
  };
  
};

