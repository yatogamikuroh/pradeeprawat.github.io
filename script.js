//gallery item filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;
console.log(items);

for(let i=0; i<filterButtons.length; i++){
filterButtons[i].addEventListener("click",function(){
                   //  add active class to clicked button
                   for(let j=0; j<filterButtons.length; j++){
                       filterButtons[j].classList.remove("active") 
                    //    remove active class from all buttons
                   }
                   this.classList.add("active"); 
                   const target=this.getAttribute("data-target")
                   for(let k=0; k<items.length; k++){
                       items[k].style.display="none";
                       if (target==items[k].getAttribute("data-id"))
                       {
                           items[k].style.display="block";
                       }
                       if(target=="all"){
                           items[k].style.display="block";
                       }
                   }
                   
                   
                   
                   
                   
                //    add active class to clicked button, lets filter the gallery box itme
})
}

//lightbox
const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox"); 
const lightboxImage=lightbox.querySelector("img"); 
// for clicked outside image 
lightbox.addEventListener("click",function(){
    if(event.target!=lightboxImage){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})

closeLightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

// now when click to plus icon image will pop up

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src=element.querySelector("img").getAttribute("src")
   
    })
})

//   if you want to close lightbox clicking outside of image area then 

// testimonial slider 
const sliderContainer=document.querySelector(".testi-slider");
const slides=sliderContainer.children;
const containerWidth=sliderContainer.offsetWidth;
const margin=30;
let itemPerslide=0;
let slideDots;

// responsive
const responsive=[
     // if window width > 0 then 1 item show in slide
    {breakPoint:{width:0,item:1}},
    // if window width >991  then 2 item show in slide
    {breakPoint:{width:991,item:2}}
]

function load()
{
for(let i=0; i<responsive.length; i++){
  if (window.innerWidth>responsive[i].breakPoint.width){
      itemPerslide=responsive[i].breakPoint.item;
  }

}
        start();
}
function start(){
    // set width of containerWidth and slides 
    totalWidth=0;
    
    for(let i=0; i<slides.length; i++){
      slides[i].style.width=(containerWidth/itemPerslide)-margin + "px";
      slides[i].style.margin=margin/2 + "px";
      totalWidth+=containerWidth/itemPerslide;
    }
    // now set containerWidth 
    sliderContainer.style.width=containerWidth*itemPerslide + "px";
    // now set slide controls 
    slideDots=Math.ceil(slides.length/itemPerslide);
    // console.log(slideDots) 
    for(let i=0; i<slideDots; i++)
    {
        const div=document.createElement("div");
        div.id=i;
        div.setAttribute("onclick","controlSlide(this)")
        if(i==0){
            div.classList.add("active");
}
    document.querySelector(".slide-controls").appendChild(div);
}
}
let currentSlide=0;
let autoSlide=0;

function controlSlide(element){
    clearInterval(timer)
    timer=setInterval(autoPlay,5000);
    autoSlide=element.id;
   currentSlide=element.id;
    changeSlide(currentSlide)

}
function changeSlide(currentSlide){
    // first of all when chlicked to control button remove active class 
    controlButtons=document.querySelector(".slide-controls").children;
    // console.log(controlButtons) 
    for(let i=0; i<controlButtons.length; i++){

      controlButtons[i].classList.remove("active")
   }
   controlButtons[currentSlide].classList.add("active")
//    now animate slide to next slide 
  sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
 }
//  now auto play slide if you want to auto play slide and also control it  
function autoPlay(){
    if(autoSlide==slideDots-1){
        autoSlide=0;
}
else{
    autoSlide++;
} 
changeSlide(autoSlide)
  
}
// now when click to controlButtons clear timer 
let timer=setInterval(autoPlay,5000);

window.onload=load();

// header fixed 

window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    // if window width greater than 991px then header fixed else not fixed

  if(window.innerWidth>991){
    //   if docScrollTop position greater than 100 then header will be fixed
    if(docScrollTop>100){
        document.querySelector("header").classList.add("fixed")
    }
    else{
        document.querySelector("header").classList.remove("fixed")
    }

  }

} 
// lets reduce the window width less than 991 and see heading fixing or not

// add class active to navbar links when click 

// navbar links 
const navbar=document.querySelector(".navbar");
a=navbar.querySelectorAll("a");
 
a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0; i<a.length; i++){
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
})

// ham-burger

const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})