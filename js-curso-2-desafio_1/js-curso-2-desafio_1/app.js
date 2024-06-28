let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão foi clicado!');
}

function verificarAlerta() {
    alert('Eu amo JS');
}

function verificarPrompt() {
    let cidade = prompt('Nome de cidade:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificarSoma() {
    let valor1 = parseInt(prompt('Insira um número inteiro:'));
    let valor2 = parseInt(prompt('Insira outro número inteiro:'));
    let soma = valor1 + valor2;
    alert(`O resultado da soma entre ${valor1} e ${valor2} é ${soma}.`)
}