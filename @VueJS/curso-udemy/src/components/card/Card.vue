<template>
	<div class="card">
		<img
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGhvJTnqbcSaJ3QOj8MzCqgj4QOMPCcP0lg&usqp=CAU"
			alt="mini boi"
		/>
		<h4><slot name="nome"></slot></h4>
		<p class="valor"><slot name="valor"></slot></p>
		<p><slot name="observacao"></slot></p>
		<div>
			<slot name="acoes"> </slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card",
		components: {},

		data() {
			return {};
		},
	};
</script>

<style scoped>
	.card {
		text-align: center;
		color: var(--cor-texto-conteudo);
		box-shadow: 0 4px 8px 0 rgb(10, 10, 10);
		max-width: 300px;
		margin: auto;
		margin-top: 25px;
		margin-bottom: 15px;
		padding: 10px;
	}
	.valor {
		color: grey;
		font-size: 22px;
	}
	/* .icones-card {
		margin: 25px;
		cursor: pointer;
		color: var(--cor-secundaria);
	} */
</style>
