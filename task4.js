function generateRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
        }, 3000);
    })
}

generateRandomNumberWithDelay()
    .then((randomNumber) => {
        if (randomNumber % 2 === 0) {
            console.log('Завершено успешно. Сгенерированное число — ' + randomNumber);
        } else {
            console.log('Завершено с ошибкой. Сгенерированное число — ' + randomNumber);
        }
    })
    .catch((error) => {
        console.error(error);
    });