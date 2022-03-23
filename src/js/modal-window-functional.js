import { API } from './API'
import { refs } from './refs';
import { modalWindowRender } from './modal-window-html-maker';

let movieDataObjectToLocalStorage = {};


export function onCardClick (event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const idToSearch = event.target.dataset.id;
  




  API.searchAPIbyID(idToSearch).then(result => {
      
    refs.galeryEl.insertAdjacentHTML("afterbegin", modalWindowRender(result));
    movieDataObjectToLocalStorage = result;
  });
  refs.galeryEl.addEventListener('click', onModalWindowCloseBtn);
  refs.galeryEl.addEventListener('click', onAddToWatched);
  refs.galeryEl.addEventListener('click', onQueue);
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
      localStorage.setItem("watched-storage", JSON.stringify(downloadFromLocaleStorage));
    };
  
  
    } else {
      const toStorageArr = [];
      toStorageArr.push(movieDataObjectToLocalStorage)
      localStorage.setItem("watched-storage", JSON.stringify(toStorageArr));
    }

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
    localStorage.setItem("queue-storage", JSON.stringify(downloadFromLocaleStorage));
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

