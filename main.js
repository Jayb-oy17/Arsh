/** @format */

"use strict";

// NAV //

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navToggle");
navBtn.addEventListener("click", function () {
  nav.classList.toggle("stick");
});

// NAV STICK REMOVER //
const navs = document.querySelectorAll(".navs");

navs.forEach((button) => {
  button.addEventListener("click", function () {
    nav.classList.remove("stick");
  });
});

// STICKY NAV //
const headerSection = document.querySelector(".hero");

const navObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

navObserver.observe(headerSection);

// MODAL //

const modal = document.querySelector(".login-modal");
const modalBtn = document.querySelector(".btn");
const modalCloser = document.querySelector(".close-btn");
const togo = document.querySelector(".logged");
const email = document.querySelector(".email");
const pass = document.querySelector(".password");
const passTwo = document.querySelector(".password-two");

modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

const closeModal = () => {
  modal.style.display = "none";
};

modalCloser.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

togo.addEventListener("click", function () {
  if (!email.value || !pass.value || !passTwo.value) {
    alert("please fill the input fields");
    return;
  }
  if (pass.value !== passTwo.value) {
    alert("password does not match");
    return;
  } else {
    alert("account created succesfully");
  }
  email.value = " ";
  pass.value = " ";
  passTwo.value = " ";
  closeModal();
});
