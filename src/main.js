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

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const searchedQuery =
      event.currentTarget.elements.search_query.value.trim();

    if (searchedQuery === '') {
      iziToast.show({
        message: 'The field must be filled!',
        ...toastSettings,
      });

      return;
    }

    showLoader();
    galleryEl.innerHTML = '';

    const { data } = await fetchPhotosByQuery(searchedQuery);
    if (data.total === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        ...toastSettings,
      });

      galleryEl.innerHTML = '';

      hideLoader();

      searchFormEl.reset();

      return;
    }

    const galleryTemplate = data?.hits
      .map(el => createdGalleryCardTemplate(el))
      .join('');

    galleryEl.innerHTML = galleryTemplate;

    hideLoader();

    searchFormEl.reset();

    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function showLoader() {
  loaderEl.style.display = 'flex';
}

function hideLoader() {
  loaderEl.style.display = 'none';
}
