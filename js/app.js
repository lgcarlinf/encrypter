const texto = document.querySelector("#texto");
const submit = document.querySelector("#submit");
const decryptBtn = document.querySelector("#decrypt");
const containerRight = document.querySelector("#container-right_info");
const resultDiv = document.querySelector("#result");
const paragraph = document.querySelector("#parrafo");
const clipboard = document.querySelector("#clipboard");

const handleEncrypt = () => {
  const inputText = texto.value.toLowerCase();
  const encryptedText = encryptText(inputText);
  if (encryptedText) {
    displayResult(encryptedText);
  }
  resetForm();
};

const encryptChar = (char) => {
  switch (char) {
    case 'a': return 'ai';
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default: return char;
  }
};

const encryptText = (text) => {
  return text.split('').map(encryptChar).join('');
};

const handleDecrypt = () => {
  const inputText = texto.value.toLowerCase();
  const decryptedText = decryptText(inputText);
  if (decryptedText) {
    displayResult(decryptedText);
  }
  resetForm();
};

const decryptText = (text) => {
  return text
    .replace(/ai/gi, 'a')
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');
};

const displayResult = (result) => {
  resultDiv.classList.remove("visible");
  containerRight.classList.add("visible");
  paragraph.innerHTML = result;
};

const resetForm = () => {
  texto.value = "";
};

const handleClipboard = async () => {
  const paragraphText = paragraph.innerHTML;
  await navigator.clipboard.writeText(paragraphText);
  handleTooltop();
};

const handleTooltop = () => {
  const tooltip = document.getElementById('tooltip');
  
  tooltip.classList.add('show');
  
  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 1000);
};

submit.addEventListener("click", handleEncrypt);
decryptBtn.addEventListener("click", handleDecrypt);
clipboard.addEventListener("click", handleClipboard);
