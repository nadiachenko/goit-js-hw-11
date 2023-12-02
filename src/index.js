
import Notiflix from 'notiflix';
// import axios from "axios"
//  axios.defaults.headers.common['x-api-key'] = '40934415-dfd7c79ea7303db44ba7dd17c';

import SearchImageClass from './images-api.js'

const refs = {
    searchBtn: document.querySelector('button[type="submit"]'),
    searchForm: document.querySelector('.search-form'),
    loadMore: document.querySelector('.load-more'),
    gallery: document.querySelector('.gallery')

}
refs.loadMore.style.visibility = 'hidden';


console.log(refs.loadMore)
const searchImageClass = new SearchImageClass();

refs.searchForm.addEventListener("submit", searchImage);

function searchImage(e) {
    e.preventDefault();
 
    refs.gallery.innerHTML = "";
    searchImageClass.query = e.currentTarget.elements.searchQuery.value;
    searchImageClass.resetPage()
    displayFetchedImages()   
}

refs.loadMore.addEventListener("click", displayFetchedImages);


function displayFetchedImages() {

  loadMoreDisable()
  searchImageClass.fetchImages()
    .then(renderImages,loadMoreEnable)
    .catch(() => {
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
  
    })
  }


function loadMoreDisable() {
  refs.loadMore.style.visibility = 'visible';
  refs.loadMore.disabled = true;
  refs.loadMore.textContent = 'Loading...';  
  
}
function loadMoreEnable() {
  refs.loadMore.disabled = false;
  refs.loadMore.style.visibility = 'visible';
  refs.loadMore.textContent = 'Load more';  
}

function renderImages(hits) {
  const markup = hits
    .map((hit) => {
      return `<div class="photo-card">
        <img src="${hit.webformatURL}" alt="${hit.tags}" width='360' height='270' loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>${hit.likes}
          </p>
          <p class="info-item">
            <b>Views</b>${hit.views}
          </p>
          <p class="info-item">
            <b>Comments</b>${hit.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>${hit.downloads}
          </p>
        </div>
      </div>`;
    })
    .join("");

  refs.gallery.insertAdjacentHTML("beforeend", markup);

  if (hits.length < 40) {
    refs.loadMore.style.visibility = 'hidden';
    Notiflix.Notify.failure('"We\'re sorry, but you\'ve reached the end of search results."');
  } else {
    loadMoreEnable();
  }
}





