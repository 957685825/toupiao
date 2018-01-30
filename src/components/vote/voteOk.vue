<template>
	<div id="voteOk">
		<div class="okTittle">
			<img src="http://cogon.artup.net/cogwx/static/img/tpcgtittle_03.png" alt="">
		</div>
		<div class="tpcgContent">
			<img src="http://cogon.artup.net/cogwx/static/img/ystx_03.png" alt="">
			<div class="contentText">{{contents}}</div>
			<div class="tpnumber">{{orderNum}}</div>
		</div>
		<div class="phbcx" v-tap="{methods:rankingList}">
			查看排行
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
      contents:'',
      orderNum:0
    }
  },
  methods:{
	rankingList(){
		this.$router.push({ path : '/RankingViewList', query : { 'cid' : this.$route.query.cid}})	
	}	
  },
  mounted(){
	this.contents = this.$route.query.contents
	this.orderNum = this.$route.query.orderNum
   }

}
</script>

<style>
	
</style>