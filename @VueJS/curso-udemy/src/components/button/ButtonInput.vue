<template>
	<button @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
	name: "ButtonInput",

	props: {
		text: { type: String, require },
		handleClick: { type: Function, default: () => {} },
	},
};
</script>

<style scoped>
button {
	width: 100%;
	height: 50px;
	background-color: var(--cor-secundaria);
	color: white;
	font-size: 22px;
	margin: 15px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.7s ease;
}

button:hover {
	background-color: var(--cor-primaria);
}
</style>
