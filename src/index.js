

// import Notiflix from 'notiflix';
// import { fetchCats, fetchCatByBreed } from './cat-api.js'

// const refs = {
//   selectField: document.querySelector('.breed-select'),
//   catInfo: document.querySelector('.cat-info'),
//   loader: document.querySelector('.loader'),
//   errorMessage: document.querySelector('.error')
// }
// refs.selectField.hidden = true;
// refs.errorMessage.hidden = true;


// fetchCats().then(cats => {
//   refs.loader.hidden = true;
//   refs.errorMessage.hidden = true;
//   renderCats(cats);
// })
//   .catch(() => {
//     Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');

//   })


// function renderCats(cats) {
//   refs.selectField.hidden = false;

//   refs.loader.hidden = true;
//   const markup = cats
//     .map((cat) => {

//       return `<option value="${cat.id}">${cat.name}</option>`;
//     })
//     .join("");
//   refs.selectField.insertAdjacentHTML("beforeend", markup);

// }

// //EVENT

// refs.selectField.addEventListener("input", displayCat)


// function displayCat() {
//   refs.loader.hidden = false;
//   refs.catInfo.style.visibility = 'hidden';   
//   fetchCatByBreed(refs.selectField.value)
//     .then(cat => {

//       console.log(cat)
//       renderCat(cat);

//     })
//     .catch(() => {
//       Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
//     })
//   console.log(refs.selectField.value);
// }

// function renderCat(cat) {
//  refs.catInfo.textContent = '';
//  refs.catInfo.style.visibility = 'visible'; 
//   refs.catInfo.hidden = false;
//   refs.loader.hidden = true;
//   const catMarkup = `<img width='500' height='500' src="${cat[0].url}"/>
//  <div class="text-content">

//   <h2>${cat[0].breeds[0].name}</h3>
//   <div class ='description'>${cat[0].breeds[0].description}</div>
//   <h3>Temperament</h2>
//   <div class='temperament'>${cat[0].breeds[0].temperament}</div>
//   </div>`
//   refs.catInfo.insertAdjacentHTML("beforeend", catMarkup);

// }

