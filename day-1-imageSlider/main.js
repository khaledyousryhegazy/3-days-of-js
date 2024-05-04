const container = document.querySelector(".images img");
const next = document.querySelector(".right");
const prev = document.querySelector(".left");

const imgArr = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
];

let index = 0;

next.addEventListener("click", () => {
  index++;

  if (index >= imgArr.length) {
    index = 0;
  }

  container.src = imgArr[index];
});

prev.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = imgArr.length - 1;
  }

  container.src = imgArr[index];
});

// ======= another way to do it ======= //

// const container = document.querySelector(".images img");
// const next = document.querySelector(".right");
// const prev = document.querySelector(".left");

// const imgArr = [
//   "./images/1.jpg",
//   "./images/2.jpg",
//   "./images/3.jpg",
//   "./images/4.jpg",
//   "./images/5.jpg",
// ];

// let index = 0;

// const showImage = () => {
//   container.src = imgArr[index];
// };

// next.addEventListener("click", () => {
//   index = (index + 1) % imgArr.length;
//   showImage();
// });

// prev.addEventListener("click", () => {
//   index = (index - 1 + imgArr.length) % imgArr.length;
//   showImage();
// });
