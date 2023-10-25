// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


document.getElementById('grayButton').addEventListener('click', function () {
  const body = document.body;
  const textoum = document.querySelectorAll('.textoum');
  const textodois = document.querySelectorAll('.textodois');
  const textotres = document.querySelectorAll('.textotres');
  const materias = document.querySelectorAll('.materia');
  const boxes = document.querySelectorAll('.box');
  const scrollbutton = document.querySelectorAll('.scroll-button');
  const paragraphs = document.querySelectorAll('p');
  const spans = document.querySelectorAll('span'); // Seleciona todos os elementos <span>
  const isGrayBackground = body.classList.contains('gray-background');
  const themeButton = document.getElementById('grayButton');
  const icon = themeButton.querySelector('i');
  
  // Toggle the gray background
  body.classList.toggle('gray-background');
  body.classList.toggle('gray-text');

  if (isGrayBackground) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  
  // Update the background image based on the gray background state
  const home = document.querySelector('.home');
  home.style.backgroundImage = isGrayBackground
  if (body.classList.contains('gray-background')) {
      home.style.backgroundImage = 'url("images/back1.png")';
  } else {
      home.style.backgroundImage = 'url("images/back2.png")';
  }


  const nav = document.querySelector('nav');
  nav.classList.toggle('white-background');


  scrollbutton.forEach(scrollbutton => {
    scrollbutton.style.color = body.classList.contains('gray-text') ? 'white' : '';
});
  textoum.forEach(textoum => {
    textoum.style.color = body.classList.contains('gray-text') ? 'white' : '';
});
textodois.forEach(textodois => {
  textodois.style.color = body.classList.contains('gray-text') ? 'white' : '';
});
textotres.forEach(textotres => {
  textotres.style.color = body.classList.contains('gray-text') ? 'white' : '';
});

  materias.forEach(materia => {
      materia.style.color = body.classList.contains('gray-text') ? 'black' : '';
  });

  boxes.forEach(box => {
      box.classList.toggle('white-box');
  });

  paragraphs.forEach(paragraph => {
      paragraph.style.color = body.classList.contains('gray-text') ? 'white' : '';
  });

  // Ajusta a cor do texto de todos os elementos <span>
  spans.forEach(span => {
      span.style.color = body.classList.contains('gray-text') ? 'white' : '';
  });
  
  
});


  
  





