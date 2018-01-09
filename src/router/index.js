import Vue from 'vue'

//引入路由
import vueRouter from "vue-router"
//首页
import Index from '@/components/index/Index.vue'



//注入路由
Vue.use(vueRouter)


let router =  new vueRouter({	
	// mode:'history',
	routes: [
		
	    { //首页
	      path: '/',
	      name: 'Index',
	      component: Index,
	      meta:{
	 			title:"首页"
	 	  }
	    }
	    
	  ]
})
 
// router.beforeEach((to, from, next) => {  
// 	next();
// 	(function(i, s, o, g, r, a, m) {
// 	i['GoogleAnalyticsObject'] = r;
// 	i[r] = i[r] || function() {
// 		(i[r].q = i[r].q || []).push(arguments)
// 	}, i[r].l = 1 * new Date();
// 	a = s.createElement(o),
// 		m = s.getElementsByTagName(o)[0];
// 	a.async = 1;
// 	a.src = g;
// 	m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

//   ga('create', 'UA-105311960-1', 'auto');
//   ga('send', 'pageview');
// }); 

//暴露出路由对象
export default  router
