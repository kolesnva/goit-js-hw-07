import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('div.gallery');

const makeGalleryItemsMarkUp = ({ original, preview, description }) => {
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
};

const makeGalleryMarkUp = galleryItems.map(makeGalleryItemsMarkUp).join('');

galleryRef.insertAdjacentHTML('beforeend', makeGalleryMarkUp);
galleryRef.addEventListener('click', onPreviewClick);

function onPreviewClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();

  openModal(event.target.dataset.source);
};

let instance;

function openModal(src) {
  instance = basicLightbox.create(
    `<div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>`,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    },
  );
  instance.show();
};

function addListener() {
  window.addEventListener('keydown', onEscBtnPress);
};

function onEscBtnPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
};

function removeListener() {
  window.removeEventListener('keydown', onEscBtnPress);
};