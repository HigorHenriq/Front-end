import conversorData from "@/utils/conversor-data";
import conversorMonitario from "@/utils/conversor-monitario";

export default class Produto {
    constructor(obj) {
        // É CRIADO ESSA CONDIÇÃO PARA CASO VENHA INFO UNDEFINED N QUEBRE
        obj = obj || {}

        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = conversorMonitario.mascRealPreFixo(obj.valor) || 0
        this.quantidadeEstoque = obj.quantidadeEstoque || 0
        this.dataCadastro = conversorData.mascISOtoAmericano(obj.dataCadastro)
        this.observacao = obj.observacao
    }

    validarCadastroProduto() {
        return !!this.nome
    }

    validarAtualizacaoProduto() {
        return !!this.nome && !!this.id
    }
}