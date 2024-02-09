let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}  

exibirMensagemInicial();

exibirTextoNatela('h1', 'Jogo do número secreto');
exibirTextoNatela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
       exibirTextoNatela('h1', 'Acertou!');
       let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
       exibirTextoNatela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNatela('p', 'O número secreto é menor');
        } else {
            exibirTextoNatela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparcampo();
    }
}

function gerarNumeroAleatorio() {
   let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista ==3) {
       listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
      return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    console.log(listaDeNumerosSorteados);
      return NumeroEscolhido;
   }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    }