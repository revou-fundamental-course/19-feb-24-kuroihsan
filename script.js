function replaceName() {
    let name = prompt("Hai, siapakah nama anda?", "");
document.getElementById("name").innerHTML = name;
}

replaceName();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
   showDivs(slideIndex += n); 
}

function showDivs(n) {
    var i;
    var vdoList = document.getElementsByClassName("vdo-slideshow");
    if (n > vdoList.length) slideIndex = 1;
    else if (n < 1) slideIndex = vdoList.length;

    for(i =0; i < vdoList.length; i++) {
        vdoList[i].style.display ="none";
    }

}