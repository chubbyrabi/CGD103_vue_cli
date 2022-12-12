<template>
	<!-- {{$route.params}} -->
		<div class="news clr-gray333 font fontSize48">
			<h1>This is an news page</h1>
		</div>
		<Bar/>
		<button class="btn-blue" v-on:click="counter += 1">點擊:counter = {{counter}}</button>
		<button class="btn-blue" @click="counter += 1">點擊:counter = {{counter}}</button>
		<button class="btn-gold" @click="btnEvent">點我</button>
		<button class="btn-success" @click="btnSay('說話了')">說話</button>
		<p>{{msg}}</p>
		<ul>
            <li v-for="item in items" :key="item.id">
                {{item.txt}}
            </li>
        </ul>

		<div class="news"
			:style="{
				backgroundColor: activeClr,
			}"
				>
			<img :src="require(`@/assets/logo.png`)">
			<button
				v-for="i in colors" :key="i"
				:style="{
					backgroundColor: i,
				}"
				:class="{active: activeClr === i}"
				@click="changeClr(i)"
			>{{i}}</button>
		</div>

<!-- 
		<Space wrap>
        <Circle :percent="80">
            <span class="demo-Circle-inner" style="font-size:24px">80%</span>
        </Circle>
        <Circle :percent="100" stroke-color="#5cb85c">
            <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
        </Circle>
        <Circle :percent="35" stroke-color="#ff5500">
            <span class="demo-Circle-inner">
                <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
            </span>
        </Circle>
    </Space> -->



</template>
<script>
// import {colors} from '@/assets/js/setting'
// import Bar from '@/components/Bar.vue'
// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'

export default {
	name: 'NewsView',
	components: {
		// Bar,
		// Header,
		// Footer
	},
	data(){
		return{
			counter:1,
			msg: '按鈕事件',
			items:[
				{
					id:101,
					txt: 'item1'
				},
				{
					id:102,
					txt: 'item2'
				},
				{
					id:103,
					txt: 'item3'
				},
			],
			colors: ['#000','#111','#222','#333','#444','#555','#666','#777','#888','#9992t'],
			// colors: colors,
			activeClr:'',
			activeData: {},
			columns:[
				{

				}
			],
			data: [],
			info:{}
		}
    },
	methods:{
		btnEvent(event){
			this.msg= '按鈕被點擊了',
			event.target.innerHTML = '點過了',
			console.log(event);
		},
		btnSay(data){
			console.log(data);
		},
		changeClr(color){
			console.log(color);
			this.activeClr = color;
		},
		info(){
			this.activeData = {id:111}
		},
		getProduct(){
			
			fetch('https://fakestoreapi.com/products')
			.then(res=>res.json())
			.then(json=>{ this.info = json })


			// fetch('https://fakestoreapi.com/products')
			// .then(res=>res.json())
			// .then(json=>console.log(json))

			// this.load = true
            //         fetch('https://fakestoreapi.com/products')
            //         .then(res=>res.json())
            //         .then(json=>{
            //             this.source = json
            //             // this.product = json
            //             //初始化商品數量
            //             for ( item in this.product) {
            //                 this.count.push(0)
            //             }
            //             this.load = false
            //         })
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
<style scoped lang="scss">
.news{
	text-align: center;
	padding: 4rem;
	background: #ddd;
	img{
		width: 100px;
	}
	button{
		&.active{
			border: 2px solid #fa0;
		}
	}
}
</style>