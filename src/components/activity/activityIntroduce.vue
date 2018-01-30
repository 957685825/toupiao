<template>
	<div id="activityDeitals">
		<div class="activity-top"></div>
		<div class="activity-content" v-html="contents">
			<!--<h3><label for="">主办单位:</label>中国青年报社  封面传媒</h3>
			<h3><label for="">承办单位:</label>医学科学报社  人民健康网</h3>
			<h3><label for="">支持媒体:</label>医学科学报社  人民健康网</h3>
			<h2>一、活动规则</h2>
			<p>由中国科学报社牵头，人民网、中国青年报社、中国科学报社共同主办了“首都十大杰出青年医生评选活动”，即以此为背景发起，至今已连续举办三届。通过该评选，发掘出了一批富有创新精神的青年医生，并引导全社会关注、关心这些怀揣梦想、有志于医学事业的青年医生，传播医者正能量，为他们的成长、成才提供帮助和平台</p>
			<h2>二、奖项设置</h2>
			<p>四川十大杰出青年医生（团队）</p>
			<p>四川十佳基层杰出青年医生（团队）</p>
			<p>四川学科影响力品牌医</p>
			<h2>三、评选条件</h2>
			<p>由中国科学报社牵头，人民网、中国青年报社、中国科学报社共同主办了“首都十大杰出青年医生评选活动”，即以此为背景发起，至今已连续举办三届。通过该评选，发掘出了一批富有创新精神的青年医生，并引导全社会关注、关心这些怀揣梦想、有志于医学事业的青年医生，传播医者正能量，为他们的成长、成才提供帮助和平台</p>
			<h2>四、评选结果</h2>
			<p>由中国科学报社牵头，人民网、中国青年报社、中国科学报社共同主办了“首都十大杰出青年医生评选活动”，即以此为背景发起，至今已连续举办三届。通过该评选，发掘出了一批富有创新精神的青年医生，并引导全社会关注、关心这些怀揣梦想、有志于医学事业的青年医生，传播医者正能量，为他们的成长、成才提供帮助和平台</p>-->
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
      propBoole:false,
      contents:''
    }
  },
  methods:{
	
  },
  mounted(){

	Api.details.wxCampaign({cid:this.$route.query.cid}).then(res=>{
		this.dataList = res.data
		this.contents = res.data.bean.remarks
		$('p').find('br').remove();
	    console.log(res)
	},err=>{

	})	
  }

}
</script>

<style>
</style>