/*
* File: App.js
* Author: Sztana Balázs
* Copyright: 2023, Sztana Balázs 
* Date: 2023-06-06
* Web: http://github.com/BalazsSztana
* Licenc: MIT
*
*/
const doc = {
    heightInput: document.querySelector('#height'),
    widthInput: document.querySelector('#width'),
    lengthInput: document.querySelector('#lenght'),
    volumeInput: document.querySelector('#volume'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index: 0
};

window.addEventListener('load', () => {
    init();
});

function init() {
    if(doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            console.log('működik')
            startCalc();
        });
    }
    // checkInput(a);
}

function startCalc() {
    let height = doc.heightInput.value;
    let width = doc.widthInput.value;
    let length = doc.lengthInput.value;
    state.volume = calcBodyIndex(height, width, length);
    doc.volumeInput.value = state.volume;
}

function calcBodyIndex(height, width, length) {
    return ((height-10) * width * length)/1000000;
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    if(inputStr.match(/^[0-9.]+$/)){
        if(inputNum > 0) {
            return true;
        }else {
            return false;
        }        
    }else{
        return false;
    }    
}