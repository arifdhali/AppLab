"use strict";
// Preloader
let preLoader = document.getElementsByClassName("pre-loader")[0];
window.addEventListener("load", () => {
  preLoader.style.display = "none";
});

// SCROLL NAVBAR
window.addEventListener("scroll", () => {
  let stickyNav = document.getElementById("navSticky");
  if (window.pageYOffset >= 875) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }
});

// Package change
let monthlyBtn = document.getElementById("monthly-btn");
let annuallyBtn = document.getElementById("annually-btn");
// Package
let monthlyPackage = document.getElementsByClassName("monthly")[0];
let annuallyPackage = document.getElementsByClassName("annually")[0];

annuallyBtn.addEventListener("click", () => {
  monthlyBtn.classList.remove("signUp");
  annuallyBtn.classList.add("signUp");

  monthlyPackage.style.display = "none";
  annuallyPackage.classList.add("active");
});
monthlyBtn.addEventListener("click", () => {
  annuallyBtn.classList.remove("signUp");
  monthlyBtn.classList.add("signUp");
  annuallyPackage.classList.remove("active");
  monthlyPackage.style.display = "flex";
});

// Questions

let faqHeader = document.getElementsByClassName("faq-header");
let faqDescription = document.getElementsByClassName("faq-description");
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");

for (let i = 0; i < faqHeader.length; i++) {
  faqHeader[i].addEventListener("click", () => {
    let store = faqHeader[i].classList.toggle("show");
    if (store) {
      faqDescription[i].classList.add("show");
      faqDescription[i].classList.add("faqAni");

      plus[i].style.display = "none";
      minus[i].style.display = "block";

      setTimeout(() => {
        faqDescription[i].classList.remove("show");
      }, 50000);
    } else {
      faqDescription[i].classList.remove("show");
      faqDescription[i].classList.remove("faqAni");
      plus[i].style.display = "block";
      minus[i].style.display = "none";
    }
  });
}

// client feedback
let count = 0;
function slide(x) {
  count += x;
  clientChange(count);
}

function clientChange(num) {
  let store = document.getElementsByClassName("client-list");

  for (let i of store) {
    i.style.display = "none";
  }
  if (store.length == num) {
    count = 0;
    num = count;
  } else if (num < 0) {
    count = store.length - 1;
    num = count;
  }
  store[num].style.display = "block";
  store[num].classList.add("ani");
}
clientChange(count);

