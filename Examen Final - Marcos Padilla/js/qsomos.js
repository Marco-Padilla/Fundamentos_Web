let micarrusel = {};
let foto = 0;
let total = 0;

micarrusel = [
  { imageurl: "/img/ex1.webp"},
  { imageurl: "/img/ex2.webp"},
  { imageurl: "/img/ex3.webp"},
  { imageurl: "/img/ex4.webp"},
  { imageurl: "/img/ex5.webp"},
];

let cambiar = function (mas) {
  total = micarrusel.lenght;
  foto = foto + mas;

  if (foto > total) {
    foto = 1;
  }
  if (foto < 1) {
    foto = total;
  }
  document.thumb.src = micarrusel[foto - 1].imageurl;
};
