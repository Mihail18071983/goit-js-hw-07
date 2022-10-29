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
    <img loading="lazy" width="354" height="240"
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
  refs.body.classList.add("disable-scroll");
}

function closeModalWindowByEscPressing(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE && instance.visible()) {
    instance.close();
    refs.body.classList.remove("disable-scroll");
  }
}

refs.body.addEventListener("keydown", closeModalWindowByEscPressing);

const lazyImages = refs.imageContainer.querySelectorAll(".gallery__image");

lazyImages.forEach((image) =>
  image.addEventListener("load", onImageLoaded, { once: true })
);

function onImageLoaded(event) {
  event.target.classList.add("appear");
}

lazyImages.forEach((image) =>
  image.addEventListener("mouseenter", onMouseEnter)
);

lazyImages.forEach((image) =>
  image.addEventListener("mouseleave", onMouseLeave)
);

function onMouseEnter(event) {
  // event.target.classList.add("hover");
  console.log(event.target);
  console.log(event.target.style);
  event.target.style.transform = "scale(1.03)";
  event.target.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
  event.target.style.transitionDelay = '250ms';

}

function onMouseLeave(event) {
  event.target.style.transform = "scale(1)"
}
