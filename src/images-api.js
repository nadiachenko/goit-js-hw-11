import Notiflix from 'notiflix';
import axios from 'axios';

export default class SearchImageClass {
    constructor() {
        this.searchKey = '';
        this.page = 1;
    }

    async fetchImages() {
        try {
            const response = await axios.get('https://pixabay.com/api/', {
                params: {
                    key: '40934415-dfd7c79ea7303db44ba7dd17c',
                    q: this.searchKey,
                    image_type: 'photo',
                    per_page: 40,
                    orientation: 'horizontal',
                    safesearch: true,
                    page: this.page,
                },
            });

            this.page += 1;
            return response.data.hits;
        } catch (error) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw error;
        }
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchKey;
    }

    set query(newQuery) {
        this.searchKey = newQuery;
    }
}
