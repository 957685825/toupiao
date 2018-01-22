<template>
	<div id="expert">
		<div class="videImageDetiles" v-if='dataList.bean.purl == ""' >
			<img src="../../assets/image/play.png" alt="">
		</div>
		<div class="videImageDetiles" v-else :style="{backgroundImage: 'url('+HOST+dataList.bean.purl+')'}" >
			<img src="../../assets/image/play.png" alt="">
		</div>
		<!-- <router-link to="VoteOk"> -->
		<div class="bttyi"  v-tap="{methods:onClickHandler}" >
			<img src="../../assets/image/bangtatouyip_03.png" alt="">
		</div>
		<!-- </router-link> -->
		<div class="zjjs">
		    <img v-if = 'dataList.bean.url === ""' src="../../assets/image/tx_03.png"alt="">
			<img v-else :src="HOST+dataList.bean.url "alt="">
			<!-- <img src="../../assets/image/tx_03.png" alt=""> -->
			<h2>简介:</h2>
			&nbsp;&nbsp;&nbsp;&nbsp;<p v-html='dataList.bean.remarks'></p>
		</div>
		 <router-link to="/">
			<div class="fhsy">
			 <img src="../../assets/image/home.png" alt="">
				返回首页
			</div>
		</router-link>
		<!--弹窗-->
		<div v-show='propBoole'>
			<div class="pop-bg"></div>
			<div class="pop-content">
				<p class="pop-already-word"></p>
				<p class="pop-already"></p>
				<p class="pop-thanks">谢谢参与</p>
			</div>
		</div>
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      indexImg:[],
      dataList:[],
      HOST:Api.HOST,
      propBoole:false,
      tittles:'',
      orderNum:0
    }
  },
  methods:{
	onClickHandler(){
		var vm = this
		Api.details.checkVote({uid:this.$route.query.uid,cid:this.$route.query.cid}).then(res=>{
			 console.log(res)
			 console.log(res.data.bean)
			if(res.data.msg === ''){
				this.$router.push( { path : '/VoteOk', query : { 'cid' : this.$route.query.cid ,'contents':this.tittles,'orderNum':this.orderNum}})
			}else if(res.data.msg === "请勿重复投票"){
				vm.propBoole  = true
				setTimeout(function(){
					vm.propBoole  = false		
				},1000)
			}
		},err=>{

		})	
	}	
  },
  mounted(){

	Api.details.peopleDetails({uid:this.$route.query.uid,cid:this.$route.query.cid}).then(res=>{
		this.dataList = res.data
		this.tittles = res.data.bean.title
		this.orderNum = res.data.bean.orderNum
	     console.log(res)
	},err=>{

	})	
  }

}
</script>

<style>
	
</style>