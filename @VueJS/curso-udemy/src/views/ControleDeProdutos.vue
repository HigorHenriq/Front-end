<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h2 class="titulo">Controle de Produtos</h2>
				<hr />
				<!-- <h2 class="titulo">teste para</h2>
				<ul class="titulo">
					<li v-for="(data, index) in datasFiltradas" :key="index">
						{{ data }}
					</li>
				</ul> -->
			</div>
		</div>

		<div class="row">
			<div class="col-sm-2">
				<!-- O BOTAO AJUSTA SEU TAMANHO DE ACORDO COM O TAMANHO DA COLUNA -->
				<ButtonInput
					text="Adicionar"
					id="btn-produtos"
					:handleClick="adicionarProduto"
				/>
			</div>
			<div class="col-sm-10">
				<a @click="verProdutosEmCard" class="ver-em-cards"
					>Ver em cards</a
				>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<table class="table">
					<thead>
						<tr>
							<th>
								Código
								<i
									class="fas fa-bars icones-tabela"
									@click="filtrarPorId"
								></i>
							</th>
							<th>Nome</th>
							<th>Qtd Estoque</th>
							<th>Valor</th>
							<th>Data de cadastro</th>
							<th>Edição</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in produtos" :key="item.id">
							<td>{{ item.id }}</td>
							<td>{{ item.nome }}</td>
							<td>{{ item.quantidadeEstoque }}</td>
							<td>{{ item.valor }}</td>
							<td>
								{{ item.dataCadastro }}
							</td>
							<td>
								<i
									class="fas fa-file fa-lg icones-tabela"
									@click="editarProduto(item)"
								></i>
								<i
									class="fas fa-bars fa-lg icones-tabela"
									@click="excluirProduto(item)"
								></i>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import ButtonInput from "@/components/button/ButtonInput.vue";
	import ProdutoMixin from "@/mixins/produto-mixin";
	import conversorData from "@/utils/conversor-data";

	export default {
		name: "ControleDeProduto",

		mixins: [ProdutoMixin],

		components: {
			ButtonInput,
		},

		data() {
			return {
				produtos: [],
				filterID: false,
				// datasFiltradas: [],
			};
		},

		methods: {
			adicionarProduto() {
				this.$router.push({ name: "NovoProduto" });
			},

			verProdutosEmCard() {
				this.$router.push({ name: "ListaProdutoCards" });
			},

			ordernarProdutos(prod, b) {
				return prod.id < b.id ? -1 : prod.id > b.id ? 1 : 0;
			},

			filtrarPorId() {
				this.filterID = !this.filterID;

				if (this.filterID) {
					this.produtos = this.produtos
						.sort(this.ordernarProdutos)
						.reverse();
				} else {
					this.produtos = this.produtos.sort(this.ordernarProdutos);
				}
			},

			// getDatas() {
			// 	setTimeout(() => {
			// 		for (let i = 0; i < this.produtos.length; i++) {
			// 			this.datasFiltradas.push(
			// 				conversorData.mascDataFormatoBr(
			// 					this.produtos[i].dataCadastro
			// 				)
			// 			);
			// 		}
			// 	}, 500);
			// },
		},

		// mounted() {
		// 	this.getDatas();
		// },
	};
</script>

<style scoped>
	.ver-em-cards {
		display: flex;
		justify-content: flex-end;
		margin: 35px 25px;
		color: var(--cor-secundaria);
		font-size: 16px;
		font-weight: 700;
		cursor: pointer;
	}

	th,
	td {
		font-size: 18px;
		color: var(--cor-texto-conteudo);
	}

	.icones-tabela {
		/* margin-right: 25px; */
		width: 50px;
		cursor: pointer;
		color: var(--cor-secundaria);
	}
</style>
