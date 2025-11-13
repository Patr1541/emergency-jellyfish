const form = document.querySelector("form");

const firstOutput = document.querySelector("#first_name_output");
const secondOutput = document.querySelector("#telefon_id_output");
const thirdOutput = document.querySelector("#email_id_output");
const fourthOutput = document.querySelector("#observation_id_output");
const fifthOutput = document.querySelector("#tid_id_output");
const sixtOutput = document.querySelector("#antal_id_output");

function handleSubmit(event) {
  event.preventDefault();

  // Hent værdier fra form
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const telefon_id_js = formData.get("telefon_id");
  const email_id_js = formData.get("email_id");
  const observation_id_js = formData.get("observation_id");
  const tid_id_js = formData.get("tid_id");
  const antal_id_js = formData.get("antal_id");

  // Sæt værdier ind i output-elementer
  firstOutput.textContent = firstName;
  secondOutput.textContent = telefon_id_js;
  thirdOutput.textContent = email_id_js;
  fourthOutput.textContent = observation_id_js;
  fifthOutput.textContent = tid_id_js;
  sixtOutput.textContent = antal_id_js;

  // ...
  form.reset();
}
form.addEventListener("submit", handleSubmit);
