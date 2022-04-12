<template>
	<div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
	export default {
		props: ["delay"],

		data() {
			return {
				showBlock: false,
				timer: null,
				reactionTimer: 0,
			};
		},

		mounted() {
			setTimeout(() => {
				this.showBlock = true;
				this.startTimer();
			}, this.delay);
		},

		methods: {
			startTimer() {
				// A CADA 10 MILISEGUNDOS O TIMER VAI RECEBER AUMENTAR
				this.timer = setInterval(() => {
					this.reactionTimer += 10;
				}, 10);
			},

			stopTimer() {
				// LIMPAR O INTERVALO FEITO NA FUNÇÃO STARTTMER
				clearInterval(this.timer);

				console.log("Tempo de reação: " + this.reactionTimer);

				// EMIT PARA ENVIAR AS INFORMAÇÕES DESSE COMPONENTE PARA O PAI
				// PRIMEIRO PARAMETRO PODE SER QUALQUER NOME
				// SEGUNDO PARAMETRO É O DATA QUE QUEREMOS MANDAR
				this.$emit("fimJogo", this.reactionTimer);
			},
		},
	};
</script>

<style scoped>
	.block {
		width: 400px;
		border-radius: 15px;
		background-color: #0faf87;
		color: white;
		text-align: center;
		padding: 100px 0;
		margin: 40px auto;
	}
</style>
