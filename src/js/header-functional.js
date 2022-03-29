import { API } from './API';
import { refs } from './refs';
import { makerAndRender } from './galerry-HtmlMacker';
import { onLibraryWatchedBtn } from './library-HtmlMacker';
// import { moreBtnIndicator } from './more-btn-functional';


let pageCount = 1;  
let totalPages;
let searchedMovie = '';


function onMoreBtn () {
  document.querySelector('#watch-more-btn').removeEventListener('click', onMoreBtn);
  document.querySelector('#watch-more-btn').remove();
  pageCount += 1;


    API.searchAPIName(searchedMovie, pageCount).then(dataToRenderFunction => {
      console.log(dataToRenderFunction)
      makerAndRender.moviesAddOnPage(dataToRenderFunction.data.results);
   
      if (pageCount < totalPages) {
        makerAndRender.seeMoreBtnRender();
        document.querySelector('#watch-more-btn').addEventListener('click', onMoreBtn);
      }
    
    })
};

function onHomeBtn () {
    window.location.reload()
};
function onLibraryBtn () {
  
  if (!refs.libraryBtnEl.classList.contains('active')) {
    refs.libraryBtnEl.classList.add('active');
    refs.homeBtnEl.classList.remove('active');
    refs.headerContainerEl.classList.add('library');
    refs.libraryBtnWrapperEl.classList.add('libraryOn');
    
    onLibraryWatchedBtn();
  } 
};


function onSubmitSearchForm (e) {
    e.preventDefault();
   
    searchedMovie = e.currentTarget.elements.movie.value;
    console.log(searchedMovie)
    

    API.searchAPIName(searchedMovie, pageCount).then(dataToRenderFunction => {
      console.log(dataToRenderFunction)
      makerAndRender.moviesRenderOnPage(dataToRenderFunction.data.results);

      totalPages = dataToRenderFunction.data.total_pages;
      
      console.log(totalPages)
   
      if (pageCount < totalPages) {
        makerAndRender.seeMoreBtnRender();
        document.querySelector('#watch-more-btn').addEventListener('click', onMoreBtn);
      }
    
    })
0;}



export { onHomeBtn, onSubmitSearchForm, onLibraryBtn };


