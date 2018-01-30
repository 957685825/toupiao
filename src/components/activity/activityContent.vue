<template>
	<div id="actityContent">
		<div class="headerImage" :style="{backgroundImage: 'url('+HOST+dataList.bannerUrl+')'}">
			
		</div>
		<div class="actityTimer">
			<img src="http://cogon.artup.net/cogwx/static/img/tpdjs_03.png" alt="">
			<div class="timers">
				<span>{{dd}}</span>天<span>{{hh}}</span>小时<span>{{mm}}</span>分<span>{{ss}}</span>秒
			</div>
			<div class="btnImage">
				<router-link :to="{path : 'ActivityIntroduce',query:{cid:activityId}}">
					<div class="lefbtn btn">
						<img src="http://cogon.artup.net/cogwx/static/img/hdjs_03.png" alt="">
					</div>
				</router-link>
				<router-link :to="{path : 'RankingViewList',query:{cid:activityId}}">
					<div class="rightbtn btn">
						<img src="http://cogon.artup.net/cogwx/static/img/zphb_03.png" alt="">
					</div>
				</router-link>
			</div>
		</div>
		<div class="findeInput" style="height:2rem">
			<div class="imageBox">
				<img src="http://cogon.artup.net/cogwx/static/img/sphumd_03.png" alt="">
			</div>
			<div class="inputText" style="display:none">
				<input type="text" placeholder='请输入姓名或医院' >
			</div>
		</div>
		<div class="contentList">
			<div class="list" v-for="(itmes,index) in data.list">
				<div class="leftBox">
				<router-link  :to="{path : 'Expert',query:{uid:itmes.id,cid:activityId}}">
					<img v-if = 'itmes.url === ""' src="http://cogon.artup.net/cogwx/static/img/tx_03.png"alt="">
					<img v-else :src="HOST_IMG+itmes.url+'?180x160' "alt="">
				</router-link>	
					<p>{{itmes.name}}</p>
					<div class="zan">
						<img src="http://cogon.artup.net/cogwx/static/img/zan_15.png" alt="">
						<p v-tap="{methods:onClickHandler,uid:itmes.id}">投票</p>
					</div>
					<div class="borderSolid">						
					</div>
					<div class="IndexBq">{{index+1}}</div>
				</div>
				<div class="rightBox">
					<!--<div class="videImage" v-if='itmes.purl== ""'>
						
					</div>
					<div class="videImage" v-else :style="{backgroundImage: 'url('+HOST+itmes.purl+')'}">
						
					</div>-->
					<div class="videImage">
						<img style="pointer-events: none;" src="http://cogon.artup.net/cogwx/static/img/play.png"/>
						<video v-tap="{methods:videoPlay,url:itmes.vurl}" :poster="itmes.purl == '' ? 'http://cogon.artup.net/cogwx/static/img/videbg_09.png' : HOST+itmes.purl" >					
							<source v-if="itmes.vurl != ''" :src="HOST+itmes.vurl" type="video/mp4"></source>
						</video>	
					</div>
					
					<div class="className">
						{{itmes.title}}
					</div>
					<div class="tpNumber">
						{{itmes.totalVote}}票
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
				<!--<p>1、候选人展示期间，网友在封面新闻APP、“医问医答”公众号、“掌握健康”与“药师论坛”公众号投票。</p>
				<p>2、每人每天最多可在封面新闻APP投10票；每人可在三个公众号上分别对三个类别进行投票，每人可投十票。 </p>
				<p>3、投票时间为11月5日10:00-11月13日20:00，“医问医答”、“掌握健康”与“药师论坛”公众号将每天切换投票项目。</p>-->
				<p>{{dataList.rules}}</p>
			</div>
		</div>
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
      dataList:'',
      HOST:Api.HOST,
      HOST_IMG:Api.HOST_IMG,
      data:[],
      activityId:'',
      dd:0,
      hh:0,
      mm:0,
      ss:0,
      uid:'',
      propBoole:false
    }
  },
  methods:{
  	initData(){
		Api.activieList.initActivie({cid:this.$route.query.id,expire:this.$route.query.expire}).then(res=>{
		if(res.statusText === 'OK'){
			this.dataList = res.data.campaign
			this.data = res.data
			this.activityId = res.data.campaign.id
			this.dd = res.data.countdown.dd
			this.hh = res.data.countdown.hh
			this.mm = res.data.countdown.mm
			this.ss= res.data.countdown.ss
			this.cid = res.data.campaign.id

		}
		console.log(this.data)
	})
  	},
  	videoPlay(params){
  	 if(params.url){
	        location.href = this.HOST + params.url
		}else{
	        alert('没有相关内容')
	
	    }
  	},
  	onClickHandler(params){
  		var uid = params.uid
		var vm = this
		Api.details.checkVote({cid:this.cid,uid:uid}).then(res=>{
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
  	this.initData()
  	var vm = this
  	var time = setInterval(jishi,1000)
	
  	function jishi(){
		//vm.initData()
		vm.$forceUpdate()
		if(vm.ss > 0){
			vm.ss--	
		}
		else if(vm.ss == 0){
			vm.mm--
			vm.ss = 59
		}
		 if(vm.mm <= 0){
			vm.hh--
			vm.mm = 59
		} if(vm.hh == 0 && vm.data.countdown.dd > 0){
			vm.dd--
			vm.hh = 24
		}
		if(vm.dd == 0 && vm.mm ==0 && vm.ss == 0 && vm.hh == 0){
		    clearInterval(time)
			return
		}
	}
//	分享
  	var b=document.location.href;
	var d=document.location.href;
	
	if(b.indexOf("?") != -1){
		b = b.split("?")[0];
	}
	//var c = a+b;
	getInfoByUrl(d,b);
   }
}
</script>

<style>
	
</style>