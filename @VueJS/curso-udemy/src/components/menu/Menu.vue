<template>
	<ul>
		<li><router-link to="/">Dashboard</router-link></li>
		<li><router-link to="/controle-de-produtos">Produtos</router-link></li>
		<li><router-link to="/controle-de-clientes">Clientes</router-link></li>
		<li><a @click="logout">Sair</a></li>
	</ul>
</template>

<script>
	import usuarioService from "@/services/usuario-service";
	import utilsStorage from "@/utils/storage";

	export default {
		name: "Menu",

		data() {
			return {};
		},

		methods: {
			logout() {
				usuarioService
					.logout()
					.then((resp) => {
						utilsStorage.removerUsuarioStorage();
						utilsStorage.removerTokenStorage();
						this.$router.push({ path: "/login" });
					})
					.catch((error) => console.log(error));
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style-type: none;
		overflow: hidden;
		background-color: var(--cor-primaria);
	}

	li {
		float: left;
	}

	li:first-child {
		margin-left: 40px;
	}

	li:last-child {
		float: right;
		margin-right: 8vw;
	}

	li a {
		color: white;
		background-color: var(--cor-primaria);
		display: block;
		text-decoration: none;
		text-align: center;
		padding: 15px 20px;
	}

	li a:hover {
		cursor: pointer;
		border-bottom: 5px solid var(--cor-secundaria);
	}
</style>
