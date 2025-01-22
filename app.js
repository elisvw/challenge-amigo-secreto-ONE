let amigos = [];

function adicionarAmigo() {
    let adicionarNome = document.querySelector('input').value;
    if (adicionarNome == '') {
        alert('Por favor, insira um nome!');
    } else {
        amigos.push(adicionarNome);
        limparCampo();
        atualizarListaDeAmigos();
    }
}

function atualizarListaDeAmigos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let nome = document.createElement('li');
        nome.textContent = amigos[i];
        lista.appendChild(nome);
    }
}

function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[amigoSorteado];

    if (amigos.length == 0) {
        alert('Não foi possível sortear. Insira o nome dos amigos.');
    } else {
        let lista = document.querySelector('ul');
        lista.innerHTML = '';
        let exibirNome = document.getElementById('resultado');
        exibirNome.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
    }
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}