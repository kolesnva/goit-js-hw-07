import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryRef = document.querySelector('div.gallery');

const makeGalleryItemsMarkUp = ({original, preview, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
}

const makeGalleryMarkUp = galleryItems.map(makeGalleryItemsMarkUp).join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryMarkUp);

// Реализация делегирования на div.gallery и получение url большого изображения.

