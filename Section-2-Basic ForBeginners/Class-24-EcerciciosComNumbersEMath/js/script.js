const number = Number(prompt('Enter a number: '));

const titleNumber = document.getElementById('title-number');

const textContent = document.getElementById('text');

titleNumber.innerHTML = number;

textContent.innerHTML = '';
textContent.innerHTML += `<p>A raiz quadrada: ${number ** 0.5}.<p>`;
textContent.innerHTML += `<p>É NaN: ${Number.isNaN(number)}.<p>`;
textContent.innerHTML += `<p>${number} é interiro: ${Number.isInteger(number)}.<p>`;
textContent.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number)}.<p>`;
textContent.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number)}.<p>`;
textContent.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}.<p>`;