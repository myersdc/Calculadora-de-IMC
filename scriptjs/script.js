const resultado = document.querySelector('#resultado');
const botaoReset = document.querySelector('#botaoReset');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcularIMC = () => {
  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Acima do peso';
    } else if (imc < 35) {
      classificacao = 'Obesidade Grau I';
    } else if (imc < 41) {
      classificacao = 'Obesidade Grau II';
    } else {
      classificacao = 'Obesidade Grau III';
    }
    
    resultado.innerHTML = `<p><strong>IMC:</strong> ${imc}</p><p><strong>Classificação:</strong> ${classificacao}</p>`;
    botaoReset.style.display = 'block';
  } else {
    resultado.innerHTML = '<p>Preencha os campos</p>';
  }
}

const resetar = () => {
  altura.value = '';
  peso.value = '';
  resultado.innerHTML = '';
  botaoReset.style.display = 'none';
}
