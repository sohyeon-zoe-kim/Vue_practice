<template>
	<button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
	<PageTitle ref="child_component" />
</template>
<script>
import PageTitle from "../components/PageTitle";
export default {
	components: { PageTitle },
	computed: {
		msg() {
			return this.$refs.child_component.msg;
		},
	},
	methods: {
		checkChild() {
			alert(this.msg);
		},
	},
	beforeCreate() {
		console.log("beforeCreate");
	},
	created() {
		console.log("created");
	},
	beforeMount() {
		console.log("beforeMount");
	},
	mounted() {
		console.log("mounted");
	},
};
</script>
