//navbar
let body = document.getElementsByTagName('body')[0];

let btnOpen = document.getElementById('open-btn');
let btnClose = document.getElementById('close-btn');

let opacity = document.getElementById('opacity-box');
let menu = document.getElementById('menu');

btnOpen.onclick = () => {
    btnOpen.classList.remove('on');
    btnOpen.classList.add('off');

    btnClose.classList.remove('off')
    btnClose.classList.add('on')

    opacity.classList.toggle('on')
    menu.classList.toggle('on')

    body.classList.toggle('off')

    setTimeout(() => {
        menu.classList.toggle('anim')
    }, 50)
    
}

btnClose.onclick = () => {
    btnClose.classList.remove('on');
    btnClose.classList.add('off');

    btnOpen.classList.remove('off')
    btnOpen.classList.add('on')

    opacity.classList.toggle('on')
    menu.classList.toggle('on')

    body.classList.toggle('off')

    setTimeout(() => {
        menu.classList.toggle('anim')
    }, 50)
}