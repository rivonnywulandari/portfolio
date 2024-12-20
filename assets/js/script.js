let indexslide = [1, 1, 1, 1, 1];
let idslide = [
  "slidesshow0", 
  "slidesshow1", 
  "slidesshow2", 
  "slidesshow3",
  "slidesshow4",
];

tampilkanslides(1, 0);
tampilkanslides(1, 1);
tampilkanslides(1, 2);
tampilkanslides(1, 3);
tampilkanslides(1, 4);

function geserslides(n, no) {
  tampilkanslides((indexslide[no] += n), no);
}

function slidessaatini(n, no) {
  tampilkanslides((indexslide[no] = n), no);
}

function tampilkanslides(n, no) {
  let i;
  let slides = document.getElementsByClassName(idslide[no]);
  let rectangles = document.getElementsByClassName("rectangle" + (no));
  if (n > slides.length) {
    indexslide[no] = 1;
  }
  if (n < 1) {
    indexslide[no] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < rectangles.length; i++) {
    rectangles[i].className = rectangles[i].className.replace(" active", "");
  }
  slides[indexslide[no] - 1].style.display = "block";
  rectangles[indexslide[no] - 1].className += " active";
}

function togglemenunavbar() {
  var navul = document.querySelector("nav ul");
  navul.classList.toggle("show");
}
