<template>
	<div id="nav">
		<router-link to="/" id="logo-url">
			<img :src="logo" :alt="alt" id="logo" />
		</router-link>
		<router-link to="/">Home</router-link>
		<router-link to="/pedidos">Pedidos </router-link>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	props: ["logo", "alt"],
};
</script>

<style scoped>
#nav {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: #222;
	border-bottom: 4px solid #111;
	padding: 15px 50px;
}

#nav a {
	font-size: 1.2rem;
	color: #fcba03;
	text-decoration: none;
	margin: 12px;
	transition: 0.5s;
}

@media (min-width: 1366px) {
	#nav a {
		font-size: 1.5rem;
	}
}

#nav a:hover {
	color: aliceblue;
}

#nav #logo-url {
	margin: auto;
	margin-left: 0;
}

#logo {
	width: 40px;
	height: 40px;
}
</style>
