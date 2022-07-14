<template>
	<button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
	<button type="button" @click="changeChildDate">자식 데이터 변경</button>
	<page-title ref="child_component" @send-message="sendMessage"> dkddk</page-title>
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
		changeChildDate() {
			this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
		},
		sendMessage(data) {
			console.log(data);
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
