let menuItems = document.querySelectorAll('.menu-item');
let activeItem;
const data = [
    {title: "Innovation document processing system", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia."},
    {title: "second", text: "second"},
    {title: "third", text: "third"},
    {title: "does not matter", text: "does not matter"},
    {title: "does not matter", text: "does not matter"},
    {title: "does not matter", text: "does not matter"},
    {title: "Что же выбрать? Хмм..", text: "Просто попробуй"},
];

// let data = {
//     title: [
//         "Innovation document processing system",
//         "second",
//         "third",
//         "does not matter",
//         "does not matter",
//         "does not matter",
//          "Что же выбрать? Хмм.."
//     ],
//     text: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.",
//         "second",
//         "third",
//         "does not matter",
//         "does not matter",
//         "does not matter",
//         "Просто попробуй"
//     ]
// }

const title = document.querySelector('.menu-map__title');
const text = document.querySelector('.menu-map__text');

// menuItems[0].classList.add('active');
title.textContent = data[6].title;
text.textContent = data[6].text;

menuItems.forEach((item)=> {
    item.addEventListener('click', (event) => {
        
        // if (activeItem !== 0) {
            
            
            // menuItems[activeItem -1].classList.remove('active');
        // }
            
        
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
        
        
        event.target.classList.add('active');
        activeItem = +event.target.getAttribute('data-item-id') - 1;
        // console.log('new i',activeItem);

        title.textContent = data[activeItem].title;
        text.textContent = data[activeItem].text;
    })
});

const footerLogo = document.querySelector('.footer__logo');
footerLogo.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});



// function createCard(data) {
    
// }

// title.textContent = data[0].title;
// text.textContent = data[0].text;
