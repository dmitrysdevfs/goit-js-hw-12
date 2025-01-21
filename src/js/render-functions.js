export const createdGalleryCardTemplate = imgInfo => {
  const uniqueTags = [
    ...new Set(imgInfo.tags.split(',').map(tag => tag.trim())),
  ].join(', ');

  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${imgInfo.largeImageURL}">
        <figure class="gallery-figure">
          <img
            class="gallery-image"
            src="${imgInfo.webformatURL}"
            alt="${uniqueTags}"
          />
          <figcaption class="image-stats">
            <div class="stat-item">
              <p class="stat-label">Likes</p>
              <p class="stat-value">${imgInfo.likes}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Views</p>
              <p class="stat-value">${imgInfo.views}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Comments</p>
              <p class="stat-value">${imgInfo.comments}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Downloads</p>
              <p class="stat-value">${imgInfo.downloads}</p>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  `;
};
