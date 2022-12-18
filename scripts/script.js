const container = document.querySelector('.container');

for (i = 0; i < 32; i++) {
    const block = document.createElement('div');
    block.classList.add('grid-block');
    container.appendChild(block);
}