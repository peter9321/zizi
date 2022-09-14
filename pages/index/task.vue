<template>
	<view class="task-page">
		<!-- 顶部系统信息 -->
		<view class="message">
			<text class="text"></text>
			<view class="message-btn" @click="jumpSysmessage()">
				<text class="iconfont icon-liaotian1"></text>
			</view>
		</view>
		<!-- 余额信息 -->
		<view class="my-balance">
			<view class="data-box">
				<view class="note">
					 <text>platform Name: {{platformName}}</text> 
					 <text class="Rate">Commission Rate: {{commissionRate}}%</text>
					 <text class="availableSum">User balance: {{availableSum}}</text>
				</view>
			</view>
			<view class="recharge" @click="jumpRecharge()">
				<text>RECHARGE</text>
			</view>
		</view>
		<!-- vip信息 -->
		<view class="card-box">
				<view class="content">
			        <LotteryDraw @get_winingIndex='get_winingIndex'  @luck_draw_finish='luck_draw_finish'></LotteryDraw>
			    </view>
				<u-popup v-model="popshow" mode="center" border-radius="14" width="720rpx" height="665rpx" closeable >
							<view class="order-popup">
								<view class="title">
									submit all orders
								</view>
								<view class="rush-order">
									createTime: {{taskDate.createTime}}
								</view>
								<view class="order-number">
									orderId: {{taskDate.orderId}}
								</view>
								<view class="detail">
									<view class="img">
										<image :src="taskDate.imageUrl" mode="aspectFit"></image>
									</view>
									<view class="description">
										<text class="bolder">{{taskDate.commodityName}}</text>
										<text>{{taskDate.commodityDirections}}fsfdsafdsafgfds</text>
									</view>
								</view>
								<view class="total">
									<text class="note">Total order</text>
									<text class="amount">{{taskDate.orderAmount}}</text>
								</view>
								<view class="commission">
									<text class="note">commission</text>
									<text class="amount">{{taskDate.commission}}</text>
								</view>
								<view class="buttons">
									<view  class="cancel-btn" @click="userDoingTask('2')" >CANCEL</view>
									<view  class="submit-btn" @click="userDoingTask('1')">SUBMIT ORDER</view>
								</view>
							</view>			
				</u-popup>
			<view class="total-data">
				<view class="top">
					<view class="title">
						<text style="font-weight: 700;">Platform total data</text>
					</view>
					<view class="rule">
						<text>Rule</text>
					</view>
				</view>
				<view class="data-box">
					<view class="order">
						<text>{{porders||0}}</text>
						<text class="note">Total Platform Order</text>
					</view>
					<view class="commission">
						<text>{{pcommission || 0}}</text>
						<text class="note">Total Platform commission</text>
					</view>
				</view>
			</view>
			<!-- Achievements Today -->
			<view class="today-data">
				<view class="top">
					<view class="title">
						Achievements Today
					</view>
					<view class="time">
						{{today}}
					</view>
				</view>
				<view class="data-box">
					<view class="data-ietm right-line">
						<text>{{uorders||0}}</text>
						<text class="note">Today's order</text>
					</view>
					<view class="data-ietm">
						<text>{{ucommission||0}}</text>
						<text class="note">Commission today</text>
					</view>
					<view class="data-ietm right-line">
						<text>{{yorders||0}}</text>
						<text class="note">Yestoday's order</text>
					</view>
					<view class="data-ietm">
						<text>{{ycommission||0}}</text>
						<text class="note">Commission yestoday</text>
					</view>
				</view>
			</view>
			<!-- <view class="star-btn">
				<text>START FETCHING</text>
			</view> -->
			<view class="select-btn">
				<text>PLATFORM SELECTION</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HomeApi from '../../api/HomeApi.js';
	import LotteryDraw from '../../components/LotteryDraw/components/SJ-LotteryDraw/SJ-LotteryDraw.vue';
	export default {
		components:{
			LotteryDraw
		},
		data() {
			return {
				popshow:false,
				platformId:'1',
				commissionRate:'',
				platformName:'',
				availableSum:'',
				userId:'',
				porders:'',
				pcommission:'',
				uorders:'',
				ucommission:'',
				yorders:'',
				ycommission:'',
				today:'',
				lottery_draw_param:{
						startIndex: 0, //开始抽奖位置，从0开始
						totalCount: 4, //一共要转的圈数
						winingIndex: 4, //中奖的位置，从0开始
						speed: 50 //抽奖动画的速度 [数字越大越慢,默认100]
				},
				taskDate:[]
			}
		},
		onLoad(option) {
			console.log('33333333')
			console.log(option)
			if(option.id){
				this.platformId = option.id
			}
			if(option.platformName){
				this.platformName = option.platformName
			}
			if(option.commissionRate){
				this.commissionRate = option.commissionRate
			}
			else{
				this.getPlatform();
				console.log()
			}
			console.log(this.platformId)
			console.log("this.platformId")
			this.getTast()
			const userInfo = uni.getStorageSync('userInfo');
			
			if(!userInfo){
				uni.navigateTo({
				    url: '/pages/loginPage/loginPage'
				});
				return
			}
			
			console.log(userInfo);
			let userObj=JSON.parse(userInfo)
			this.availableSum=userObj.availableSum;
			this.userId=userObj.userId;
			console.log(this.userId)
			this.getTaskCommission();
			this.getTime();
			this.getQueryfunds();
		},
		methods: {
			getQueryfunds(){
				let parmas={
					platformId:this.platformId,
					pageNum:1,
					pageSize:10,
					userId:this.userId
				}
				HomeApi.getQueryfunds_Api(parmas).then(res=>{
					console.log('747474');
					console.log(res)
				})
			},
			getTime(){
				let myDate = new Date();
				let year=myDate.getFullYear();
				let month=(myDate.getMonth()+1)>9?myDate.getMonth()+1:'0'+myDate.getMonth()+1
				let day=myDate.getDate()>9?myDate.getDate():'0'+myDate.getDate()
				let today=year+'-'+month+'-'+day;
				console.log('787878')
				console.log(today)
				this.today=today
			},
			getTaskCommission(){
				let parmas = {
					platformId:this.platformId,
					userId:this.userId
				}
				HomeApi.getTaskCommission_Api(parmas).then(res=>{
					console.log('777')
					this.porders=res.data.porders;
					this.pcommission=res.data.pcommission;
					this.uorders=res.data.uorders;
					this.ucommission=res.data.ucommission;
					this.yorders=res.data.yorders;
					this.ycommission=res.data.ycommission
					console.log('77777')
					
				})
			},
			getUserMes(){
				HomeApi.getUserMes_Api({}).then(res => {
					console.log(res)
					console.log("用户信息res")
					if(res.responseCode == '0000'){
						this.availableSum=res.data.availableSum
						let user = JSON.stringify(res.data)
						uni.setStorage({
						    key: 'userInfo',
						    data: user,
						    success: function () {
						        console.log('success');
						    }
						});
						this.$store.commit('setUserInfo',res.data)
					}
					
				})
			},
			// 获取任务平台
			getPlatform(){
				console.log(66)
				HomeApi.getIndexData_Api({}).then(res => {
					this.platformName=res.data[0].platformName;
					this.commissionRate=res.data[0].commissionRate;
					this.platformId=res.data[0].id;
				})
			},
			 // 修改获奖位置（可以在这里获取后台的数据
			get_winingIndex(callback){
				// this.lottery_draw_param.winingIndex=7;
				let num =Math.floor(Math.random()*(0-8)+8);
				console.log(num)
				this.lottery_draw_param.winingIndex=num;
				//props修改在小程序和APP端不成功，所以在这里使用回调函数传参，
				callback(this.lottery_draw_param);
			},
			// 抽奖完成
			luck_draw_finish(param){
				
				this.userGetTask();
				console.log(param)
				// console.log(`抽到第${param+1}个方格的奖品`)
			},
			userDoingTask(orderStatus){
				let parmas = {
					status:orderStatus,      //status = 1 表示 做任务 status = 2 表示取消任务
				    orderId:this.taskDate.orderId,
                }
				HomeApi.userDoingTask_Api(parmas).then(res => {
					console.log(res)
					console.log("用户做任务")
					if(res.responseCode == '0000'){
						if(orderStatus=='1'){
							uni.showToast({
							    title: 'Order Compledted',
							    duration: 2000,
								icon:'none'
							});
							this.getUserMes()
						}
						else{
							uni.showToast({
							    title: 'Cancel Success',
							    duration: 2000,
								icon:'none'
							});
						}
						this.popshow=false;
					}else{
						uni.showToast({
						    title: res.responseMsg,
						    duration: 2000,
							icon:'none'
						});
					}
					//err-2 订单已经结束；err-1; //余额不足；err0; //任务失败；err-3; //订单发起人和付款人不一致
					
				})
			},
			userGetTask(){
				let parmas = {
					platformId:this.platformId
				}
				HomeApi.userGetTask_Api(parmas).then(res => {
					console.log(res)
					console.log("用户获取任务")
					if(res.responseCode == '0000'){
						this.taskDate = res.data;
						this.taskDate.createTime = this.handleTime(this.taskDate.createTime);
						this.popshow=true;
						console.log(this.taskDate)
					}else{
						
						uni.showToast({
						    title: res.responseMsg,
						    duration: 2000,
							icon:'none'
						});
					}
					
				})
			},
			getTast(){
				let parmas = {
					platformId:this.platformId
				}
				HomeApi.goTask_Api(parmas).then(res => {
					console.log(res)
					console.log("jinru 任务平台")
				})
			},
			jumpRecharge() {
				console.log('跳转充值页面')
				uni.navigateTo({
					url:'../reCharge/reCharge'
				})
			},
			jumpSysmessage(){
				console.log('跳转系统信息页面')
				uni.navigateTo({
					url:'../sysMessage/sysMessage'
				})
			},
			handleTime(time){
				let tiemNumber=parseInt(time)
				let date = new Date(tiemNumber);
				let Y = date.getFullYear() + '-';
				let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
				let D = date.getDate() + ' ';
				let h = date.getHours() + ':';
				let m = date.getMinutes() + ':';
				let s = date.getSeconds(); 
				console.log("1111111");
				console.log(Y+M+D+h+m+s);
				return Y+M+D+h+m+s
			}
		}
	}
