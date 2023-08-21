// function limitarQuantidadeItens(dados, limite) {
//     return dados.slice(0, limite);
// }


// module.exports = limitarQuantidadeItens

class DadosManager {
    constructor() {
        this.dados = [];
    }

    // Métodos da classe...
    adicionarDado(dado) {
        this.dados.push(dado);
    }

    atualizarDado(indice, novoDado) {
        if (indice >= 0 && indice < this.dados.length) {
            this.dados[indice] = novoDado;
        }
    }

    obterDados() {
        return this.dados;
    }

    carregarDadosExistentes(dados) {
        this.dados = dados;
    }

    // Exemplo de limitar a quantidade de itens
    limitarQuantidade(limite) {
        this.dados = this.dados.slice(0, limite);
    }
}

module.exports = DadosManager