const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', onInputChange);

function onInputChange(event) {
    if(event.currentTarget.value === '') {
       return outputText.textContent = 'Anonymous';
    }
    outputText.textContent = event.currentTarget.value;
} 