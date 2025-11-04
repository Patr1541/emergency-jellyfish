console.log("Halløjsa, måske det virker...");

document.querySelector("#oejet").addEventListener("click", calleye);

function calleye() {
  console.log("øjet virker...");
  document.querySelector("#oejet").classList.add("#aendring1");
  document.querySelector("#oejet").style.fill = "red";
}

document.querySelector("#tentakler").addEventListener("click", calltentakler);

function calltentakler() {
  console.log("tentakler virker...");
}

document.querySelector("#ben").addEventListener("click", callben);

function callben() {
  console.log("ben virker...");
}

/* 
<button id="oejet">ØJET</button>
<button id="tentakler">TENTAKLER</button>
<button id="ben">BEN</button> */
