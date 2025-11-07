console.log("Loaded instructions...");

document.querySelector("#oejeknap").addEventListener("click", oejefunktion);

function oejefunktion() {
  console.log("Loaded instructions ØJE...");
  document.querySelector("#hotspotEye").classList.add("my_scale");
  document.querySelector("#efficiency").textContent = "peter siger fucking øje";
}

document.querySelector("#fodknap").addEventListener("click", fodfunktion);

function fodfunktion() {
  console.log("Loaded instructions FØDDER...");
  document.querySelector("#hotspotFoot").classList.add("my_scale");
  document.querySelector("#efficiency").textContent =
    "peter siger fucking fødder";
}

document
  .querySelector("#tentaklerknap")
  .addEventListener("click", tentfunktion);

function tentfunktion() {
  console.log("Loaded instructions TENTAKLER...");
  document.querySelector("#hotspotTent").classList.add("my_scale");
  document.querySelector("#efficiency").textContent =
    "peter siger fucking tentakler";
}
