// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galeriaFotos = document.querySelector('.gallery');

const fotos = galleryItems
    .map(({ preview, original, description}) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`)
    .join('');

galeriaFotos.insertAdjacentHTML('afterbegin', fotos);


let galeria = new SimpleLightbox('.gallery a', {
    dato: 'alt',
    posicion: 'bottom',
    retraso: 250,
});

