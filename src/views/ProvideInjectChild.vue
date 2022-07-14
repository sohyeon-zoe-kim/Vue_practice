<template>
	<div>hi</div>
</template>
<script>
export default {
	inject: ["itemLength"],

	beforeCreate() {
		console.log("자식 beforeCreated");
		console.log(this.itemLength);
	},
	created() {
		console.log("자식 created");
	},
	beforeMount() {
		console.log("자식 beforeMount");
	},
	mounted() {
		console.log(this.itemLength);
	},
};
</script>
