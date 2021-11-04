const menuBtn = document.querySelectorAll('.toggleMenu');
const cartBtn = document.getElementById('cart-btn');
const collection = document.querySelector('.collections');
const slides = document.querySelectorAll('.slides');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const dots = document.querySelectorAll('.dot');
const decBtn = document.querySelector('.decrementBtn');
const incBtn = document.querySelector('.incrementBtn');
const quantityOut = document.querySelector('#qOutput');
const chOutBtn = document.querySelector('.checkoutBtn');

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



let slidesIndex = 0;
const refresh = (ind) => {
    for (let i = 0; i < slides.length; i++) {
        if (i !== ind) {
            slides[i].style.display = "none";
        }
    }
}
slides[slidesIndex].style.display = "block";
prevBtn.addEventListener('click', ()=> {
    slides[slidesIndex].style.display = "none";
    slidesIndex -= 1;
    if (slidesIndex < 0) {
        slidesIndex = 3;
    }
    refresh(slidesIndex);
    slides[slidesIndex].style.display = "block";
    
});
nextBtn.addEventListener('click', ()=> {
    console.log(slidesIndex)
    slides[slidesIndex].style.display = "none";
    slidesIndex += 1;
    if (slidesIndex > 3) {
        slidesIndex = 0;
    }
    refresh(slidesIndex);
    slides[slidesIndex].style.display = "block";
});

dots.forEach(item => {
    item.addEventListener("click", ()=> {
        let ind = Number(item.attributes.indexB.value);
        if (slides[ind].style.display != "block") {
            slides[slidesIndex].style.display = "none";
            slides[ind].style.display = "block";
        }
        refresh(ind);
    });
})

incBtn.addEventListener('click', ()=> {
    console.log('di')
})
decBtn.addEventListener('click', ()=> {
    console.log('L nerd')
});

chOutBtn.addEventListener('click', ()=> {
    console.log('check out check out')
})

cartBtn.addEventListener('click', ()=> {
    console.log('cart cart')
})