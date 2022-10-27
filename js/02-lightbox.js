import { galleryItems } from "./gallery-items.js";
import { addGalleryItems } from './addGallery-items.js';

const newGalleryItems = [...galleryItems, ...addGalleryItems];


const refs = {
  imageContainer: document.querySelector(".gallery"),
  body: document.body,
};

const cardgalleryMarkup = makegalleryItems(newGalleryItems);

refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);

function makegalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

