// Как это работает?
// 1. Необходимо импортировать сервис в свой js файл 
// Например: import yourName from "./active-page" (* yourName - ваше придуманное имя для работы с сервисом).

// 2. С помощью метода --> initialize() <-- Инициализировать, т.е передать сервису свои ДОМ данные о кнопках и разметке - где отображается страничка.
//   Метод принимает три параметра:
//     1. Класс кнопки HOME.
//     2. Класс кнопки LIBRARY.
//     3. Класс дива, секции, списка - в котором будет отображаться разметка.
//   Например: yourName.initialize('btn-home','btn-library','gallery'). 
//   Именно эти классы из примера, и стоят по умолчанию. Можно использовать и их, предварительно прописав в разметке.
//   В таком случае шаг инициализации можно пропустить. Свои же классы необходимо передавать без точек, в формате строки.

// 3. На кнопки homeBtnEl и libraryBtnEl [ВАЖНО: Необходимо использовать исключительно эти названия кнопок т.к сервис сам ищет элементы ДОМа, повторно это делать не нужно] повесить прослушивателя событий 'click',
//    и вызывать методы   --> onHomeBtnActive() и onLibraryBtnActive() соответственно <--. Методы принимают один параметр - это ваша шаблонная строка для разметки в HTML.

//    Например: 

//    yourName.homeBtnEl.addEventListener('click', () => {

    // yourName.onHomeBtnActive(`
    //     <ul>
    //         <li style="margin-bottom: 20px">
    //             <p>Избранное (картинка)</p>
    //             <p>Избранное 1</p>
    //         </li>
    //         <li style="margin-bottom: 20px">
    //             <p>Избранное (картинка)</p>
    //             <p>Избранное 2</p>
    //         </li>
    //         <li style="margin-bottom: 20px">
    //             <p>Избранное (картинка)</p>
    //             <p>Избранное 3</p>
    //         </li>
    //     </ul>
    //                 `)

//     }); 


// или в качестве переменной:

// const string = `У сороконожки 20 писек`

// yourName.homeBtnEl.addEventListener('click', () => {
//     yourName.onHomeBtnActive(string);
// }); 


export default
{
        homeBtnEl: document.querySelector('.btn-home'),
        libraryBtnEl: document.querySelector('.btn-library'),
        sectionEl: document.querySelector('.gallery'),

    initialize (home, library, section) {
        this.homeBtnEl = document.querySelector(`.${home}`);
        this.libraryBtnEl = document.querySelector(`.${library}`);
        this.sectionEl = document.querySelector(`.${section}`);
    },

    onHomeBtnActive (string) {
        if (!this.homeBtnEl.classList.contains('active')) {
            this.sectionEl.innerHTML = string;
            this.homeBtnEl.classList.add('active');
            this.libraryBtnEl.classList.remove('active');
        }
    },

    onLibraryBtnActive (string) {
        if (!this.libraryBtnEl.classList.contains('active')) {
            this.sectionEl.innerHTML = string;
            this.homeBtnEl.classList.remove('active');
            this.libraryBtnEl.classList.add('active');
        }
    },
  
};









