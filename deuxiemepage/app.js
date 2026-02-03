function afficherMessage() {
  alert("Bravo ! Le JavaScript fonctionne.");
}
const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");
});