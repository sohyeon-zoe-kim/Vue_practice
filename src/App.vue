<template>
	<nav>
		<router-link to="/">Main</router-link> |
		<router-link to="/databindingList">Databinding</router-link> |
		<router-link to="/compositionAPI">Compostion</router-link> |
		<router-link to="/plugins">Plugins</router-link>
	</nav>
	<router-view></router-view>
</template>

<style>
#app {
	font-family: "Pretendard";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
