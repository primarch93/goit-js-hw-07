import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMarkap = createGaleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkap);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(
      image => `
    <a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" 
 />
    </a>
`
    )
    .join('');
}

const simpleLightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

let gallerySet = new SimpleLightbox('.gallery .gallery__item', simpleLightboxOptions);
