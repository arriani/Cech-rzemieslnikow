// TOGGLE MENU

var navLinks = document.getElementById("navLinks");

    function showMenu (){
      navLinks.style.right = "0";
    }
    function hideMenu (){
      navLinks.style.right = "-200";
    }

// GALERIA

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg(){
  fullImgBox.style.display = "none";
}