</script>

<style lang="scss" scoped>
 @import '../../static/iconfont/css/icon.css';
page{
	background-color: #fdf2ff;
}
.task-page{
	margin-bottom: 48rpx;
}
.order-popup{
	
	.title{
		padding: 32rpx;
		font-size: 40rpx;
	}
	.rush-order,.order-number{
		font-size: 24rpx;
		color: #9e9e9e;
		margin: 12rpx 32rpx;
	}
	.detail{
		display: flex;
		flex-direction: row;
		width: 650rpx;
		margin: 0 auto;
		background-color: #f2f2f2;
		.img{
			width: 136rpx;
			height: 136rpx;
			margin-left: 10rpx;
			image{
				width: 136rpx;
				height: 136rpx;
			}
		}
		.description{
			display: flex;
			flex-direction: column;
			font-size: 24rpx;
			line-height: 36rpx;
			padding-left: 20rpx;
			.bolder{
				margin-top: 10rpx;
				font-size: 28rpx;
				font-weight: bolder;
			}
		}
		
	}
	.total,.commission{
		width: 650rpx;
		margin: 40rpx auto;
		font-size: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.commission{
		.amount{
			color: #ff9a2c;
			font-size: 24rpx;
		}
	}
	.buttons{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.cancel-btn,.submit-btn{
			font-size: 32rpx;
			height: 72rpx;
			line-height: 72rpx;
			border-radius: 36rpx;
			padding: 0 24rpx;
			margin-right: 40rpx;
			box-shadow: 0px 6px 6px #d0bcbc;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
		.submit-btn{
			color: #ffffff;
			background-color: #6d00be;
			box-shadow: 0px 0px 0px #d0bcbc;
		}
	}
}
 .message{
	width: 100%;
	height: 108rpx;
 	position: fixed;
 	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.text{
		background-color: red;
		padding: 0 30rpx;
	}
 	.message-btn{
 		width: 108rpx;
		line-height: 108rpx;
		text-align: center;
		.iconfont{
			font-size: 50rpx;
		}
 	}
 }
 .my-balance{
	padding: 18rpx;
	margin-bottom: 20rpx;
 	background-image: url(../../static/imgs/task/task_top_bg.png);
	background-size: 750rpx 280rpx;
 	display: flex;
 	flex-direction: row;
 	justify-content: space-between;
 	align-items: flex-start;
 	.data-box{
 		display: flex;
 		flex-direction: column;
 		justify-content: flex-start;
 		align-items: flex-start;
 		.note{
			display: flex;
			flex-direction: column;
 			font-size: 28rpx;
			line-height: 60rpx;
			.rate{
				margin-left: 20rpx;
			}
 		}
 	}
 	.recharge{
 		color: #FFFFFF;
		margin-top: 10rpx;
		padding: 0 40rpx;
 		height: 90rpx;
		line-height: 90rpx;
 		background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
 		box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
 		border-radius: 225px;
 		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.icon-jiahao{
			font-size: 48rpx;
		}
 	}
 }
 .card-box{
	 padding-top: 40rpx;
	 width: 710rpx;
	 margin: 0 auto;
	 padding-bottom: 60rpx;
	 background-color: #ffffff;
	 box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.15);
	 border-radius: 20rpx;
	 .content {
		 margin-bottom: 60rpx;
	     display: flex;
	     flex-direction: column;
	     align-items: center;
	     justify-content: center;
	 }
	 // .card{
	 // 	 padding: 56rpx 48rpx 48rpx;
		//  height: 300rpx;
	 // 	 background-image: url(../../static/imgs/task/Task_card-bg.png);
		//  background-size: 714rpx 304rpx;
		//  background-position: center center;
	 // 	 .order-info{
	 // 		 display: flex;
	 // 		 flex-direction: row;
	 // 		 font-size: 24rpx;
	 // 		 .order-img{
	 // 			 image{
	 // 				 width: 200rpx;
	 // 				 height: 108rpx;
	 // 			 }
	 // 		 }
	 // 		 .order-intro{
		// 		 width: 408rpx;
		// 		 line-height: 36rpx;
		// 		 font-size: 24rpx;
	 // 			 padding-left: 16rpx;
		// 		 .bolder{
		// 			 font-weight: 600;
		// 			 margin-right: 8rpx;
		// 		 }
	 // 		 }
	 // 	 }
	 // 	 .order-detail{
	 // 		 margin-top: 40rpx;
	 // 		 font-size: 28rpx;
	 // 	 	 display: flex;
	 // 	 	 flex-direction: row;
	 // 		 justify-content: space-between;
		// 	 .note{
		// 		 margin-right: 4rpx;
		// 	 }
		// 	 .amount{
		// 		 color: #666666;
		// 	 }
	 // 	}	 
	 // }
	 .total-data{
		 margin: 24rpx 20rpx;
		 .top{
			 margin-bottom: 24rpx;
			 display: flex;
			 flex-direction: row;
			 justify-content: space-between;
			 align-items: center;
			 .rule{
				 width: 90rpx;
				 line-height: 40rpx;
				 text-align: right;
				 color: #C348E9;
				 font-size: 24rpx;
				 font-weight: 560;
				 background-image: url(../../static/imgs/task/Task_icon_rule.png);
				 background-size: 30rpx 30rpx;
				 background-repeat: no-repeat;
				 background-position: left;
				 
			 }
		 }
		 .data-box{
			 padding: 20rpx 0;
			 display: flex;
			 flex-direction: row;
			 justify-content: space-between;
			 border-top: 1rpx solid #f2f2f2;
			 border-bottom: 1rpx solid #f2f2f2;
			 .order,.commission{
				 width: 335rpx;
				 height: 60rpx;
				 line-height: 40rpx;
				 margin: 30rpx 0;
				 display: flex;
				 flex-direction: column;
				 justify-content: center;
				 align-items: center;
				 .note{
					 font-size: 20rpx;
					 color: #A3A9B1;
					 display: flex;
					 flex-direction: row;
					 justify-content: center;
					 align-items: center;
				 }
			 }
			 .order{
				 border-right: 1rpx solid #f2f2f2;
			 }
		 } 
	 }
	 .today-data{
			 margin: 24rpx 20rpx;
			 .top{
				 margin: 20rpx 0rpx;
				 display: flex;
				 flex-direction: row;
				 justify-content: space-between;
				 .title{
					 color: #29292C;
					 font-weight: 700;
				 }
				 .time{
					 color: #66666D;
					 font-size: 24rpx;
				 }
			 }
			 .data-box{
				 padding: 40rpx 0;
				 border-top: 1rpx solid #f2f2f2;
				 border-bottom: 1rpx solid #f2f2f2;
				 display: flex;
				 flex-direction: row;
				 justify-content: space-between;
				 flex-wrap: wrap;
				 .data-ietm{
					 display: flex;
					 flex-direction: column;
					 justify-content: center;
					 align-items: center;
					 width: 335rpx;
					 padding: 20rpx 0;
					 .note{
						 width: 240rpx;
						 text-align: center;
						 font-size: 20rpx;
						 color: #A3A9B1;
						 display: flex;
						 flex-direction: row;
						 justify-content: center;
						 align-items: center;
					 }
				 }
				 .right-line{
					 border-right: 1rpx solid #f2f2f2;
				 }
			 }
		 }
		 .star-btn{
			 display: flex;
			 flex-direction: row;
			 justify-content: center;
			 align-items: center;
			 margin: 0 auto 20rpx;
			 width: 640rpx;
			 height: 90rpx;
			 line-height: 90rpx;
			 text-align: center;
			 color: #ffffff;
			 background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
			 box-shadow: 0px 4rpx 8rpx 0rpx rgba(0,0,0,0.3);
			 border-radius: 45rpx;
		 }
		 .select-btn{
			 display: flex;
			 flex-direction: row;
			 justify-content: center;
			 align-items: center;
			 margin: 0 auto;
			 width: 640rpx;
			 height: 90rpx;
			 line-height: 90rpx;
			 color: #C348E9;
			 text-align: center;
			 border: 0.8px solid #C348E9;
			 border-radius: 45rpx;
		 }
 }
</style>
