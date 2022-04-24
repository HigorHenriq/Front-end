<template>
	<div v-if="job">
		<h1>{{ job.title }}</h1>
		<p>the job params is: {{ id }}</p>
		<p>{{ job.details }}</p>
	</div>
</template>

<script>
	export default {
		// ACEITANDO O ID DO PARAMETRO ATRAVÉS DE PROPS OU DATA
		props: ["id"],

		data() {
			return {
				job: null,
			};
		},

		mounted() {
			fetch(`http://localhost:3000/jobs/${this.id}`)
				.then((T) => T.json())
				.then((resp) => {
					this.job = resp;
				})
				.catch((err) => console.log(err.message));
		},
	};
</script>

<style></style>
