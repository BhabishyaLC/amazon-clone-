const img=document.querySelectorAll('.main-body ul img');
const next_btn=document.querySelector('.scroll-next');
const prev_btn=document.querySelector('.scroll-prev');

let x=0;
function changeSlide(){
    for(let i=0; i<img.length;i++){
        img[i].style.display='none';
    }
    img[x].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click',()=>{
    if(x>0){
    x--;
    }
    else{
    x=img.length-1;
    }
    changeSlide();
})
next_btn.addEventListener('click',()=>{
    if(x<img.length-1){
    x++;
    }
    else{
    x=0;
    }
    changeSlide();
})

const scrollContainer=document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(ev)=>{
        ev.preventDefault();
        item.scrollLeft+=ev.deltaY;
    });
}