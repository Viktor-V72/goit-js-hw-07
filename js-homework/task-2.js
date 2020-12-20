const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientList = document.querySelector('#ingredients');

const totalProducts = ingredients.map(product => {
    const foodList = document.createElement('li');
    foodList.textContent = product;
    return foodList;
});

ingredientList.append(...totalProducts);


// for (const food of ingredients) {
//     const foodList = document.createElement('li');
//     foodList.textContent = food;
//     ingredientList.appendChild(foodList);
// }

