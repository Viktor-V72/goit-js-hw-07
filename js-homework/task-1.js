const listItems = categories.querySelectorAll('li.item');


for (let item of listItems) {
    console.log(`Категория: ${item.firstElementChild.textContent} \nКоличество элементов: ${item.querySelectorAll('li').length}`)
}

