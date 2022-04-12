<template>
	<h1>Reaction Timer</h1>
	<button @click="start" :disabled="isPlaying">Play</button>
	<Block v-if="isPlaying" :delay="delay" @fimJogo="endGame" />
	<Results v-if="showScore" :score="score" />
</template>

<script>
	import Block from "./components/Block.vue";
	import Results from "./components/Results.vue";

	export default {
		name: "App",
		components: { Block, Results },

		data() {
			return {
				isPlaying: false,
				delay: null,
				score: null,
				showScore: false,
			};
		},

		methods: {
			start() {
				// IRÁ GERAR UM DELAY ALEATORIO ENTRE NO MIN = 2s e NO MAX = 7s
				this.delay = 2000 + Math.random() * 5000;
				this.isPlaying = true;
				this.showScore = false;
			},

			endGame(reactionTimeResult) {
				// reactionResult é o dado que recebemos lá do emit no componente block
				this.score = reactionTimeResult;
				this.isPlaying = false;
				this.showScore = true;
			},
		},
	};
</script>

<style>
	* {
		background-color: rgb(15, 15, 15);
		color: white;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: rgb(189, 189, 189);
		margin-top: 60px;
	}
	button {
		background-color: #0faf87;
		border: none;
		padding: 8px 16px;
		cursor: pointer;
		letter-spacing: 1px;
	}
	button[disabled] {
		opacity: 0.2s;
		cursor: not-allowed;
	}
</style>
