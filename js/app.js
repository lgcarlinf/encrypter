const texto = document.querySelector("#texto");
const submit = document.querySelector("#submit");
const decryptBtn = document.querySelector("#decrypt");
const containerRight = document.querySelector("#container-right_info");
const resultDiv = document.querySelector("#result");
const p = document.querySelector("#parrafo");
const clipboard = document.querySelector("#clipboard");

const text = () => {
  const arr = texto.value.toLowerCase().split("");
  const arrEncrypt = arr.map((l) => encrypt(l));
  const result = arrEncrypt.join("");
  if (result) {
    resultDiv.classList.remove("visible");
    containerRight.classList.add("visible");
    p.innerHTML = result;
  }

  resetForm();
};

const encrypt = (l) => {
  if (l == "a") {
    return (l = "ai");
  } else if (l == "e") {
    return (l = "enter");
  } else if (l == "i") {
    return (l = "imes");
  } else if (l == "o") {
    return (l = "ober");
  } else if (l == "u") {
    return (l = "ufat");
  } else {
    return l;
  }
};

const decrypt = () => {
  const regexA = /ai/gi;
  const regexE = /enter/gi;
  const regexI = /imes/gi;
  const regexO = /ober/gi;
  const regexU = /ufat/gi;

  const decrypt = texto.value
    .toLowerCase()
    .replace(regexA, "a")
    .replace(regexE, "e")
    .replace(regexI, "i")
    .replace(regexO, "o")
    .replace(regexU, "u");

  if (decrypt) {
    resultDiv.classList.remove("visible");
    containerRight.classList.add("visible");
    p.innerHTML = decrypt;
  }

  resetForm();
};

const resetForm = () => {
  texto.value = "";
};

const clipBoard = async () => {
  let parrafo = document.querySelector("#parrafo").innerHTML;
  await navigator.clipboard.writeText(parrafo);
};

submit.addEventListener("click", text);
decryptBtn.addEventListener("click", decrypt);
clipboard.addEventListener("click", clipBoard);
