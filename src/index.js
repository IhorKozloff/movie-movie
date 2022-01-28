import activePage from "./active-page"

activePage.initialize('btn-home1', 'btn-library1', 'gallery1');


const a = `<ul class="card" style="display: block">
<li style="margin-bottom: 20px">
  <p>Картинка первого элемента</p>
  <p>Описание первого элемента</p>
</li>
<li style="margin-bottom: 20px">
  <p>Картинка второго элемента</p>
  <p>Описание первого элемента</p>
</li>
<li style="margin-bottom: 20px">
  <p>Картинка третьего элемента</p>
  <p>Описание первого элемента</p>
</li>
</ul>`;
const b = `<ul class="card" style="display: block">
<li style="margin-bottom: 20px">
  <p>Избранное (картинка)</p>
  <p>Избранное 1</p>
</li>
<li style="margin-bottom: 20px">
  <p>Избранное (картинка)</p>
  <p>Избранное 2</p>
</li>
<li style="margin-bottom: 20px">
  <p>Избранное (картинка)</p>
  <p>Избранное 3</p>
</li>
</ul>`;


activePage.homeBtnEl.addEventListener('click', () => {
  activePage.onHomeBtnActive(a);
})


activePage.libraryBtnEl.addEventListener('click', () => {
  activePage.onLibraryBtnActive(b);
});