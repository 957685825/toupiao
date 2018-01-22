<template>
	<div id="rankingView">
		<div class="rank-top"></div>
		<div class="rank-list">
			<ul>
				<li>
					<ol class="clearfix">
						<li>名次</li>
						<li>视频</li>
						<li>姓名</li>
						<li>票数</li>
					</ol>
				</li>
				<li v-for='itmes in dataList'>
					<ol class="clearfix">
						<li><p class="rank-bg ">{{itmes.ranking}}</p></li>
						<li>妇科内分泌相关病例分享{{itmes.institution}}</li>
						<li>{{itmes.name}}</li>
						<li class="red">{{itmes.totalVote}}</li>
					</ol>
				</li>
				<!-- <li>
					<ol class="clearfix">
						<li><p class="rank-bg">2</p></li>
						<li>妇科内分泌相关病例分享</li>
						<li>李艳</li>
						<li class="red">23025</li>
					</ol>
				</li>
				<li>
					<ol class="clearfix">
						<li><p class="rank-bg">3</p></li>
						<li>妇科内分泌相关病例分享</li>
						<li>李艳</li>
						<li class="red">23025</li>
					</ol>
				</li>
				<li>
					<ol class="clearfix">
						<li><p>4</p></li>
						<li>妇科内分泌相关病例分享</li>
						<li>李艳</li>
						<li class="red">23025</li>
					</ol>
				</li>
				<li>
					<ol class="clearfix">
						<li><p>5</p></li>
						<li>妇科内分泌相关病例分享</li>
						<li>李艳</li>
						<li class="red">23025</li>
					</ol>
				</li> -->
			</ul>
		</div>
		<router-link to="/"><button class="return-index">返回首页</button></router-link>
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
      propBoole:false
    }
  },
  methods:{
	
  },
  mounted(){

	Api.activieList.sortVote({cid:this.$route.query.cid}).then(res=>{
		this.dataList = res.data.list
	     console.log(res)
	},err=>{

	})	
  }

}
</script>

<style>
</style>