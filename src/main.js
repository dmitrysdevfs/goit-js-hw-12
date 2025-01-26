import { createdGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-wrapper');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

const toastSettings = {
  messageSize: '16',
  messageColor: 'white',
  backgroundColor: ' #E34234',
  position: 'topRight',
  icon: 'fa-regular fa-circle-xmark',
  progressBar: false,
  timeout: 2000,
  close: false,
  maxWidth: '360px',
};

let searchedQuery = '';
let page = 1;
let totalImages = 0;
let renderedImages = 0;
let lightbox;

hideLoadMoreBtn();

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.search_query.value.trim();

    if (searchedQuery === '') {
      iziToast.show({
        message: 'The field must be filled!',
        ...toastSettings,
      });

      return;
    }

    page = 1;

    showLoader();
    galleryEl.innerHTML = '';

    hideLoadMoreBtn();

    const { data } = await fetchPhotosByQuery(searchedQuery, page);
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

    totalImages = data.total;
    renderedImages = data.hits.length;

    if (data.total > 15) {
      showLoadMoreBtn();
    }

    const galleryTemplate = data?.hits
      .map(el => createdGalleryCardTemplate(el))
      .join('');

    galleryEl.innerHTML = galleryTemplate;

    hideLoader();

    searchFormEl.reset();

    loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

    showLightbox();
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

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    showLoader();

    hideLoadMoreBtn();

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    renderedImages += data.hits.length;
    console.log('After LoadMore RendImgs: ', renderedImages);

    const galleryTemplate = data?.hits
      .map(el => createdGalleryCardTemplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    hideLoader();

    showLightbox();

    // renderedImages < totalImages ? showLoadMoreBtn() : hideLoadMoreBtn();
    if (renderedImages < totalImages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        ...toastSettings,
        backgroundColor: ' #4169E1',
        icon: 'fa-regular fa-bell',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

function showLoadMoreBtn() {
  loadMoreBtnEl.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadMoreBtnEl.style.display = 'none';
}

function showLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
