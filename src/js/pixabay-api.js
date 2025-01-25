import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: apiKey,
      q: searchedQuery,
      page: currentPage,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(`${BASE_URL}?`, axiosOptions);
};
