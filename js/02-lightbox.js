import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(galleryAllEl).join('');


galleryEl.addEventListener('click', onGalleryChoiceItem);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function galleryAllEl({ preview, original, description }) {
    return `<a class="gallery__item" 
  href="${original}">
    <img class="gallery__image" 
        src="${preview}"
        alt="${description}" />
</a>`;
};


function onGalleryChoiceItem(event) {
   event.preventDefault();

}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// const script = document.createElement('script');
// script.src = 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'