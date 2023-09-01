document.addEventListener("DOMContentLoaded", function () {
  let highlightBtn = document.getElementById("highlightBtn");
  let  parrafo = document.getElementById("lorem");

  highlightBtn.addEventListener("click", function() {
    parrafo.classList.toggle("highlight");
  } )
});
