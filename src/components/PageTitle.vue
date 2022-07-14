<template>
	<h1><slot></slot></h1>
	<button type="button" @click="childFunc">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
	data() {
		return {
			msg: "자식 컴포넌트로부터 보내는 메시지",
		};
	},
	methods: {
		childFunc() {
			this.msg = "변경된 메시지";
		},
	},
	beforeCreate() {
		console.log("자식 beforeCreate");
	},
	created() {
		console.log("자식 created");
	},
	beforeMount() {
		console.log("자식 beforeMounted");
	},
	mounted() {
		console.log("자식 mounted");
		this.$emit("send-message", this.msg);
	},
};
</script>
