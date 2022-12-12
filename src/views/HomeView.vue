<template>
	<button class="btn-blue">
		<router-link to="/test">測試頁</router-link>
	</button>	
</template>

<script>
// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'

export default {
	name: 'HomeView',
	components: {
		// Header,
		// Footer
	},
	showAll(){
        this.axios.get("/api_server/list.php")
        .then((res)=>{
			console.log(res)
		})
    }

}
</script>

<style lang="scss">
@import 'src/assets/sass/style.scss';
// @import 'src/assets/sass/base/_color.scss';
	p{
		color: $clr_gray_L1;
	}
</style>
