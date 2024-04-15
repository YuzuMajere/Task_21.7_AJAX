const inputNumber = document.querySelector('.formInput');
const button = document.querySelector('.button');
const newList = document.createElement('ul');
// let newListItem = document.createElement('li');
let newListItem = '';

button.addEventListener('click', () => {
    const inputValue = inputNumber.value;
    const url = `https://jsonplaceholder.typicode.com/users/${inputValue}/todos`;
    newList.innerHTML = '';
    newListItem.innerHTML = '';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            newList.textContent = 'Student ID: ' + data[0].userId;
            document.body.appendChild(newList);
            for (let i = 0; i < data.length - 1; i++) {
                newListItem = document.createElement('li');
                newListItem.innerText = data[i].title;
                if (data[i].completed) {
                    newListItem.style.textDecoration = 'line-through';
                }
                document.body.appendChild(newListItem);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ошибка: ' + 'Пользователь с указанным id не найден');
        });
});