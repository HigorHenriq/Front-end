<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h2 class="titulo">
					{{ modoCadastro ? "Adicionar" : "Editar" }} Produto teste
				</h2>
			</div>
		</div>

		<div class="row form-container">
			<div class="col-sm-2">
				<div class="form-group">
					<label for="id">Código</label>
					<input
						type="text"
						id="id"
						class="form-control"
						disabled
						v-model="produto.id"
					/>
				</div>
			</div>

			<div class="col-sm-10">
				<div class="form-group">
					<label for="nome">Nome *</label>
					<input
						type="text"
						id="nome"
						class="form-control"
						required
						v-model="produto.nome"
					/>
				</div>
			</div>

			<div class="col-sm-4">
				<div class="form-group">
					<label for="nome">Valor</label>
					<input
						type="text"
						id="nome"
						class="form-control"
						v-model="produto.valor"
					/>
				</div>
			</div>

			<div class="col-sm-4">
				<div class="form-group">
					<label for="quantidade">Quantidade</label>
					<input
						type="text"
						id="quantidade"
						class="form-control"
						v-model="produto.quantidadeEstoque"
					/>
				</div>
			</div>

			<div class="col-sm-4">
				<div class="form-group">
					<label for="data-cadastro">Data de cadastro</label>
					<input
						type="date"
						id="data-cadastro"
						class="form-control"
						v-model="produto.dataCadastro"
					/>
				</div>
			</div>

			<div class="col-sm-12">
				<div class="form-group">
					<label for="observacao">Observação</label>
					<textarea
						type="text"
						id="observacao"
						class="form-control"
						rows="4"
						v-model="produto.observacao"
					/>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12">
					<hr />
					{{ produto }}
				</div>

				<div class="col-sm-12">
					<div v-show="modoCadastro" class="form-check-inline">
						<label class="form-check-label">
							<input
								type="checkbox"
								class="form-check-input"
								v-model="continuarAdicionando"
							/>Continuar Adicionando
						</label>
					</div>
					<button class="btn btn-primary" @click="salvarProduto">
						Salvar
					</button>
					<button class="btn btn-default" @click="cancelarProduto">
						Cancelar
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Produto from "@/models/Produto";
	import produtoService from "@/services/produto-service";
	import conversorData from "@/utils/conversor-data";

	export default {
		name: "Produto",
		data() {
			return {
				produto: new Produto(),
				modoCadastro: true,
				continuarAdicionando: false,
			};
		},

		methods: {
			verificarProd(ID_PRODUTO) {
				if (ID_PRODUTO) {
					this.obterProdutoPorId(ID_PRODUTO);
					return (this.modoCadastro = false);
				} else {
					return true;
				}
			},

			obterProdutoPorId(id) {
				produtoService
					.obterPorId(id)
					.then((response) => {
						this.produto = new Produto(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			},

			cadastrarProduto() {
				if (this.produto.validarCadastroProduto()) {
					// É APLICADO O MASC PARA A DATA CHEGAR EM FORMATO ISO NO BD EX 2022-03-16T17:16:57.516Z
					this.produto.dataCadastro =
						conversorData.mascISOemFormatoAmeric(
							this.produto.dataCadastro
						);

					produtoService
						.cadastrar(this.produto)
						.then((response) => {
							alert("Produto Cadastrado com sucesso!");
							this.produto = new Produto();

							if (!this.continuarAdicionando) {
								this.$router.push({
									name: "ControleDeProdutos",
								});
							}
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					alert("Nome necessario!");
				}
			},

			atualizarProduto() {
				if (this.produto.validarAtualizacaoProduto()) {
					// É APLICADO O MASC PARA A DATA CHEGAR EM FORMATO ISO NO BD EX 2022-03-16T17:16:57.516Z
					this.produto.dataCadastro =
						conversorData.mascISOemFormatoAmeric(
							this.produto.dataCadastro
						);
					produtoService
						.atualizar(this.produto)
						.then((response) => {
							alert("Produto atualizaado com sucesso!");
							this.$router.push({ name: "ControleDeProdutos" });
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					alert("O codigo e o nome são necessarios");
				}
			},

			salvarProduto() {
				this.modoCadastro
					? this.cadastrarProduto()
					: this.atualizarProduto();
			},

			cancelarProduto() {
				this.produto = new Produto();
				this.$router.push({ name: "ControleDeProdutos" });
			},
		},

		mounted() {
			const ID_PRODUTO = this.$route.params.id;

			this.verificarProd(ID_PRODUTO);
		},
	};
</script>

<style scoped>
	.form-container {
		margin-top: 25px;
		color: var(--cor-texto-conteudo);
	}

	textarea {
		resize: none;
	}

	.form-check-input {
		margin-bottom: 25px;
		margin-right: 15px;
		gap: 15px;
	}

	.btn-primary,
	.btn-primary:active,
	.btn-primary:focus,
	.btn-primary:focus-visible,
	.btn-primary:visited,
	.btn-primary:not(:disabled):not(:disabled):active {
		color: var(--cor-texto-conteudo);
		background-color: var(--cor-secundaria);
		border: 1px solid var(--cor-secundaria);
		outline: none;
		box-shadow: none;
		transition: 0.6s ease;
	}

	.btn-primary:hover {
		background-color: var(--cor-primaria);
	}

	.btn-default,
	.btn-default:active,
	.btn-default:focus,
	.btn-default:focus-visible,
	.btn-default:visited,
	.btn-default:not(:disabled):not(:disabled):active {
		float: right;
		outline: none;
		box-shadow: none;
		transition: 0.6s ease;
	}
</style>
