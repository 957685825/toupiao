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