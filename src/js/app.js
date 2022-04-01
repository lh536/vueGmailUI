const compose = document.querySelector('#compose');

compose.addEventListener('mouseenter', () => {
    compose.parentElement.classList.toggle('hover:bg-[#414141]')
});

compose.addEventListener('mouseleave', () => {
    compose.parentElement.classList.toggle('hover:bg-[#414141]')
})

console.log('hello world');
