/*
Copyright amir javanmir
Released on: february 17, 2024
*/
let slider = document.querySelector(".baner .inner");
let sliderItems = slider.querySelectorAll(".item");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);

let i = 0;

function nextSlide(){
    sliderItems[i].classList.remove("active");
    i = (i+1) % sliderItems.length;
    sliderItems[i].classList.add("active");
}

function prevSlide(){
    sliderItems[i].classList.remove("active");
    if(i==0){
        i=sliderItems.length;
    }
    i = (i-1) % sliderItems.length;
    sliderItems[i].classList.add("active");
}