import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const makeGalleryItemsMarkUp = ({ original, preview, description }) => {
  return `<li><a class="gallery__item" href=${original}>
  <img style="display:block"
  class="gallery__image"
  src=${preview}
  alt=${description}/>
</a></li>`
};

const makeGalleryMarkUp = galleryItems.map(makeGalleryItemsMarkUp).join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryMarkUp);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});