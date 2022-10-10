var txtInput = document.querySelector("#textAreaToTranslate");

var btnTranslate = document.getElementById("translateBtn");
var textAreaTranslated = document.querySelector(".textAreaTranslated");
var Url = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text) {
  return Url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured" + error);
  alert("error occured please try after some Time ");
}
function clickHandler() {
  var userInput = txtInput.value;
  fetch(getTranslationUrl(userInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      textAreaTranslated.innerText = translatedText;
      console.log(textAreaTranslated.value);
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
