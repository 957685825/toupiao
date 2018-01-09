import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios
// 常量 API 接口地址
const HOST = HOST_CONFIG;

//图片服务器（静态资源）服务器地址
const STATIC_SERVER_HOST = HOST_STATIC_SERVER_HOST;


const VueHttp = new Vue();






////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
export default {		
    testBaidu:{
  		test:(inter)=>{
  			return  VueHttp.$http.get(HOST+inter)   
  		}
   },
   getUserInfo:{
   	 getUserInfo:(jsons)=>{
   	 	return VueHttp.$http.get(GET_USER_INFO,{params:jsons})
   	 }
   },
   giftCard:{
   	  giftCardList:(jsons)=>{
   	  	return VueHttp.$http.get(GIFT_CARD_LIST,{params:jsons})
   	  },
   	  giftCardChange:(jsons)=>{
   	  	return VueHttp.$http.get(GIFT_CARD_CHANGE,{params:jsons})
   	  }
   },
   car:{//购物车
   	cloneOrder:(jsons)=>{//克隆订单
   		return VueHttp.$http.post(CLONE_ORDER,
   	 			qs.stringify(jsons)   	 				   	 		
   	 )
   	}
   },
   ajax(url,callback){
   	 console.log(arguments.length)
   	 if (arguments.length>2) {
   	 	console.log('直接调用那个对象')
   	 }
   	 if(url){
   	 	console.log('loading...');
   	 	callback(this.testBaidu)
   	 }	   	 
   	 if (callback) {
   	 	callback('123')
   	 }	   	  
   },
   $$ajax(inter,data,callback){	  			
			if(data && url !=''){
				console.log('post请求')
			}else{
				console.log('loading..................')
				VueHttp.$http.get(HOST+inter).then((res)=>{
					callback(res)
					//console.log(res)
				})
			}
  	}

}
  	


