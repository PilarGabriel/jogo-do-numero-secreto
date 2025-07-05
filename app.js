listaNumerosSorteados = [];
//lista com todos os números que serão sorteados
let numeroMaximo = 10
//armazena a variável. numero máximo.
let numeroSecreto = gerarNumeroAleatorio();
//armazena o número que foi gerado pela função na variável
let tentativas = 1;
//armazena o número 1 na variável tentativas

function exibirTextosNaTela(tag, texto) {
    //cria a função
    let campoDeTexto = document.querySelector(tag);
    // seleciona uma tag dentro do HTML do jogo
    campoDeTexto.innerHTML = texto;
    //escreve um texto para ser exibido dentro dessa tag
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
     //source que permite a narração falada
}


exibirTextosNaTela ('h1', 'Boas-vindas ao Jogo do Número Secreto!');
//chama a função com os parâmetros de tag(h1) e de texto
exibirTextosNaTela ('p', `Escolha um número entre 1 e ${numeroMaximo}`);
//chama a função com os parâmetros de tag(p) e de texto


function verificarChute() {
    //cria a função
    let chute = document.querySelector('input').value;
    //armazena o número (somente o valor, por conta do .value) que será digitado no campo 'input' do HTML dentro da variável
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        //armazena dois valores na variável, dependendo do valor das tentativas.
        let mensagemDeTentativas = `Você descobriu o número secreto (${chute}) com ${tentativas} ${palavraTentativa}!`;
        //armazena um valor na variável
        exibirTextosNaTela ('h1', 'Acertou!');
        //exibe texto de título
        exibirTextosNaTela ('p', mensagemDeTentativas);
        //exibe texto de parágrafo
        document.getElementById('reiniciar').removeAttribute('disabled');
        //tira a propriedade que desabilita o botão de reiniciar o jogo
        

        } else {
            if (numeroSecreto > chute) {
                //se o numero secreto for maior que o chute...
                exibirTextosNaTela ('h1', `Tentativas: ${tentativas}`);
                exibirTextosNaTela ('p', `O número secreto é maior do que ${chute}. `);
                //exibe uma mensagem
            } else {
                //senão (se for menor...)
                exibirTextosNaTela ('h1', `Tentativas: ${tentativas}`);
                exibirTextosNaTela ('p', `O número secreto é menor do que ${chute}. `);
                //exibe outra mensagem
            }
            limparCampo();
            //limpa o campo 'input'
        tentativas++};
    //aumenta o número de tentativas em 1
    };
       


function gerarNumeroAleatorio() {
    //função foi criada
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    //gera um número aleatório entre 1 e o número máximo.
    let quantidadeDeElementosDaLista = listaNumerosSorteados.length;
    //armazena uma variável, nesse caso o número total de elementos presentes na lista

if (quantidadeDeElementosDaLista == numeroMaximo) {
    //se a quantidade de numeros presentes na lista for igual ao máximo permitido pelo jogo...
    listaNumerosSorteados = [];
    //...esvazia a lista de números sorteados
}

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        //se a lista contém o número escolhido...
        gerarNumeroAleatorio();
        //gera um novo número aleatório
    } else {
        //senão...
        listaNumerosSorteados.push(numeroEscolhido);
        //adiciona o numero sorteado à lista
        console.log(listaNumerosSorteados);
        //lista no console todos os números que já foram sorteados
        return numeroEscolhido;
        //e retorna o mesmo
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    //seleciona uma linha no código HTML
    chute.value = '';
    //define o valor desse campo para '' ou sem texto
}

function reiniciarJogo() {
    //reinicia o jogo, essa função foi chamada no código HTML na linha aonde o botão de novo jogo está marcado
    numeroSecreto = gerarNumeroAleatorio();
    //gera outro número aleatório
    tentativas = 1;
    //volta as tentativas para 1
    limparCampo();
    //limpa o campo 'input'
    exibirTextosNaTela ('h1', 'Boas-vindas ao Jogo do Número Secreto!');
    //exibe texto no título
    exibirTextosNaTela ('p', `Escolha um número entre 1 e ${numeroMaximo}`);
    //exibe texto no parágrafo
    document.getElementById('reiniciar').setAttribute('disabled', true);
}