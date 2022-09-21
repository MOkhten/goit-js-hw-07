import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

function makeGallery(items) {
    return items
        .map((item) => 
        `<a class="gallery__item" href='${item.original}'>
         <img class="gallery__image"
          src='${item.preview}' data-source='${item.original}' alt='${item.description}'/>
        </a>`)
        .join('');
    console.log(makeGallery);
}

const createGallery = makeGallery(galleryItems);

galleryEl.innerHTML = createGallery;

galleryEl.addEventListener('click', onClickFunction);

 const lightbox = new SimpleLightbox('.gallery a', { 
        captionData: 'alt',
        captionDelay: '250',
    });
function onClickFunction(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    SimpleLightbox();

    };


