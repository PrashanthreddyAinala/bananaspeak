var inputValue = document.querySelector('#input-text');
var btn = document.querySelector('#btn-translate');
var output = document.querySelector('#output-text');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function translate(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler() {
    alert("Something went wrong please try after sometime")
}

function clickHandler() {
    // input from client
    var inputText = inputValue.value;

    // processing
    fetch(translate(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);