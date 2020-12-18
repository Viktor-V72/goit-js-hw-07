const listItems = categories.querySelectorAll('li.item');

for (let item of listItems) {
    console.log(`Категория: ${item.querySelector('h2').textContent} \nКоличество элементов: ${item.querySelectorAll('li').length}`)
}