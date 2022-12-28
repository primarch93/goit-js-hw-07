import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMarkap = createGaleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkap);

galleryBox.addEventListener('click', onImageOfGalleryClick);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(
      image => `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}" 
      alt="${image.description}"
    />
  </a>
</div>
`
    )
    .join('');
}

function onImageOfGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const originalImage = evt.target.dataset.source;
  const options = {
    onShow: () => {
      window.addEventListener('keydown', onKeyEscpPress);
    },
    onClose: () => {
      window.removeEventListener('keydown', onKeyEscpPress);
    },
  };

  const instance = basicLightbox.create(`<img src="${originalImage}"/>`, options);
  instance.show();

  function onKeyEscpPress(evt) {
    if (evt.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}