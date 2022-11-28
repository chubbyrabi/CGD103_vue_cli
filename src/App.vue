<template>
	<Header/>
	<div class="shop clr-gray333 font fontSize48">
		<h1>This is an page</h1>
	</div>
	<Footer/>
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
@import "./assets/css/style.css";
@import "./assets/css/common.css";

@import "./assets/sass/base/font";
@import "./assets/sass/base/color";
@import "./assets/sass/components/btn";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	// color: #2c3e50;
}

// nav {
// 	padding: 30px;
// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;

// 		&.router-link-exact-active {
// 		//   color: #42b983;
// 			color: #CC8D1B;
// 		}
// 	}
// }
</style>
