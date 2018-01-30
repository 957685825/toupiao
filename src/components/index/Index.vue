<template>
	<div id="index">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000">
			  <mt-swipe-item v-for='itmes in imgUrl'>
			  	<a class="a_herf">		  		
			  		<img :src="Host+itmes"/>
			  	</a>
			  </mt-swipe-item>
			  
			</mt-swipe>
		</div>
		<div class="indexContent"  style="margin-top:0.6rem">
			<div class="findInput" v-bind:hidden="true">
				<input type="text" placeholder="活动查询">
			</div>
			<div class="serch" v-bind:hidden="true">
				<div class="contents">2018<span>年</span>12<span>月</span></div>
				<button>搜索</button>
			</div>
			<div class="list">
				<div class="tabCheck"><p class="activite" v-tap="{methods:checkIndex,index:1}">推荐活动</p><p v-tap="{methods:checkIndex,index:2}">往期回顾</p></div>
				<div  class="listContent"  v-for='itme in dataList' :style="{backgroundImage: 'url('+Host+itme.bannerUrl+')'}">
					<div class="bottomBox">
						<img src="http://cogon.artup.net/cogwx/static/img/Watch.png"/>
						<p class="times">剩余{{itme.countDownMap.dd}}天{{itme.countDownMap.hh}}小时{{itme.countDownMap.mm}}分</p>	
					<router-link :to="{ path : 'ActivityContent',query:{id:itme.id,expire:itme.expire}}" ><p v-bind:hidden="checkBool" class="find">查看</p></router-link>		
					</div>
				</div>
			
			  <!--<div class="listContent">
					<div class="bottomBox">
						<img src="../../assets/image/Watch.png"/>
						<p class="times">剩余1天23小时29分</p>
						<p class="find">查看</p>
					</div>
				</div>-->
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
      dataList : [],
      Host:Api.HOST,
      imgUrl:[],
      checkBool:false
    }
  },
  methods:{
  	initData(){
  		this.dataList = []
  		var vm = this
  		Api.activieList.list({pageNo:1,pageSize:1000}).then(res=>{
			console.log(res.data)	
			if(res.statusText === 'OK'){
			   this.imgUrl = res.data.carousels
			   this.dataList = res.data.list
			   this.dataList[0].num +=1;
			   this.$forceUpdate();
			   
			}
		},err=>{
			console.log('网络错误')
		})
  	},
  	checkIndex(params){
  		$('.tabCheck p').removeClass('activite')
  		$('.tabCheck p:nth-child('+params.index+')').addClass('activite')
  		if(params.index === 2){
  			this.checkBool = true
  			Api.activieList.expire().then(res=>{
  				 this.dataList = res.data.list
  			})
  		}else{
  			this.checkBool = false
  			this.initData()
  		}
//		alert(params.index)
  	}
  },
  mounted(){
  	this.initData()
  	var vm = this
	setInterval(function(){
		vm.initData()
	},60000)

  }

}
</script>

<style>
	
</style>