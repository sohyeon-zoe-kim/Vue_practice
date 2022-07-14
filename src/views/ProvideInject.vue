<template>
	<ProvideInjectChild />
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";
export default {
	components: { ProvideInjectChild },
	data() {
		return {
			items: ["a", "b", "c"],
		};
	},
	provide() {
		console.log("부모 provide");
		return {
			itemLength: this.items.length,
		};
	},
	beforeCreate() {
		console.log("부모 beforeCreated");
	},
	created() {
		console.log("부모 created");
	},
	beforeMount() {
		console.log("부모 beforeMount");
	},
	mounted() {
		console.log("부모 mounted");
	},
};
</script>
