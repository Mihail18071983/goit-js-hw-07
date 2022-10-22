import { galleryItems } from "./gallery-items.js";

const refs = {
  imageContainer: document.querySelector(".gallery"),
  body: document.body,
};

const cardgalleryMarkup = makegalleryItems(galleryItems);

refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);

function makegalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
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
    })
    .join("");
}

const createModalWindow = (imageAdress) => {
  window.instance = basicLightbox.create(`
    <img src="${imageAdress}">
`);
  return instance;
};

refs.imageContainer.addEventListener("click", onClickOpenModal);

function onClickOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImageRef = event.target.dataset.source;
  createModalWindow(originalImageRef).show();
}

function closeModalWindowByEscPressing(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE && instance.visible()) {
    instance.close();
  }
}

refs.body.addEventListener("keydown", closeModalWindowByEscPressing);
