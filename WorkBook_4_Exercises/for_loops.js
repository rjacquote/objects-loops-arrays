let list = document.querySelector('ol');
for (let x = 0; x < 7; x++) {
    let liElement = document.createElement('li');
    list.appendChild(liElement).innerText = `I love loops`;
    console.log(liElement);
}

