const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
