const darkModeToggle = document.getElementById("darkModeToggle")
const body = document.body

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode")
})
var modal = document.getElementById("myModal")

var img = document.getElementById("myImg")
var modalImg = document.getElementById("img01")
img.onclick = function () {
  modal.style.display = "block"
  modalImg.src = this.src
}

var span = document.getElementsByClassName("close")[0]

span.onclick = function () {
  modal.style.display = "none"
}
