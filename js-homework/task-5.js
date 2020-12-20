
const nameInput = document.querySelector('#name-input');
const nameTitle = document.querySelector('#name-output');
const defaultName = nameTitle.textContent;


nameInput.addEventListener('input', activeInput);


function activeInput() {
  nameTitle.textContent = nameInput.value !== '' ? nameInput.value : defaultName;
};



// function activeInput() {
//     if (nameInput.value !== '') {
//       nameTitle.textContent = nameInput.value;
//     } else {
//       nameTitle.textContent = defaultName;
//     }
// };

 





 

