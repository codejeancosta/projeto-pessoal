let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsole() {
    console.log ('O botao foi clicado')
}

function botaoAlerta() {
    console.log ('Eu amo JS')
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome ded uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

// let cabeçalho = document.querySelector('h1');
// cabeçalho.innerHTML = 'Bem-vindo ao mundo dev';
