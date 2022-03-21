<template>
	<div>
		<!-- <nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav> -->
		<Menu v-if="this.$route.name != 'Login'" />
		<router-view />
	</div>
</template>

<script>
import Menu from "@/components/menu/Menu.vue";

export default {
	components: {
		Menu,
	},

	// computed: {
	// 	obterRota() {
	// 		return this.$route.name;
	// 	},
	// },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

:root {
	--cor-primaria: rgb(20, 27, 34);
	--cor-secundaria: rgb(181, 116, 243);
	--cor-texto-titulo: rgb(187, 187, 187);
	--cor-texto-conteudo: white;
}

* {
	margin: 0;
	padding: 0;
	font-family: Roboto;
	background-color: rgb(17, 17, 17);
}

.container {
	margin-top: 15px;
}

.titulo {
	color: var(--cor-texto-titulo);
	font-weight: 600;
}
</style>
