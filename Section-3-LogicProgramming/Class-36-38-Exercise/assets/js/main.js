//tecla de atalho para identar testos CTRL + SHIFT + I
let form = document.querySelector('.form');

function receivesFormEvent (e) {
    e.preventDefault();
    
    const inputWeight = form.querySelector('.weight');
    const inputHeight = form.querySelector('.height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight || weight > 300 || weight < 30) {
        setResultado('Peso Inválido', false)
        return;
    }

    if (!height || height > 2 || height < 1.10)  {
        setResultado('Altura Inválida', false)
        return;
    }
    
    
    IMC = getImc(weight, height);

    resultImc = getImcRange(IMC);

    msg = `Resultado: Seu IMC: ${IMC} (${resultImc}). `

    setResultado(msg, true);
 
};

form.addEventListener('submit', receivesFormEvent);

function getImc (weight, height) {
    const imc =  weight / height ** 2;
    return imc.toFixed(2);
}

function getImcRange (IMC) {
    if (IMC < 18.5) return resultImc = 'Abaixo do peso';
    if (IMC > 18.5 && IMC < 24.9) return resultImc = 'Peso normal'
    if (IMC > 25 && IMC < 29.9) return resultImc = 'Sobrepeso'
    if (IMC > 30 && IMC < 34.9) return resultImc = 'Obesidade grau 1'
    if (IMC > 35 && IMC < 39.9) return resultImc = 'Obesidade grau 2'
    if (IMC > 40 && IMC < 80) return resultImc = 'Obesidade grau 3';
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML =  '';
    const p = createP();

    if (isValid) {
        p.classList.add('p-result');
    }else {
        p.classList.add('bad-result');
    }
    p.innerHTML = `${msg}`;
    result.appendChild(p);
}