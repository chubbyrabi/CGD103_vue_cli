<template>
	<Header/>
		<div class="main"><router-view/></div>
	<Footer/>
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
@import "./assets/css/common.css"; //待改寫
@import "./assets/sass/style.scss";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	// color: #2c3e50;
}
.main{
	max-width: 1200px;
	margin: auto;
}
</style>
