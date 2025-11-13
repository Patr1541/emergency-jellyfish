console.log("Loaded forms javascrips site...");

const myForm = document.querySelector("webform");

function cancelPopup(event) {
  event.preventDefault();
  myForm.querySelector(":user-invalid").focus();
}

myForm.addEventListener("invalid", cancelPopup, true);

/*Indsæt info fra <form id="webform">
          <div class="form-group_kontakt"> til id="form-summary */

function handleSubmit(event) {
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  // 3. vise data
  // 4. evt. nustil formular
  myForm.reset();
}

myForm.addEventListener("submit", handleSubmit);

/*...................*/

const form = document.querySelector("webform");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
