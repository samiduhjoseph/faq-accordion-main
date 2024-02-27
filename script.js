"use strict";

let accordionHead = document.querySelectorAll(".accordion__head");
// let accordionBody = document.querySelectorAll(".accordion__body");
let icon = document.querySelectorAll(".accordion--iconplus");

// accordionHead[0].addEventListener("click", () => {
//   accordionBody[0].classList.toggle("accordion--hidden");
// });
// for (let i = 0; i < accordionHead.length; i++) {
//   accordionHead[i].addEventListener("click", () => {
//     for (let i = 0; i < accordionBody.length; i++) {
//       accordionBody[i].classList.toggle("accordion--hidden");
//     }
//   });
// }
accordionHead.forEach((head) => {
  head.addEventListener("click", () => {
    head.classList.toggle("active");

    let accordionBody = head.nextElementSibling;
    let image = head.firstElementChild;
    // console.log(image);

    if (head.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      image.src = "./assets/images/icon-minus.svg";
    } else {
      accordionBody.style.maxHeight = 0;
      image.src = "./assets/images/icon-plus.svg";
    }
  });
});
