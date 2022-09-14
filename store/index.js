import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
	userInfo: {},
	isLogin: false,
	token:''
}
const mutations = {
	setUserInfo(state,obj){
		state.userInfo = obj;
	},
	setToken(state,str){
		state.token = str;
	},
	setIsLogin(state,isLogin){
		state.isLogin = isLogin;
	},

}

export default new Vuex.Store({
	state,
	mutations,
})
