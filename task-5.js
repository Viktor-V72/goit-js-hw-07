
const nameInput = document.querySelector('#name-input');
const nameTitle = document.querySelector('#name-output');
const defaultName = nameTitle.textContent;

nameInput.addEventListener('input', activeInput);

function activeInput() {
    if (nameInput.value !== '') {
      nameTitle.textContent = nameInput.value;
    } else {
      nameTitle.textContent = defaultName;
    }
};

 





 

