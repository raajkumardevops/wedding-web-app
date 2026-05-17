/* ================================================= */
/* ================= SCROLL REVEAL ================= */
/* ================================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      section.classList.add("show");

    }

  });

});

/* ================================================= */
/* ================= GALLERY ======================= */
/* ================================================= */

const track = document.querySelector(".gallery-track");

const leftBtn = document.querySelector(".left-btn");

const rightBtn = document.querySelector(".right-btn");

/* BUTTON SCROLL */

rightBtn.addEventListener("click", () => {

  track.scrollBy({
    left: 380,
    behavior: "smooth"
  });

});

leftBtn.addEventListener("click", () => {

  track.scrollBy({
    left: -380,
    behavior: "smooth"
  });

});

/* ================================================= */
/* ============ MANUAL DRAG SCROLL ================= */
/* ================================================= */

let isDragging = false;

let startX;

let scrollLeft;

/* MOUSE DOWN */

track.addEventListener("mousedown", (e) => {

  isDragging = true;

  track.classList.add("dragging");

  startX = e.pageX - track.offsetLeft;

  scrollLeft = track.scrollLeft;

});

/* MOUSE LEAVE */

track.addEventListener("mouseleave", () => {

  isDragging = false;

  track.classList.remove("dragging");

});

/* MOUSE UP */

track.addEventListener("mouseup", () => {

  isDragging = false;

  track.classList.remove("dragging");

});

/* MOUSE MOVE */

track.addEventListener("mousemove", (e) => {

  if (!isDragging) return;

  e.preventDefault();

  const x = e.pageX - track.offsetLeft;

  const walk = (x - startX) * 1.5;

  track.scrollLeft = scrollLeft - walk;

});

/* ================================================= */
/* ================= POPUP ========================= */
/* ================================================= */

const cards =
document.querySelectorAll(".gallery-card img");

const popup =
document.querySelector(".gallery-popup");

const popupImage =
document.querySelector(".popup-image");

const closePopup =
document.querySelector(".close-popup");

/* OPEN */

cards.forEach((card) => {

  card.addEventListener("click", () => {

    popup.classList.add("active");

    popupImage.src = card.src;

  });

});

/* CLOSE BUTTON */

closePopup.addEventListener("click", () => {

  popup.classList.remove("active");

});

/* CLICK OUTSIDE */

popup.addEventListener("click", (e) => {

  if(e.target === popup){

    popup.classList.remove("active");
  }

});