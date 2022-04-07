function sortear(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const sorteio = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `${sorteio}`;
}

