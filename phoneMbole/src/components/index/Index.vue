<template>
	<div id="index">
		<div class="gqfhtz">
			<mt-header title="">
				<router-link to="/" slot="left">
					<mt-button>关闭</mt-button>
				</router-link>
				<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div v-DomHeight class="btn_btn ">
		
			<ul class="btn_ul">
				<li>
					<router-link to="bbsMsg?category=xiaoshiguang">
						 <i style="font-size: 3.1875rem;" class="icon iconfont">&#xe625;</i>
				 		<p>小时光</p>
					</router-link>
				</li>
				<li>
					<router-link to="huaceMsg?category=shiguangji">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe7ca;</i>
						<p>拾光集</p>
					</router-link>
				</li>
				<li> 
					<router-link to="tlMsg?category=taili">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe686;</i>
						<p>台历</p>
					</router-link>
				</li>
				<li>
					<router-link to="khMsg?category=kuanghua">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe628;</i>
						<p>框画</p>
					</router-link>
				</li>
				<li> 
					<router-link to="hbMsg?category=haibao">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe609;</i>
						<p>海报</p>
					</router-link>
				</li>				
				<li> 
					<router-link to="user">
						<i style="font-size: 3.1875rem;" class="icon iconfont">&#xe64b;</i>
						<p>个人中心</p>
					</router-link>
				</li>
			</ul>
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
	
   }

}
</script>

<style>
	
</style>