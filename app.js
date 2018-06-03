const btn = document.querySelector(".menu__btn");
const menu = document.querySelector(".nav__menu");
const loadMore = document.querySelector(".btn");
const gallery = document.querySelector(".gallery");
const numberGalleryItem = [
  "first",
  "second",
  "third",
  "forth",
  "fifth",
  "sixth"
];

function randomGalleryItem() {
  const randomNumber = Math.floor(Math.random() * 6);
  return randomNumber;
}

function openMenu() {
  menu.classList.toggle("open");
}
function morePics(e) {
  e.preventDefault();
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  galleryItem.className += ` ${numberGalleryItem[randomGalleryItem()]}`;
  galleryItem.innerHTML = `
        <div class="gallery__item-text">
                <span>
                        <h3 class="gallery__item-title">Lorem ipsum</h3>
                        <p class="gallery__item-desc">lorem lorem lorem</p>
                </span>
        </div>
  `;
  gallery.appendChild(galleryItem);
}

btn.addEventListener("click", openMenu);
loadMore.addEventListener("click", morePics);
var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("bullets__point");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
