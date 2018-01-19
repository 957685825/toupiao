<template>
	<div id="actityContent">
		<div class="headerImage">
			
		</div>
		<div class="actityTimer">
			<img src="../../assets/image/tpdjs_03.png" alt="">
			<div class="timers">
				<span>08</span>天<span>23</span>小时<span>12</span>分<span>24</span>秒
			</div>
			<div class="btnImage">
				<div class="lefbtn btn">
					<img src="../../assets/image/hdjs_03.png" alt="">
				</div>
				<div class="rightbtn btn">
					<img src="../../assets/image/zphb_03.png" alt="">
					
				</div>
			</div>
		</div>
		<div class="findeInput">
			<div class="imageBox">
				<img src="../../assets/image/sphumd_03.png" alt="">
			</div>
			<div class="inputText">
				<input type="text" placeholder='请输入姓名或医院' >
			</div>
		</div>
		<div class="contentList">
			<div class="list">
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
			</div>
			<div class="list">
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
			</div>
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
      indexImg:[]
    }
  },
  methods:{
		
  },
  mounted(){
	Api.activieList.contents({cid:this.$route.query.id}).then(res=>{
		console.log(res)
	})
   }

}
</script>

<style>
	
</style>