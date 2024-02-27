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
// accordionHead.forEach((head) => {
//   head.addEventListener("click", () => {
//     head.classList.toggle("active");

//     let accordionBody = head.nextElementSibling;
//     let image = head.firstElementChild;
//     // console.log(image);
//     // if (head.classList.contains("active")) {
//     //   head.classList.remove("active");
//     // }

//     if (head.classList.contains("active")) {
//       accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
//       image.src = "./assets/images/icon-minus.svg";
//     } else {
//       accordionBody.style.maxHeight = 0;
//       image.src = "./assets/images/icon-plus.svg";
//     }
//   });
// });

// accordionHead.forEach((head) => {
//   head.addEventListener("click", () => {
//     let accordionBody = head.nextElementSibling;
//     accordionBody.classList.toggle("active");

//     let image = head.firstElementChild;
//     // console.log(image);
//     // if (head.classList.contains("active")) {
//     //   head.classList.remove("active");
//     // }

//     if (accordionBody.classList.contains("active")) {
//       // accordionBody.style.maxHeight = "fit-content";
//       accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
//       image.src = "./assets/images/icon-minus.svg";
//     } else {
//       accordionBody.style.maxHeight = 0;
//       image.src = "./assets/images/icon-plus.svg";
//     }
//   });
// });

const accordionSection = document.querySelector(".accordion");
const accordions = accordionSection?.querySelectorAll(".accordion--box");

accordions?.forEach((accordion) => {
  const accordionHead = accordion.querySelector(".accordion__head");
  const handleClick = (element) => {
    console.log(element);
    accordions.forEach((_accordion) => {
      const accordionContent = _accordion.querySelector(".accordion__content");
      accordionContent?.classList.remove("active");
    });
    const parentContent = element.parentElement?.querySelector(
      ".accordion__content"
    );
    if (parentContent) parentContent.classList.toggle("active");
  };
  accordionHead?.addEventListener("click", () => handleClick(accordionHead));
});
