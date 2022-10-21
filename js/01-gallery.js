import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs =  {
    imageContainer: document.querySelector('.gallery'),
}

console.log(refs.imageContainer);

const cardgalleryMarkup = makegalleryItems(galleryItems);
refs.imageContainer.insertAdjacentHTML('beforeend', cardgalleryMarkup)
 
function makegalleryItems(items)
{
   return items.map(({ preview, description, original }) => {
   return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');} 





/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */