const countdown = document.querySelector(".countdown");
const x = setInterval(function(){

const deadline = new Date(2040,3,13,12,00,00);

const currentDate = new Date();

const distance = deadline - currentDate ;

const days = Math.floor(distance / (1000 * 60 * 60 *24));
const hours = Math.floor(distance / (1000 * 60 * 60)  % 24);
const minutes = Math.floor(distance / (1000 * 60 ) % 60);
const seconds = Math.floor((distance / 1000) % 60);

countdown.innerHTML = `
    <div data-content="days">${days}</div>
    <div data-content="hours">${hours}</div>
    <div data-content="minutes">${minutes}</div>
    <div data-content="seconds">${seconds}</div>

`

},1000)

