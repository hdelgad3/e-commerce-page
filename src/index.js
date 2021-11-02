const menuBtn = document.querySelectorAll('.toggleMenu');
const cartBtn = document.getElementById('cart-btn');
const collection = document.querySelector('.collections');
const slides = document.querySelectorAll('.slides');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

menuBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(collection.clientWidth === 0) {
            collection.style.width = "50%";
        }
        else {
            collection.style.width = "0";
        }
    });
});

let slidesIndex = 1;
prevBtn.addEventListener('click', ()=> {
    
});
nextBtn.addEventListener('click', ()=> {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slidesIndex > slides.length) {
        slidesIndex = 1;
    }
    slides[slidesIndex-1].style.display = "block";
});
