const images = document.querySelectorAll('.creation-img img');
const text = document.querySelectorAll('.creation-img h2');

images.forEach(image=>{
    image.addEventListener('mouseenter', ()=>{
        image.style.opacity = '0.7';
    });
    text.forEach(tex=>{
        tex.parentElement.addEventListener('mouseenter', ()=>{
            tex.style.color = 'hsl(0, 0%, 41%)';
        });
    });
});
images.forEach(image=>{
    image.addEventListener('mouseout', ()=>{
        image.style.opacity = '';
    });
    text.forEach(tex=>{
        tex.parentElement.addEventListener('mouseleave', ()=>{
            tex.style.color = '';
        });
    });
});


// toggle
const burgerOpen = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');

burgerOpen.addEventListener('click', ()=>{
    gsap.to('.nav-bar', {clipPath: 'inset(0 0 0 0)'});
    document.body.classList.add('hide');
});
burgerClose.addEventListener('click', ()=>{
    gsap.to('.nav-bar', {clipPath: 'inset(0 0 100% 100%)'});
    document.body.classList.remove('hide');
});