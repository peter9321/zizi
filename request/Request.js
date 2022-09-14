
import store from '../store/index.js'
import GLOBAL from '../utils/global.js'
//请求拦截,相应拦截处理
import md5 from "@/common/md5.js"
class Request {
	constructor(arg) {
		// 调试模式开关
		this.debug = false;
	}
	/**
	 * LOG日志
	 */
	log(api, data, res) {
		if (this.debug) {
			// console.log('===LOG Begin=====================================================================');
			// console.log('请求接口: ' + this.api(api));
			// console.log('请求参数: ' + JSON.stringify(data));
			// console.log('返回数据: ' + JSON.stringify(res));
			// console.log('===LOG End=====================================================================');
		}
	}

	/**
	 * 项目环境
	 * @dev 开发环境
	 * @prod 生产环境
	 */
	server() {
		const dev = {
			BASE_URL: GLOBAL.baseUrl,
		}

		const prod = {
			BASE_URL: GLOBAL.baseUrl,
		}

		return this.debug ? dev : prod;
	}

	/**
	 * 处理api
	 */
	api(api) {
		if (!api) {
			console.error('api接口不存在');
			return false;
		}
		return this.server().BASE_URL + api;
	}

	/**
	 * 处理headers
	 */
	headers() {
		const headers = {};
		const token = uni.getStorageSync('token');
		if (token) {
			headers['token'] = token;
		}
		//headers['Content-Type'] = 'application/json';
		//headers['Content-type'] = 'application/x-www-form-urlencoded;charset=utf-8'
		return headers;
	}

	/**
	 * 请求异常状态处理
	 */
	status_handle(code, from, msg) {
		let info = '';
		switch (code) {
			case 500:
				info = 'Server exception';
				break;
			case 404:
				info = '资源或者接口不存在， 请求失败'
				break;
			case -1: //业务异常状态
				info = msg;
				console.error(from + '___' + msg);
				break;
		}
		uni.showToast({
			title: info,
			icon: 'none',
			duration: 2000
		});
	}
	//数据验签
	parameterSetting(data){
		let str = '',
		randomNumber = '';
		str = this.ksort(data) //参数字典排序并转字符串拼接
		randomNumber = parseInt(Math.random() * (str.length + 1), 10)
		
		str = str.substr(str.length / randomNumber)
		data.sign = md5.hex_md5(str) + randomNumber
	
		return data.sign
	}
	//数据验签
	ksort(dic) {
		let sdic = Object.keys(dic).sort(),
			str = '';
			
		for (var ki in sdic) {
			
			// console.log(sdic[ki] + ":" + dic[sdic[ki]] + ",");
			str += sdic[ki] + ":" + dic[sdic[ki]]
		}
		return '{'+str+'}'
	}

	/**
	 * ajax请求，默认POST请求方式
	 */
	
	async ajax(
		api,
		data = {},
		method = 'POST',
		
	) {
		if (!api) return;
		// uni.showLoading({
		// 	title: 'Loading'
		// });
		const token = uni.getStorageSync('token');
		if (token) {
			data['token'] = token;
		}
		data.sign = this.parameterSetting(data)
		const options = {};
		options.url = api;
		options.data = data;
		options.method = method;
		options.header = this.headers();
		let [error, res] = await uni.request(options);
		//uni.hideLoading();
		if (res) {
			this.log(api, data, res);
			if (res.statusCode == 200) {
				
				return res.data;
				
				
			} else {
				// 处理异常状态
				this.status_handle(res.statusCode);
			}
		} else if (error) {
			this.log(api, data, error)
		}
	}
}

export default Request;
