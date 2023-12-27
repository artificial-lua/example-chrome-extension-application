let testButton = document.getElementById('test-button');
let testArea = document.getElementById('test-area');

window.onload = () => {
    testButton.addEventListener('click', async () => {
        testArea.innerHTML += 'Hello World!\n';
    });
}
