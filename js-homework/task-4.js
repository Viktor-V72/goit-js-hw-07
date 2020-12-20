
let counterValue = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
let count = 0;

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);

function increment() {
  count += 1;
  counterValue.textContent = count;
};

function decrement() {
  count -= 1;
  counterValue.textContent = count;
};



