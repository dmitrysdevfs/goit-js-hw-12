import { createdGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-wrapper');

const toastSettings = {
  messageSize: '16',
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'topRight',
  icon: 'fa-regular fa-circle-xmark',
  progressBar: false,
  timeout: 2000,
  close: false,
  maxWidth: '360px',
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.search_query.value.trim();

  if (searchedQuery === '') {
    iziToast.show({
      message: 'The field must be filled!',
      ...toastSettings,
    });

    return;
  }

  showLoader();
  galleryEl.innerHTML = '';

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          ...toastSettings,
        });

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        hideLoader();

        return;
      }

      const galleryTemplate = data?.hits
        .map(el => createdGalleryCardTemplate(el))
        .join('');

      galleryEl.innerHTML = galleryTemplate;

      searchFormEl.reset();

      let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function showLoader() {
  loaderEl.style.display = 'flex';
}

function hideLoader() {
  loaderEl.style.display = 'none';
}
