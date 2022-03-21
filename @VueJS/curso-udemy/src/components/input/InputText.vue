<template>
	<div class="container-input">
		<label for="">{{ labelInput }}</label>
		<input
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script>
	export default {
		name: "InputText",

		emits: ["update:modelValue"],

		props: {
			labelInput: { type: String },
			placeholder: { type: String, default: "Digite aqui!" },
			type: { type: String, default: "text" },
			modelValue: { type: String, default: "" },
		},

		data() {
			return {};
		},
	};
</script>

<style scoped>
	input {
		display: inline-block;
		box-sizing: border-box;
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		border: none;
		border-bottom: solid 2px var(--cor-secundaria);
		/* border-radius: 4px; */
		outline: none;
	}

	.container-input {
		margin-top: 25px;
	}

	label {
		color: white;
	}
</style>
