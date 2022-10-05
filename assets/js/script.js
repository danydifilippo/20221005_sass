function color () {
    let colRandom = document.querySelector('body');
    colRandom.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

function image() {
    let imgRandom = document.querySelector('.image');
    imgRandom.innerHTML = `<img src="https://picsum.photos/400/500/?random&t=$%7Bnew${new Date().getTime()} alt="random image">`
}