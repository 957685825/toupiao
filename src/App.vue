<template>
  <div id="app">
     <!---->
	 <transition name="fade"  mode="out-in">
			<router-view></router-view>
	 </transition>
	 
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="less">
@import './assets/less/style.less';
h1, h2 {
  font-weight: normal;
}
*{margin: 0;padding: 0;}
li{list-style: none;}
a {text-decoration: none;}
#app {
	 /*font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;*/
	 font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif			
}	
/*切换路由的动画*/
.fade-enter-active,
.fade-leave-active {
	transition: all .3s ease;
}

/*.fade-enter,*/
.fade-leave-active {
	opacity: 0;
	transform: translateX(100%);
}
.fade-enter{
	opacity: 0;
	transform: translateX(-100%);
}
.mint-header{
	background-color: #000000;
}

</style>
