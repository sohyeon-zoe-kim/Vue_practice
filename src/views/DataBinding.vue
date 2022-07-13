<template>
	<div>
		<h1>{{ fullName }}</h1>
		<h2>{{ fullName }}</h2>
		<button type="button" @click="changeName">변경</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: "kim",
			lastName: "sohyeon",
			fullName: "",
		};
	},
	methods: {
		changeName() {
			this.lastName = "sorogi";
		},
	},
	watch: {
		fitstName() {
			console.log("watch");
			this.fullName = this.firstName + " " + this.lastName;
		},
		lastName() {
			console.log("watch");
			this.fullName = this.firstName + " " + this.lastName;
		},
	},
};
</script>
