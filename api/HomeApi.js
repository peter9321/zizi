import Request from '../request/Request.js'
import GLOBAL from '../utils/global.js'

class HomeApi extends Request {
	//登录   事例接口 请删除
    login_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/user/login`,params)
	}
	//注册
	register_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/user/register`,params)
	}
	//获取用户信息
	getUserMes_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/user/queryUserAll`,params)
	}
	//退出登录
	loginOut_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/user/logout`,params)
	}
	//首页商品信息
	getIndexData_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/home/queryPlatform`,params)
	}
	//获取用户订单
	getUserBook_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/order/queryOrderByUserId`,params)
	}
	//首页获取佣金列表
	getMoneyList_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/home/queryCommission`,params)
	}
	//进入任务平台
	goTask_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/task/getInPlatform`,params)
	}
	//用户获取任务
	userGetTask_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/task/getTask`,params)
	}
	//用户做任务
	userDoingTask_Api(params){
		return  super.ajax(`${GLOBAL.baseUrl}/task/app/task/initTask`,params)
	}
	//任务页面收益数据
	getTaskCommission_Api(params){
		return super.ajax(`${GLOBAL.baseUrl}/task/app/task/getTaskCommission`,params)
	}
	//用户资金流水
	getQueryfunds_Api(params){
		return super.ajax(`${GLOBAL.baseUrl}/task/app/funds/queryfunds`,params)
	}
	//选择任务平台
	selectTaskPlatform_Api(params){
		return super.ajax(`${GLOBAL.baseUrl}/task/app/funds/queryfunds`,params)
	}
}

export default new HomeApi();
