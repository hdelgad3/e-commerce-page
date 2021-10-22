const menuBtn = document.querySelectorAll('.toggleMenu');
const cartBtn = document.getElementById('cart-btn');
const collection = document.querySelector('.collections');

menuBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(collection.clientWidth === 0) {
            console.log('a')
            collection.style.width = "50%";
        }
        else {
            collection.style.width = "0";
        }
    });
})
