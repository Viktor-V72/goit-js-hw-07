
const testInput = document.querySelector('#validation-input');
const inputLength = Number(testInput.getAttribute('data-length'));

testInput.addEventListener('change', validInput)

function validInput() {
    if (testInput.value.length === inputLength) {
        testInput.classList.add('valid');
        testInput.classList.remove('invalid');
    } else if (testInput.value.length === 0) {
        testInput.classList.remove('valid', 'invalid');
    } else {
        testInput.classList.add('invalid');
        testInput.classList.remove('valid');
    }

};


