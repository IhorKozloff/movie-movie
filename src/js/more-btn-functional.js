
import { makerAndRender } from './galerry-HtmlMacker';
import { refs } from './refs';
import { apiServise } from './header-functional';


export function moreBtnIndicator ({total_pages, page}) {
    if (total_pages > page) {
        seeMoreBtnRender();
        const moreBtnEl = document.querySelector('#watch-more-btn');
        moreBtnEl.addEventListener('click', onMoreBtnClick);
    }

}

function seeMoreBtnRender () {
    refs.galeryEl.insertAdjacentHTML('beforeend', `
      <div class="more-btn-wrapper">
        <button type="button" class="inform-btn watch-more" id="watch-more-btn">watch more</button>
      </div>  
    `)
};

function removeSeeMoreBtn () {
  const btnToRemove = document.querySelector('#watch-more-btn');
  btnToRemove.addEventListener('click', onMoreBtnClick);
  btnToRemove.remove();
};


function onMoreBtnClick () {

  removeSeeMoreBtn();
    
  
  const inputValue = refs.searchFormEl.elements.movie.value;

  if (inputValue) {
    console.log('запустилась функция через поиск')
    apiServise.searchAPINameOnNextPage(inputValue).then(result => {
      console.log(result)
        
      makerAndRender.moviesAddOnPage(result.results);

      moreBtnIndicator(result);
    
    });
  } else {
    console.log('запустилась функция топ')
    apiServise.searchAPITopOnNextPage().then(result => {
      console.log(result)
        
      makerAndRender.moviesAddOnPage(result.results);

      moreBtnIndicator(result);
    
    });
}



};