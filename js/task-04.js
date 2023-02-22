const decrementVelue = document.querySelector('button[data-action="decrement"]');
const counterVelue = document.querySelector('#value');
const incrementVelue = document.querySelector('button[data-action="increment"]');


decrementVelue.addEventListener('click', () => {
    counterVelue.textContent = Number(counterVelue.textContent) - 1;
});

incrementVelue.addEventListener('click', () => {
    counterVelue.textContent = Number(counterVelue.textContent) + 1;
});
