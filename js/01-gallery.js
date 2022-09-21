import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')

function makeGallery(items) {
    return items
        .map((item) => 
        `<div class="gallery__item">
            <a class="gallery__link" href='${item.original}'>
                <img class="gallery__image"
                    src='${item.preview}' data-source='${item.original}' alt='${item.description}' />
            </a></div>`)
        .join('');
    console.log(makeGallery);
}

const createGallery = makeGallery(galleryItems);

galleryEl.innerHTML = createGallery;
galleryEl.addEventListener('click', onClickFunction);


   
function onClickFunction(e) {
     e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src='${e.target.dataset.source}' width="800" height="600">
`);
 
      instance.show();


     galleryEl.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            instance.close();
       }
    });
}

