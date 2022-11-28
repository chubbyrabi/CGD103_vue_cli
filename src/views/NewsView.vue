<template>
		<div class="news clr-gray333 font fontSize48">
			<h1>This is an news page</h1>
		</div>
		<!-- <Bar/> -->
		<!-- <button class="btn-blue" v-on:click="counter += 1">點擊:counter = {{counter}}</button> -->
		<button class="btn-blue" @click="counter += 1">點擊:counter = {{counter}}</button>
		<button class="btn-gold" @click="btnEvent">點我</button>
		<button class="btn-success" @click="btnSay('說話了')">說話</button>
		<p>{{msg}}</p>
		<ul>
            <li v-for="item in items" :key="item.id">
                {{item.txt}}
            </li>
        </ul>


		<!-- <Space wrap>
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
			]
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
		}
	}
}
</script>