import produtoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import conversorMonitario from "@/utils/conversor-monitario";
import conversorData from "@/utils/conversor-data";

let ProdutoMixin = {
    data() {
        return {
            produtos: [],
        }
    },

    mounted() {
        this.getProdutos();
    },

    methods: {

        getProdutos() {
            produtoService
                .obterTodos()
                .then((response) => {
                    this.produtos = response.data.map(
                        (prod) => new Produto(prod)


                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        editarProduto(produto) {
            this.$router.push({
                name: "EditarProduto",
                params: { id: produto.id },
            });
        },

        excluirProduto(produto) {
            produtoService
                .deletar(produto.id)
                .then((responde) => {
                    alert("produto => " + produto.nome + " deletado");

                    // RECARREGAR A LISTA E LIMPAR
                    let indice = this.produtos.findIndex(
                        (prod) => prod.id == produto.id
                    );

                    this.produtos.splice(indice, 1);
                    // OU
                    // this.getProdutos();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
}

export default ProdutoMixin