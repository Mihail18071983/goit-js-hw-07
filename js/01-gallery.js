import { galleryItems } from "./gallery-items.js";
// Change code below this line



const refs = {
  imageContainer: document.querySelector(".gallery"),
};


const cardgalleryMarkup = makegalleryItems(galleryItems);

refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);
console.log(refs.imageContainer)

function makegalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// import * as basicLightbox from 'basiclightbox'

function createModalWindow(imageAdress) {
  const instance = basicLightbox.create(`
    <img src="${imageAdress}">
`);
 instance.show();
}


refs.imageContainer.addEventListener("click", onClickOpenModal);


function onClickOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target.closest('.gallery__link'))
  const originalImageRef = event.target.closest('.gallery__link').href
  createModalWindow(originalImageRef);
}

