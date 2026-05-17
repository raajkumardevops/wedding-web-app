/* ================= SCROLL REVEAL ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      section.classList.add("show");

    }

  });

});

/* ================= GALLERY ================= */

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

/* AUTO INFINITE SCROLL */

let autoScroll = setInterval(() => {

  track.scrollBy({
    left: 1,
    behavior: "smooth"
  });

  if (
    track.scrollLeft + track.clientWidth >=
    track.scrollWidth - 5
  ) {

    track.scrollLeft = 0;

  }

}, 20);

/* STOP AUTO SCROLL ON HOVER */

track.addEventListener("mouseenter", () => {

  clearInterval(autoScroll);

});

track.addEventListener("mouseleave", () => {

  autoScroll = setInterval(() => {

    track.scrollBy({
      left: 1,
      behavior: "smooth"
    });

    if (
      track.scrollLeft + track.clientWidth >=
      track.scrollWidth - 5
    ) {

      track.scrollLeft = 0;

    }

  }, 20);

});

/* ================= POPUP ================= */

const cards = document.querySelectorAll(".gallery-card img");

const popup = document.querySelector(".gallery-popup");

const popupImage = document.querySelector(".popup-image");

const closePopup = document.querySelector(".close-popup");

/* OPEN POPUP */

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

  if (e.target === popup) {

    popup.classList.remove("active");

  }

});