<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h2 class="titulo">Card de Produtos</h2>
				<hr />
			</div>
		</div>

		<div class="row">
			<div>
				<Card v-for="produto in produtos" :key="produto.id">
					<template #nome>{{ produto.nome }}</template>
					<template #valor>{{ produto.valor }}</template>
					<template #observacao>{{ produto.observacao }}</template>
					<template #acoes
						><i
							class="fas fa-file fa-2x icones-card"
							@click="editarProduto(produto)"
						></i>
						<i
							class="fas fa-bars fa-2x icones-card"
							@click="excluirProduto(produto)"
						></i
					></template>
				</Card>
			</div>
		</div>
	</div>
</template>

<script>
	import Card from "@/components/card/Card.vue";
	import ProdutoMixin from "@/mixins/produto-mixin";
	export default {
		name: "ListaProdutoCard",

		mixins: [ProdutoMixin],

		components: {
			Card,
		},

		data() {
			return {};
		},
	};
</script>

<style scoped>
	.icones-card {
		/* width: 50px; */
		margin: 25px;
		cursor: pointer;
		color: var(--cor-secundaria);
	}
</style>
