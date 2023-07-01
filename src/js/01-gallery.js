import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionDelay: 250,
});

import { galleryItems } from './gallery-items.js';
const list = document.querySelector('.gallery');
let instance;
list.insertAdjacentHTML('beforeend', itemContauner());
function itemContauner() {
  return galleryItems
  .map(({original,preview, description}) => {
     return `<li class="gallery__item">
     <a class="gallery__link" href=${original}>
     <img class="gallery__image"
     src=${preview}
     data-source="${original}"
     alt="${description}"></img> </a> </li>`
  })
    .join('');}
list.addEventListener('click', onClick);
function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const imageURL = e.target.dataset.source;
  instance = basicLightbox.create(`<img src="${imageURL}" width="800" height="600">`,
  {
    onShow:() =>
    document.removeEventListener('keydown', closeModal),
    onClose:() =>
    document.addEventListener('keydown', closeModal),
})
instance.show();
}
function closeModal(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', closeModal);
  }
}
  list.addEventListener('click', onClick);
console.log(galleryItems);
