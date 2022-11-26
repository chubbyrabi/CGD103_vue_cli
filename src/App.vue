<template>
	<!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> -->
	<Header/>
	<div class="shop clr-gray333 font fontSize48">
		<h1>This is an page</h1>
	</div>
	<Footer msg="Welcome to Your Vue.js App"/>
	<router-view/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'HomeView',
	components: {
		Header,
		Footer
	}
}
</script>

<style lang="scss">

@import "./assets/css/reset.css";
@import "./assets/css/common.css";
@import "./assets/css/color.css";
@import "./assets/css/font.css";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
		//   color: #42b983;
			color: #CC8D1B;
		}
	}
}
</style>
