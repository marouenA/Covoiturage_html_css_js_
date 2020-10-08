var copmteurImage=1;
var totalImage=5;
function slider(x) {

    var image=document.getElementById('img');
    copmteurImage=copmteurImage+x;
    image.src="slide"+copmteurImage+".jpg";
    if (copmteurImage>totalImage){
        copmteurImage=1;
    }
    if(copmteurImage<1){
        copmteurImage=totalImage;
    }
}
function sliderAuto() {
    
    var image=document.getElementById('img');
    copmteurImage=copmteurImage+1;
    image.src="slide"+copmteurImage+".jpg";
    if (copmteurImage>totalImage){
        copmteurImage=1;
    }
    if(copmteurImage<1){
        copmteurImage=totalImage;
    }
}
window.setInterval(sliderAuto,3000);