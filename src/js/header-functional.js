import { refs } from './refs';
import { makerAndRender } from './galerry-HtmlMacker';
import { onLibraryWatchedBtn } from './library-HtmlMacker';
import { moreBtnIndicator } from './more-btn-functional';
import Api from './API';

export const apiServise = new Api;

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
   
  const searchedMovie = e.currentTarget.elements.movie.value;
  console.log(searchedMovie)
    

  apiServise.searchAPIName(searchedMovie).then(dataToRenderFunction => {
    console.log(dataToRenderFunction)


    makerAndRender.moviesRenderOnPage(dataToRenderFunction.results);
    moreBtnIndicator(dataToRenderFunction)
    
  });
};



export { onHomeBtn, onSubmitSearchForm, onLibraryBtn };


