<template>
	<div id="expert">
		<!--<div class="videImageDetiles" v-if='dataList.bean.purl == ""' >
			<img src="http://cogon.artup.net/cogwx/static/img/play.png" alt="">
		</div>-->
		<div class="videImageDetiles" v-if="dataList.videos.length > 0">
			<img src="http://cogon.artup.net/cogwx/static/img/play.png"/>
			<video v-tap="{methods:videoPlay,url:videos.videoUrl}" :poster="videos.thumbPic == '' ? 'http://cogon.artup.net/cogwx/static/img/spbjt_03.png' : HOST+dataList.videos[0].thumbPic">
				<source :src="HOST+videos.videoUrl" type="video/mp4"></source>
			</video>
		</div>
		<!-- <router-link to="VoteOk"> -->
		<div class="bttyi"  v-tap="{methods:onClickHandler}" >
			<img src="http://cogon.artup.net/cogwx/static/img/bangtatouyip_03.png" alt="">
		</div>
		<!-- </router-link> -->
		<div class="zjjs">
		    <img v-if = 'dataList.bean.url === ""' src="http://cogon.artup.net/cogwx/static/img/tx_03.png"alt="">
			<img v-else :src="HOST_IMG+dataList.bean.url+'?200x200' "alt="">
			<!-- <img src="../../assets/image/tx_03.png" alt=""> -->
			<!--<h2>简介:</h2>-->
			&nbsp;&nbsp;&nbsp;&nbsp;<p v-html='dataList.bean.remarks'></p>
		</div>
		 <router-link to="/">
			<div class="fhsy">
			 <img src="http://cogon.artup.net/cogwx/static/img/home.png" alt="">
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
      HOST_IMG:Api.HOST_IMG,
      propBoole:false,
      tittles:'',
      orderNum:0,
      videos:''
    }
  },
  methods:{
	onClickHandler(){
		var vm = this
		Api.details.checkVote({uid:this.$route.query.uid,cid:this.$route.query.cid}).then(res=>{
			 console.log(res)
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
	},
	videoPlay(params){
  	 if(params.url){
	        location.href = this.HOST + params.url
		}else{
	        alert('没有相关内容')
	    }
  	}	
  },
  mounted(){
	Api.details.peopleDetails({uid:this.$route.query.uid,cid:this.$route.query.cid}).then(res=>{
		this.dataList = res.data
		this.tittles = res.data.bean.title
		this.orderNum = res.data.bean.orderNum
		this.videos = res.data.videos[0]
	    console.log(res)
	},err=>{

	})	
	var b=document.location.href;
	var d=document.location.href;
	var ajaxUrl = 'http://cogon.artup.net/cogon-wxmeet/cogsharewx/getCandInfo'
	if(b.indexOf("?") != -1){
		b = b.split("?")[0];
	}
	//var c = a+b;
	getInfoByUrl(d,b,ajaxUrl);
 }
}
</script>

<style>
	
</style>

