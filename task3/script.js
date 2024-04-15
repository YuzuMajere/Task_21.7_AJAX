let userInput = '';
if (localStorage.getItem('user') && localStorage.getItem('date')) {
    alert(`Welcome back, ${localStorage.getItem('user')}! It's been a while! Last time we saw you at ${localStorage.getItem('date')}`);
    currentDate = new Date();
} else {
    userInput = prompt('Welcome, please, enter your name');
    currentDate = new Date();
};
// console.log(userInput, currentDate);

localStorage.setItem('user', userInput);
localStorage.setItem('date', currentDate);
console.log(localStorage.getItem('user'), localStorage.getItem('date'));