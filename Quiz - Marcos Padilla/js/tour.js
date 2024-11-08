const panoramaContainer = document.getElementById("panorama-container");

const panorama = new PANOLENS.ImagePanorama("/img/panorama.png");
const viewer = new PANOLENS.Viewer({
  container: panoramaContainer,
});

const infospot1 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot1.position.set(5000, 0, 0);
infospot1.addHoverText("¡Bienvenidos al Tour de ciudad!");
infospot1.addEventListener("click", function () {
  viewer.tweenControlCenter(infospot2.position);
});
panorama.add(infospot1);

const infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Arrow);
infospot2.position.set(-3000, 200, -4000);
infospot2.addEventListener("click", function () {
  Swal.fire({
    title: "¡Puente elevado!",
    text: "Este puente fue inaugurado en el año 2000 y es muy transitado por turistas.",
    icon: "info",
    confirmButtonText: "Aceptar",
  });
});
panorama.add(infospot2);

const infospot3 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot3.position.set(-5000, 0, 0);
infospot3.addHoverText("Comercio y ocio para turistas y locales.");
infospot3.addEventListener("click", function () {
  viewer.tweenControlCenter(infospot4.position);
});
panorama.add(infospot3);

const infospot4 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot4.position.set(0, 0, 5000);
infospot4.addHoverText("Parque para niños.");
infospot4.addEventListener("click", function () {
  viewer.tweenControlCenter(infospot5.position);
});
panorama.add(infospot4);

const infospot5 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot5.position.set(200, 400, 4000);
infospot5.addEventListener("click", function () {
  window.location.href = "https://moodle.ucenfotec.ac.cr/";
});
panorama.add(infospot5);

const infospot6 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot6.position.set(1000, 0, 4000);
infospot6.addHoverText("Edificio famoso, ideal para fotos.");
infospot6.addEventListener("click", function () {
  viewer.tweenControlCenter(infospot7.position);
});
panorama.add(infospot6);

const infospot7 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot7.position.set(4000, 100, 4000);
infospot7.addHoverText("Zona local, aptos y negocios.");
infospot7.addEventListener("click", function () {
  viewer.tweenControlCenter(infospot8.position);
});
panorama.add(infospot7);

const infospot8 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Arrow);
infospot8.position.set(2000, 100, 700);
infospot8.addHoverText("Autos más populares.");
infospot8.addEventListener("click", function () {
  const imageModal = document.createElement("div");
  imageModal.style.position = "fixed";
  imageModal.style.top = "0";
  imageModal.style.left = "0";
  imageModal.style.width = "100%";
  imageModal.style.height = "100%";
  imageModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  imageModal.style.display = "flex";
  imageModal.style.alignItems = "center";
  imageModal.style.justifyContent = "center";
  imageModal.style.zIndex = "1000";

  const img = document.createElement("img");
  img.src = "/img/car.jpg";
  img.style.maxWidth = "80%";
  img.style.maxHeight = "80%";

  const closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.padding = "10px";
  closeButton.style.backgroundColor = "red";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", function () {
    imageModal.remove();
  });

  imageModal.appendChild(img);
  imageModal.appendChild(closeButton);

  document.body.appendChild(imageModal);
});
panorama.add(infospot8);

viewer.add(panorama);
