let images = ["family.jpg","family2.jpeg","family3.jpeg","family5.jpeg","family6.jpeg"];

let imgTag = document.getElementsByTagName("img")[0];
let counter=0;


setInterval(slideToNext,2000);
function slideToNext(){
    counter++;
    if(counter === images.length){
        counter=0;
    }
    if(counter < images.length){
        let nextSlide = images[counter];
        imgTag.src = nextSlide;
    }
}
