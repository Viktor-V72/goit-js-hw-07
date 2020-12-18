const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientList = document.querySelector('#ingredients');

for (const food of ingredients) {
    const foodList = document.createElement('li');
    foodList.textContent = food;
    ingredientList.appendChild(foodList);
}

