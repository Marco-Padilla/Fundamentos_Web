function ejecutar(div, video_id) {
  var videoElement = document.getElementById(video_id);

  if (!videoElement) {
    console.error("Elemento con ID '" + video_id + "' no encontrado.");
    return;
  }

  var video = videoElement.src;
  videoElement.src = video + "&autoplay=1";
  document.getElementById(div).style.display = "block";
}

function ocultar(div, video_id) {
  var videoElement = document.getElementById(video_id);

  if (!videoElement) {
    console.error("Elemento con ID '" + video_id + "' no encontrado.");
    return;
  }

  var video = videoElement.src;
  var cleaned = video.replace("&autoplay=1", "");
  videoElement.src = cleaned;
  document.getElementById(div).style.display = "none";
}
