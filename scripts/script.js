const container = document.querySelector('.container');
const allGridBlocks = document.querySelectorAll('.grid-block');
const sizeButton = document.querySelector('#size');

for (i = 0; i < 32; i++) {
    const block = document.createElement('div');
    block.classList.add('grid-block');
    block.classList.add('change-color');
    container.appendChild(block);

}

const hoverOverBlocks = () => {
    allGridBlocks.forEach(function(block) {
        block.addEventListener('mouseover', function () {
            block.classList.add('change-color');
        });
    });
}
let userSize;

const promptButtonSize = () => {
    sizeButton.addEventListener('click', function () {
        userSize = prompt('Enter desired grid size');
        return userSize;
    })
}

promptButtonSize();

const displayNewGrid = () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    if(userSize > 100) {
        alert('Limit is 100');
        return null;
    }

    for (let i = 0; i < userSize; i++) {
    const block = document.createElement('div');
    block.classList.add('grid-block');
    block.classList.add('change-color');
    container.appendChild(block);
    }
}

sizeButton.addEventListener('click', displayNewGrid);