<template>
	<div class="box-login">
		<div class="logo">
			<h1>Login</h1>
			<p>Email {{ usuario.email }}</p>
		</div>
		<InputText
			labelInput="E-mail:"
			name="email"
			placeholder="Digite seu email"
			class="inputLogin"
			v-model="usuario.email"
		/>
		<InputText
			labelInput="Senha:"
			name="senha"
			placeholder="Digite sua senha"
			type="password"
			class="inputLogin"
			v-model="usuario.senha"
		/>
		<ButtonInput text="Entrar" :handleClick="Logar" />
	</div>
</template>

<script>
	import InputText from "@/components/input/InputText";
	import ButtonInput from "@/components/button/ButtonInput";
	import Usuario from "@/models/Usuario";
	import usuarioService from "@/services/usuario-service";
	import utilsStorage from "@/utils/storage";

	export default {
		name: "Login",

		components: {
			InputText,
			ButtonInput,
		},

		data() {
			return {
				usuario: new Usuario(),
			};
		},

		methods: {
			Logar() {
				if (!this.usuario.modeloValidoLogin()) {
					return alert("Verifique os campos");
				} else {
					usuarioService
						.login(this.usuario.email, this.usuario.senha)
						.then((response) => {
							this.usuario = new Usuario(response.data.usuario);

							utilsStorage.salvarUsuarioStorage(this.usuario);
							utilsStorage.salvarTokenStorage(
								response.data.token
							);

							console.log(
								"Logado com sucesso! Rota atual -> " +
									this.$router.currentRoute.value.name
							);

							// Após logar o usuario é levado a rota de dashboard
							this.$router.push({ path: "/" });
						})
						.catch((error) => {
							console.log(error);
							alert(error);
						});
				}
			},
		},
	};
</script>

<style scoped>
	.box-login {
		width: 100%;
		max-width: 40vw;
		margin: auto;
		border: 1px solid var(--cor-secundaria);
		border-radius: 10px;
		margin-top: 15vh;
		padding: 25px;
	}

	.logo {
		text-align: center;
		color: var(--cor-secundaria);
	}

	.inputLogin {
		color: var(--cor-secundaria);
	}
</style>
