const inputNumber = document.querySelector('#controls > input');
const buttonRender = document.querySelector('button[data-action="render"]',);
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const box = document.querySelector('#boxes');

buttonRender.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = inputNumber.value;
    for (let i = 0; i < amount; i += 1) {
        let div = document.createElement('div'); 
        let sizes = 30 + (i*10);
        div.style =
          'width: ' +
          sizes +
          'px;' +
          'height: '+ sizes + 'px;' +
          'background-color: ' +
          '#' +
          (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        
        let totalDiv = box.append(div);
    }
};

function destroyBoxes() {
    inputNumber.value = '';
    box.innerHTML = '';

    // while (box.firstChild) {
    //     box.firstChild.remove();
    // }
};



