<template>

	<div class="about clr-gray333 font fontSize48">
		<h1>This is an about page</h1>
	</div>
	
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
	methods:{
		getProduct(){
			fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

		},
		show(){

		},
	},
	created(){
		this.getProduct();
	},
	mounted(){},
}
</script>