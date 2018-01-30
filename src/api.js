import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios
// 常量 API 接口地址
const HOST = HOST_CONFIG;
const HOST_IMG = HOST_CONFIG_IMG

//图片服务器（静态资源）服务器地址
const STATIC_SERVER_HOST = HOST_STATIC_SERVER_HOST;

//首页、活动列表
const ACTIVIE_LIST = `${STATIC_SERVER_HOST}cogon-wxmeet/wxcampaign/home`
//初始化活动
const ACTIVIE_INIT = `${STATIC_SERVER_HOST}cogon-wxmeet/wxvote/initvotes`
//活动详情
const ACTIVIE_CONTENT = `${STATIC_SERVER_HOST}cogon-wxmeet/wxcampaign/details`

//候选人详情
const DETAILS_PEOPLE =  `${STATIC_SERVER_HOST}cogon-wxmeet/wxvote/details`
//投票
const CHECK_VOTE = `${STATIC_SERVER_HOST}cogon-wxmeet/wxvote/checkVote`

//投票排行
const SORT_VOTE = `${STATIC_SERVER_HOST}cogon-wxmeet/wxvote/sortVote`
//活动详情
const WX_CAMPAIGN = `${STATIC_SERVER_HOST}cogon-wxmeet/wxcampaign/details`
//往期回顾
const EXPIRE= `${STATIC_SERVER_HOST}cogon-wxmeet/wxcampaign/expire`

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
   activieList:{
      list:(jsons)=>{
        return VueHttp.$http.get(ACTIVIE_LIST,{params:jsons})
      },
      contents:(jsons)=>{
        return VueHttp.$http.get(ACTIVIE_CONTENT,{params:jsons})
      },
      initActivie:(jsons)=>{
      	return VueHttp.$http.get(ACTIVIE_INIT,{params:jsons})
      },
      sortVote:(jsons)=>{
        return VueHttp.$http.get(SORT_VOTE,{params:jsons})
      },
      expire:(jsons)=>{
      	return VueHttp.$http.get(EXPIRE,{params:jsons})
      }

   },
   details:{
       peopleDetails:(jsons)=>{
        return VueHttp.$http.get(DETAILS_PEOPLE,{params:jsons})
      },
      checkVote:(jsons)=>{
        return VueHttp.$http.get(CHECK_VOTE,{params:jsons})
      },
      wxCampaign:(jsons)=>{
        return VueHttp.$http.get(WX_CAMPAIGN,{params:jsons})
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
   HOST:HOST,
   HOST_IMG:HOST_IMG,
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
  	


