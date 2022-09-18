const dev_url = "http://52.76.81.121:8000"
//#ifdef APP-PLUS
export const BASE_URL = dev_url
//#endif
//#ifdef H5
export const BASE_URL = process.env.NODE_ENV === "development" ? dev_url : ''
//#endif
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+'/api/v1'+options.url,
			method: options.method || 'POST',
			data: options.data || {},
			header: {
			        // 'lang-header': uni.getStorageSync('lang') //自定义请求头信息
			    },
			success: (res)=>{
				// if(res.data.code !== 0) {
				// 	return uni.showToast({
				// 		title: '获取数据失败'
				// 	})
				// }
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败',
					icon:'none'
				})
				reject(err)
			}
		})
	})
}