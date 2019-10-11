import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Registe from '../pages/login/registe.vue'
import Forget from '../pages/login/forget.vue'
import Home from '../pages/home/home.vue'
import Shouye from '../pages/home/children/shouye.vue'
import Kecheng from '../pages/home/children/kecheng.vue'
import Zhaoping from '../pages/home/children/zhaoping.vue'
import Zhaopinghui from '../pages/home/children/zhaopinghui.vue'
import Weipei from '../pages/home/children/weipei.vue'
import Xiaoxi from '../pages/home/children/xiaoxi.vue'
import Selfhome from '../pages/selfhome/home.vue'
import Selfinfo from '../pages/selfhome/children/selfinfo.vue'
import Selfke from '../pages/selfhome/children/selfke.vue'
import Selfzhao from '../pages/selfhome/children/selfzhao.vue'
import Selfhui from '../pages/selfhome/children/selfhui.vue'
import Selfpei from '../pages/selfhome/children/selfpei.vue'
import Selfmessage from '../pages/selfhome/children/selfmessage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
		{
			path: '/forget',
			component: Forget
		},	
		{
			path: '/registe',
			component: Registe
		},
		{
			path: '/',
			component: Home,
			children: [ {
            path: '',
            redirect: '/shouye'
        },{
				path: 'shouye',
				component: Shouye,
			}, 
			{
				path: 'kecheng', 
				component: Kecheng,
			},
			{
				path: 'zhaopinghui', 
				component: Zhaopinghui,
			},
			{
				path: 'zhaoping', 
				component: Zhaoping,
			},
			{
				path: 'weipei', 
				component: Weipei,
			},{
				path: 'xiaoxi', 
				component: Xiaoxi,
			},]
		},
		{
			path: '/home',
			component: Selfhome,
			children: [
			{
				path: 'selfinfo',
				component: Selfinfo,
			}, 
			{
				path: 'selfzhao', 
				component: Selfzhao,
			},
			{
				path: 'selfhui', 
				component: Selfhui,
			},
			{
				path: 'selfke', 
				component: Selfke,
			},
			{
				path: 'selfpei', 
				component: Selfpei,
			},{
				path: 'selfmessage', 
				component: Selfmessage,
			},]
		},
  ]
})
