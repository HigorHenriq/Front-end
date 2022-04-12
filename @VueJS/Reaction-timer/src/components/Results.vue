<template>
	<p>Reaction Time: {{ score }}ms</p>
	<p class="rank">rank: s{{ rank }}</p>
</template>

<script>
	export default {
		props: ["score"],

		data() {
			return {
				rank: null,
			};
		},

		mounted() {
			if (this.score < 250) {
				this.rank = "Flash?";
			} else if (this.score < 400) {
				this.rank = "Rapidin";
			} else {
				this.rank = "tururu";
			}
		},
	};
</script>

<style scoped>
	.rank {
		font-size: 1.5em;
	}
</style>
