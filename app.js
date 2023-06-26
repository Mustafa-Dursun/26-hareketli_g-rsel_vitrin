const imgContainer = document.getElementById('images');
const images = document.querySelectorAll('#images img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let interval = setInterval(play, 2000);
let idx = 0;

function play(){
    idx++;
    changeImage();
}

function changeImage(){
    if(idx > (images.length -1)){
        idx = 0;
    }else if(idx<0){
        idx = images.length -1;
    }

    imgContainer.style.transform = `translateX(-${idx*600}px)`;
}

next.addEventListener('click', ()=>{
    idx++;
    changeImage();
    resetIntervel();
})

prev.addEventListener('click', ()=>{
    idx--;
    changeImage();
    resetIntervel();
})

function resetIntervel(){
    clearInterval(interval);
    interval = setInterval(play,2000);
}