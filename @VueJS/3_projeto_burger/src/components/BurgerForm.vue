<template>
	<div>
		<Message :msg="msg" v-show="msg" />
		<div>
			<form id="burger-form" @submit="createBurger">
				<div class="input-container">
					<label for="nome"> Nome do cliente: </label>
					<input
						type="text"
						id="nome"
						name="nome"
						v-model="nome"
						placeholder="Digite seu nome"
					/>
				</div>
				<div class="input-container">
					<label for="pao"> Escolha o pão: </label>
					<select name="pao" id="pao" v-model="pao">
						<option value="">Selecione o seu pão</option>
						<option
							v-for="pao in paes"
							:key="pao.id"
							:value="pao.tipo"
						>
							{{ pao.tipo }}
						</option>
					</select>
				</div>
				<div class="input-container">
					<label for="carne"> Escolha a carne: </label>
					<select name="carne" id="carne" v-model="carne">
						<option value="">Selecione o tipo de carne</option>
						<option
							v-for="carne in carnes"
							:key="carne.id"
							:value="carne.tipo"
						>
							{{ carne.tipo }}
						</option>
					</select>
				</div>
				<div class="input-container">
					<label id="opcionais-title" for="opcionais">
						Selecione as opções:
					</label>
					<div
						class="checkbox-container"
						v-for="opcional in opcionaisdata"
						:key="opcional.id"
					>
						<input
							type="checkbox"
							name="opcionais"
							:value="opcional.tipo"
							v-model="opcionais"
						/>
						<span>{{ opcional.tipo }}</span>
					</div>
				</div>
				<div class="input-container">
					<input
						type="submit"
						class="submit-btn"
						value="Criar meu burger"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Message from "./Message.vue";

export default {
	name: "burgerForm",

	components: {
		Message,
	},

	data() {
		return {
			// DADOS VINDO DO SERVIDOR
			paes: null,
			carnes: null,
			opcionaisdata: null,
			// DADOS QUE SERÁ MANDADO PARA O SERVIDOR
			nome: null,
			pao: null,
			carne: null,
			opcionais: [],
			status: "Solicitado",
			msg: null,
		};
	},

	methods: {
		async getIngredientes() {
			const req = await fetch("http://localhost:3000/ingredientes");

			const data = await req.json();

			console.log(data);

			this.paes = data.paes;
			this.carnes = data.carnes;
			this.opcionaisdata = data.opcionais;
		},

		async createBurger(e) {
			e.preventDefault();

			const data = {
				nome: this.nome,
				carne: this.carne,
				pao: this.pao,
				opcionais: Array.from(this.opcionais),
				status: this.status,
			};

			// É NECESSARIO CONERTE O OBJETO DE DATA PARA TEXTO PARA O BACK END ENTENDER O DADOS
			const dataJson = JSON.stringify(data);

			console.log(dataJson);

			const req = await fetch("http://localhost:3000/burgers", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: dataJson,
			});

			//DA PARA RECEBER ALGUMA RESPOSTA QUANDO ENVIA PRO BANCO
			const res = await req.json();
			console.log(res);

			// COLOCAR UMA MSG DO SISTEMA
			this.msg = `Pedido Nº ${res.id} realizado com sucesso`;

			// LIMPAR MSG
			setTimeout(() => {
				this.msg = "";
			}, 1500);

			// LIMPAR OS CAMPOS
			this.nome = "";
			this.carne = "";
			this.pao = "";
			this.opcionais = "";
		},
	},

	mounted() {
		this.getIngredientes();
	},
};
</script>

<style scoped>
#burger-form {
	max-width: 400px;
	margin: 0 auto;
}

.input-container {
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
}

label {
	font-weight: bold;
	margin-bottom: 15px;
	color: #222;
	padding: 5px 10px;
	border-left: 4px solid #fcba03;
}

input,
select {
	padding: 5px 10px;
	width: 300px;
}

/* #opcionais-container {
	flex-direction: row;
	flex: wrap;
} */

#opcionais-title {
	width: 100%;
}

.checkbox-container {
	display: flex;
	align-items: flex-start;
	margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
	width: auto;
}

.checkbox-container span {
	margin-left: 6px;
	font-weight: bold;
}

.submit-btn {
	font-size: 16px;
	font-weight: bold;
	background-color: #222;
	color: #fcba03;
	border: 2px solid #222;
	padding: 10px;
	margin: 0 auto;
	cursor: pointer;
	transition: 0.5s;
}

.submit-btn:hover {
	background-color: aliceblue;
	color: black;
}
</style>
