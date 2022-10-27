import { galleryItems } from "./gallery-items.js";
import { addGalleryItems } from './addGallery-items';

const refs = {
  imageContainer: document.querySelector(".gallery"),
  body: document.body,
};



const NewGalleryItems = [...galleryItems,...addGalleryItems];
// let countOfGAllrey = 20;

// const  createAddGallery = (countOfImages) => {
//   for (let i = 1; i <= countOfImages; i += 1) {
//     let preview = `https://picsum.photos/id/${2 * i + 3}/340/`;
//     let original = `https://picsum.photos/id/${2 * i + 3}/1280/`;
//     let description= `random  ${
//          2*i +3
//       }`
//     additionalGalleryItems.push({ preview, original, description });
//   }
//   return additionalGalleryItems;
// }

// createAddGallery(countOfGAllrey)

const makegalleryItemsMarcup = (items, createAddGallery) => {
  return items
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

const cardgalleryMarkupCurrent = makegalleryItemsMarcup(additionalGalleryItems);

refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkupCurrent);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

