<template>
	<div v-if="jobs.length">
		<div v-for="job in jobs" :key="job.id" class="job">
			<router-link :to="{ name: 'jobsDetails', params: { id: job.id } }">
				<h2>{{ job.title }}</h2>
			</router-link>
		</div>
	</div>
	<div v-else>
		<p>loading...</p>
	</div>
</template>

<script>
	export default {
		name: "Jobs",

		data() {
			return {
				jobs: [],
			};
		},

		methods: {},

		mounted() {
			fetch("http://localhost:3000/jobs")
				.then((T) => T.json())
				.then((resp) => {
					console.log(resp);
					this.jobs = resp;
				});
		},
	};
</script>

<style scoped>
	.job h2 {
		background-color: white;
		color: #444;
		max-width: 600px;
		padding: 20px;
		margin: 10px auto;
		border-radius: 10px;
		cursor: pointer;
	}

	.job h2:hover {
		background-color: #ddd;
	}

	.job a {
		text-decoration: none;
	}
</style>
