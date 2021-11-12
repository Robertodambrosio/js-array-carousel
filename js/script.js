const items = [
    'img/01.jpg',  
    'img/02.jpg', 
    'img/03.jpg', 
    'img/04.jpg', 
    'img/05.jpg'  
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let itemsContent = '';
let thumbContent = '';

for (let i = 0; i < items.length; i++) {
    itemsContent += `<div class="item"> 
                    <img src="${items[i]}" alt="${title[i]}">
                    <div class="testo">
                    <h2>${title[i]}</h2><p>${text[i]}</p>
                    </div>
                </div>`;
    thumbContent += `<div class="thumb"> 
                    <img src="${items[i]}" alt="img1">
                </div>`;
}

const itemsContainer = document.querySelector(".items-container");
itemsContainer.innerHTML = itemsContent;

const thumbContainer = document.querySelector(".thumbnails-container");
thumbContainer.innerHTML = thumbContent;

let activeItem = 0;

const itemsImg = document.getElementsByClassName('item');
itemsImg[activeItem].classList.add('active');

const thumbImg = document.getElementsByClassName('thumb');
thumbImg[activeItem].classList.add('active');


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    if(activeItem < items.length - 1) {
        itemsImg[activeItem].classList.remove('active');
        thumbImg[activeItem].classList.remove('active');

        activeItem++;

        itemsImg[activeItem].classList.add('active');
        thumbImg[activeItem].classList.add('active');
    }

 })

 prev.addEventListener('click', function(){

 if (activeItem > 0) {
        itemsImg[activeItem].classList.remove('active');
        thumbImg[activeItem].classList.remove('active');

        activeItem--;

        itemsImg[activeItem].classList.add('active');
        thumbImg[activeItem].classList.add('active');
 }

})