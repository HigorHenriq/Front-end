<template>
	<form @submit.prevent="handleSubmit">
		<label>Email:</label>
		<input type="email" required v-model="email" />

		<label>Password:</label>
		<input type="password" required v-model="password" />

		<div v-if="passwordError" class="error">{{ passwordError }}</div>

		<label>Role:</label>
		<select v-model="role">
			<option value="Selecione um valor">Chose a option</option>
			<option value="developer">Web developer</option>
			<option value="designer">Web design</option>
		</select>

		<label>Skills</label>
		<input type="text" v-model="tempSkill" @keyup="addSkill" />

		<div v-for="(skill, index) in skills" :key="index" class="pill">
			<span @click="deleteSkill(skill)">{{ skill }}</span>
		</div>

		<div>
			<input type="checkbox" v-model="terms" required />
			<label> Accept terms and conditions</label>
		</div>

		<!-- <div>
			<input type="checkbox" value="mario" v-model="names" />
			<label>Mario</label>
			<input type="checkbox" value="luigi" v-model="names" />
			<label>Luigi</label>
			<input type="checkbox" value="yoshi" v-model="names" />
			<label>Yoshi</label>
		</div> -->

		<div class="submit">
			<button>Create Account</button>
		</div>
	</form>

	<p>Email: {{ email }}</p>
	<p>Password: {{ password }}</p>
	<p>Role: {{ role }}</p>
	<p>Terms accepted: {{ terms }}</p>
	<p>Skills accepted: {{ skills }}</p>
	<!-- <p>Names: {{ names }}</p> -->
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				password: "",
				role: "Selecione um valor",
				terms: false,
				// names: [],
				tempSkill: "",
				skills: [],
				passwordError: "",
			};
		},

		methods: {
			addSkill(e) {
				if (e.key === "Enter" && this.tempSkill) {
					if (!this.skills.includes(this.tempSkill)) {
						this.skills.push(this.tempSkill);
					}
					this.tempSkill = "";
				}
			},

			deleteSkill(skill) {
				console.log("skill: " + skill);

				this.skills = this.skills.filter((item) => {
					// CASO A SKILL QUE VENHA DO PARAMETRO SEJA DIFERENTE DE ALGUMA SKILLS
					// ELE RETORNA FALSE PARA FILTRAR O ARRAY
					console.log("item: " + item);
					return skill != item;
				});
			},

			handleSubmit() {
				// VALIDAR SENHA

				this.passwordError =
					this.password.length > 5
						? ""
						: "Password have to be at least 6 chars";

				if (!this.passwordError) {
					console.log("email: ", this.email);
					console.log("password: ", this.password);
					console.log("role: ", this.role);
					console.log("skills: ", this.skills);
					console.log("terms accepted: ", this.terms);
				}
			},
		},
	};
</script>

<style scoped>
	form {
		max-width: 420px;
		margin: 30px auto;
		background-color: white;
		text-align: left;
		padding: 40px;
		border-radius: 10px;
	}

	label {
		color: #aaa;
		display: inline-block;
		margin: 25px 0 15px;
		font-size: 0.7em;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
	}

	input,
	select {
		display: block;
		padding: 10px 6px;
		width: 100%;
		box-sizing: border-box;
		border: none;
		border-bottom: 1px solid #ddd;
		color: #555;
	}

	input[type="checkbox"] {
		display: inline-block;
		position: relative;
		top: 2px;
		width: 16px;
		margin: 0 10px 0 0;
	}

	.pill {
		display: inline-block;
		margin: 20px 10px 0 0;
		padding: 6px 12px;
		background-color: #eee;
		border-radius: 20px;
		font-size: 12px;
		letter-spacing: 1px;
		font-weight: bold;
		color: #777;
		cursor: pointer;
	}

	button {
		background-color: #0b6dff;
		border: 0;
		padding: 10px 20px;
		margin-top: 20px;
		color: white;
		border-radius: 20px;
		cursor: pointer;
	}

	.submit {
		text-align: center;
	}

	.error {
		color: #ff0062;
		margin-top: 10px;
		font-size: 0.8em;
		font-weight: bold;
	}
</style>
