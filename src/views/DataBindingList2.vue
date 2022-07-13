<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>제품명</th>
					<th>가격</th>
					<th>카테고리</th>
					<th>배송료</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="i" v-for="(product, i) in productList">
					<td>{{ product.product_name }}</td>
					<td>{{ product.price }}</td>
					<td>{{ product.category }}</td>
					<td>{{ product.delivery_price }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	data() {
		return {
			productList: [],
		};
	},
	methods: {
		async getList() {
			this.productList = await this.$api("https://6258dd4c-0cae-4a0b-bd2a-c608f60187e6.mock.pstmn.io/list", "get");
		},
	},
	created() {
		this.getList();
	},
};
</script>
<style scoped>
table {
	font-family: Arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
</style>
