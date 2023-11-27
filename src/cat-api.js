// import Notiflix from 'notiflix';
// import axios from "axios"


// axios.defaults.headers.common['x-api-key'] = 'live_Y4i6k17T2ZTgO1C7IOAKguuc1gQHBAjRQwY8e4x2AhZlbXsNCyDFTTw1CCuM3Skc';


// function fetchCatByBreed(breedId) {
//   return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then((response) => {

//       if (!response.data) {
//         console.log(error);
//       }
//       return response.data;
//     })
//     .catch(() => {
     
//       console.error('Error fetching cats:', error);
//      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
//     });
// }

// function fetchCats() {

//   return axios.get(`https://api.thecatapi.com/v1/breeds`)
//     .then((response) => {

//       if (!response.data) {
//         console.log(error);
//       }
//       return response.data;
//     })
//     .catch(() => {
     
//       console.error('Error fetching cats:', error);
//  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
//     });

// }

// export { fetchCats, fetchCatByBreed }
