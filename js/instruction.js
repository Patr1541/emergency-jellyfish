console.log("Loaded instructions...");

document.querySelector("#oejeknap").addEventListener("click", oejefunktion);

function oejefunktion() {
  console.log("Loaded instructions ØJE...");
  document.querySelector("#hotspotEye").classList.add("my_scale");
  document.querySelector("#efficiency").textContent =
    "Øjet: Den har kun et øje og kan kun se 15 meter ud i luften, dog kan den se meget skarpt og igennem ting, så du kan ikke gemme dig, når den er i nærheden.";
}

document.querySelector("#fodknap").addEventListener("click", fodfunktion);

function fodfunktion() {
  console.log("Loaded instructions FØDDER...");
  document.querySelector("#hotspotFoot").classList.add("my_scale");
  document.querySelector("#efficiency").textContent =
    "Fødder: Vandmandens ben er meget lange og tynde, og den kan derfor løbe ligeså hurtigt som en gepard og hurtigt fange dig, hvis du forsøger at flygte.  Dog, kan den kun danse 15 minutter ad gangen, så hvis du ser den, er du 'kun' tvunget til 15 minutters dans ad gangen, også er du fredet en hel time.";
}

document
  .querySelector("#tentaklerknap")
  .addEventListener("click", tentfunktion);

function tentfunktion() {
  console.log("Loaded instructions TENTAKLER...");
  document.querySelector("#hotspotTent").classList.add("my_scale");
  document.querySelector("#efficiency").textContent =
    "Tentakler: Hendes tentakler kan svitse, så hvis man prøver at angribe vandmanden, bliver man svitset af dens tentaklerne. Dog er den kilden, så hvis man kommer tæt nok på under flamenco-dansen, kan man måske gå den til at grine og hermed blive fredet";
}
