<template>
	<div id="actityContent">
		<div class="headerImage" :style="{backgroundImage: 'url('+HOST+dataList.bannerUrl+')'}">
			
		</div>
		<div class="actityTimer">
			<img src="../../assets/image/tpdjs_03.png" alt="">
			<div class="timers">
				<span>{{data.countdown.dd}}</span>天<span>{{data.countdown.hh}}</span>小时<span>{{data.countdown.mm}}</span>分<span>{{data.countdown.ss}}</span>秒
			</div>
			<div class="btnImage">
				<router-link to='ActivityIntroduce'>
					<div class="lefbtn btn">
						<img src="../../assets/image/hdjs_03.png" alt="">
					</div>
				</router-link>
				<router-link to='RankingViewList'>
					<div class="rightbtn btn">
						<img src="../../assets/image/zphb_03.png" alt="">
					</div>
				</router-link>
			</div>
		</div>
		<div class="findeInput" style="height:2rem">
			<div class="imageBox">
				<img src="../../assets/image/sphumd_03.png" alt="">
			</div>
			<div class="inputText" style="display:none">
				<input type="text" placeholder='请输入姓名或医院' >
			</div>
		</div>
		<div class="contentList">
			<div class="list" v-for="itmes in data.list">
				<div class="leftBox">
				<router-link  :to="{ path : 'Expert',query:{uid:itmes.id,cid:activityId}}">
					<img v-if = 'itmes.url === ""' src="../../assets/image/tx_03.png"alt="">
					<img v-else :src="HOST+itmes.url "alt="">
				</router-link>	
					<p>{{itmes.name}}</p>
					<div class="zan">
						<img src="../../assets/image/zan_15.png" alt="">
						<p>投票</p>
					</div>
					<div class="borderSolid">						
					</div>
					<div class="IndexBq">1</div>
				</div>
				<div class="rightBox">
					<div class="videImage" v-if='itmes.purl== ""'>
						
					</div>
					<div class="videImage" v-else :style="{backgroundImage: 'url('+HOST+itmes.purl+')'}">
						
					</div>
					<div class="className">
						{{itmes.title}}
					</div>
					<div class="tpNumber">
						{{itmes.orderNum}}票
					</div>
				</div>
			</div>
			<!-- <div class="list">
				<div class="leftBox">
					<router-link to="Expert">
						<img src="../../assets/image/tx_03.png" alt="">
					</router-link>	
					<p>姓名</p>
					<div class="zan">
						<img src="../../assets/image/zan_15.png" alt="">
						<p>投票</p>
					</div>
					<div class="borderSolid">						
					</div>
					<div class="IndexBq">1</div>
				</div>
				<div class="rightBox">
					<div class="videImage">
						
					</div>
					<div class="className">
						妇科内分泌相关病例分享
					</div>
					<div class="tpNumber">
						4222票
					</div>
				</div>
			</div> -->
		</div>
		<div class="bottomBox">
			<h2>评选规则</h2>
			<div class="wz">
				<p>1、候选人展示期间，网友在封面新闻APP、“医问医答”公众号、“掌握健康”与“药师论坛”公众号投票。</p>
				<p>2、每人每天最多可在封面新闻APP投10票；每人可在三个公众号上分别对三个类别进行投票，每人可投十票。 </p>
				<p>3、投票时间为11月5日10:00-11月13日20:00，“医问医答”、“掌握健康”与“药师论坛”公众号将每天切换投票项目。</p>
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
      dataList:'',
      HOST:Api.HOST,
      data:[],
      activityId:''
    }
  },
  methods:{
  	initData(){
		Api.activieList.initActivie({cid:this.$route.query.id}).then(res=>{
		if(res.statusText === 'OK'){
			this.dataList = res.data.campaign
			this.data = res.data
			this.activityId = res.data.campaign.id

		}
		console.log(this.data)
	})
  	}
		
  },
  mounted(){
  	this.initData()
  	var vm = this
  	var time = setInterval(jishi,1000)

  	function jishi(){
		//vm.initData()
		if(vm.data.countdown.ss > 0){
			vm.data.countdown.ss--	
		}
		else if(vm.data.countdown.ss == 0){
			vm.data.countdown.mm--
			vm.data.countdown.ss = 59
		}
		 if(vm.data.countdown.mm <= 0){
			vm.data.countdown.hh--
			vm.data.countdown.mm = 59
		} if(vm.data.countdown.hh == 0 && vm.data.countdown.dd > 0){
			vm.data.countdown.dd--
			vm.data.countdown.hh = 24
		}
		if(vm.data.countdown.dd == 0){
		    clearInterval(time)
			return
		 //vm.$forceUpdate()
		}
	}
   }
}
</script>

<style>
	
</style>