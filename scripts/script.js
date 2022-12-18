const container = document.querySelector('.container');
const allGridBlocks = document.querySelectorAll('.grid-block');


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