<template>
	<div id="index">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000">
			  <mt-swipe-item>
			  	<a class="a_herf">		  		
			  		<img src="../../assets/image/banner_01.png"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a class="a_herf">		  		
			  		<img src="../../assets/image/banner_01.png"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a class="a_herf">		  		
			  		<img src="../../assets/image/banner_01.png"/>
			  	</a>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="indexContent">
			<div class="findInput">
				<input type="text" placeholder="活动查询">
			</div>
			<div class="serch">
				<div class="contents">2018<span>年</span>12<span>月</span></div>
				<button>搜索</button>
			</div>
			<div class="list">
				<div class="listContent"  v-for='itme in dataList' :style="{backgroundImage: 'url('+Host+itme.bannerUrl+')'}">
					<div class="bottomBox">
						<img src="../../assets/image/Watch.png"/>
						<p class="times">剩余1天23小时29分</p>	
					<router-link :to="{ path : 'ActivityContent',query:{id:itme.id}}" ><p class="find">查看</p></router-link>		
					</div>
				</div>
			  <!--  <div class="listContent">
					<div class="bottomBox">
						<img src="../../assets/image/Watch.png"/>
						<p class="times">剩余1天23小时29分</p>
						<p class="find">查看</p>
					</div>
				</div> -->
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
      Host:Api.HOST
    }
  },
  methods:{
		
  },
  mounted(){
		Api.activieList.list({pageNo:1,pageSize:1000}).then(res=>{
			console.log(res)	
			if(res.statusText === 'OK'){
			    this.dataList = res.data.list
			}
			return
		},err=>{
			console.log('网络错误')
		})
  }

}
</script>

<style>
	
</style>