const inputPageNumber = document.querySelector('.inputPage');
const inputLimitNumber = document.querySelector('.inputLimit');
const button = document.querySelector('.button');
const errorParagraph = document.createElement('p');
document.body.appendChild(errorParagraph);
const imageContainer = document.getElementById('imageContainer');

window.addEventListener('load', () => {
    const imageData = JSON.parse(localStorage.getItem('data'));
    if (imageData) {
        imageData.forEach(imageData => {
            const image = document.createElement('img');
            image.src = imageData.download_url;
            image.alt = imageData.author;
            image.classList.add('image');
            imageContainer.appendChild(image);
        })
    }
})

button.addEventListener('click', () => {
    localStorage.clear();
    const pageNumber = inputPageNumber.value;
    const limit = inputLimitNumber.value;
    const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
    errorParagraph.innerText = '';
    imageContainer.innerHTML = '';
    if (!pageNumber || !limit) {
        errorParagraph.innerText = 'Требуется ввести данные';
        event.preventDefault();
        return;
    } else if ((pageNumber <= 0 || pageNumber > 10) && (limit <= 0 || limit > 10)) {
        errorParagraph.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
        event.preventDefault();
        return;
    } else if (limit <= 0 || limit > 10) {
        errorParagraph.innerText = 'Лимит вне диапазона от 1 до 10';
        event.preventDefault();
        return;
    } else if (pageNumber <= 0 || pageNumber > 10) {
        errorParagraph.innerText = 'Номер страницы вне диапазона от 1 до 10';
        event.preventDefault();
        return;
    } else {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data));
                data.forEach(imageData => {
                    const image = document.createElement('img');
                    image.src = imageData.download_url;
                    image.alt = imageData.author;
                    image.classList.add('image');
                    imageContainer.appendChild(image);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
})
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// })