let x = 0;
// let list = document.querySelector('ol');
while (x < 7) {
    let liElement = document.createElement('p');
    liElement.appendChild(liElement).innerText = `I love loops`;
    console.log(liElement);
    x++;
}