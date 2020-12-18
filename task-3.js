const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector('#gallery');


let string = ' ';
for (let i = 0; i < images.length; i += 1) {
    string += `<li class = "gallery"><img src = "${images[i].url}" alt = "${images[i].alt} width ="200" ></li>`;
}

gallery.insertAdjacentHTML('afterbegin', string);







// for (let i = 0; i < images.length; i += 1) {
//     const image = document.createElement('img');
//     const imgList = document.createElement('li');
//     image.src = images[i].url;
//     image.alt = images[i].alt;
    
//     imgList.appendChild(image);
//     gallery.appendChild(imgList);

// }

