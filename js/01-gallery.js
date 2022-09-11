import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(galleryAllEl).join('');


galleryEl.addEventListener('click', onGalleryChoiceItem);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function galleryAllEl({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a> 
  </div>`;
};


function onGalleryChoiceItem(event) {
   event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

 const instance = basicLightbox.create(`
  <div class="modal">
    <img
    class="modal__image"
    src="${event.target.dataset.source}"
    />
  </div>
  `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscPress);
        instance.element().querySelector('img').onclick = instance.close;
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );

  function onEscPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
// const script = document.createElement('script');
// script.src = 'https://cdn.jsdelivr.net/npm/basiclightbo