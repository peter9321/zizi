<template>
	<view class="profile-page">
		<!-- 顶部系统信息 -->
		<view class="message">
			<text class="text"></text>
			<view class="message-btn" @click="jumpSysmessage()">
				<text class="iconfont icon-liaotian1"></text>
			</view>
		</view>
		<view class="bgblue">
			
		</view>
		<view class="userdata-box">
			<!-- 用户信息展示 -->
			<view class="userprofile">
				<view class="icon">
					<image src="../../static/imgs/profile/default_photo/default_man.png" mode=""></image>
				</view>
				<view class="data">
					<text class="name">{{userName}}</text>
					<text class="level"><image :src="vipImg" mode=""></image></text>
				</view>
			</view>
			<!-- 用户余额信息 -->
			<view class="balance">
				<view class="my-balance">
					<view class="data-box" >
						<text class="note">Account funds</text>
						<text class="amount">$ {{getFunds}}</text>
					</view>
					<view class="withdraw" @click="jumpWithdraw()">
						WITHDRAW
					</view>
					<view class="recharge" @click="jumpRecharge()">
						RECHARGE
					</view>
				</view>
				<view class="balance-detail">
					<view class="available">
						<text class="amount">$ {{availableSum}}</text>
						<text class="note">Available balance</text>
					</view>
					<view class="frozen">
						<text class="amount">$ {{freezeSum}}</text>
						<text class="note">Frozen amount</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 操作按钮 -->
		<view class="my-operate">
			<view class="funding" @click="jumpAccdetail()">
				<view class="icon-box">
					<text class="iconfont icon-baogao"></text>
				</view>
				<text class="note">Funding details</text>
			</view>
			<view class="team">
				<view class="icon-box">
					<text class="iconfont icon-shuji"></text>
				</view>
				<text class="note">Team report</text>
			</view>
			<!-- <view class="yuebao">
				<view class="icon-box">
					<text class="iconfont icon-qianbao1"></text>
				</view>
				<text class="note">Yu'ebao</text>
			</view> -->
		</view>
		<!-- 底部系统按钮 -->
		<view class="sys-operate">
			<view class="password">
				<view class="icon-box">
					<text class="iconfont icon-anquan"></text>
				</view>
				<text class="note">Change Password</text>
			</view>
			<view class="introduce">
				<view class="icon-box">
					<text class="iconfont icon-jinggao"></text>
				</view>
				<text class="note">Introduce</text>
			</view>
			<view class="signout" @click="loginOut()">
				<view class="icon-box">
					<text class="iconfont icon-tuichu1"></text>
				</view>
				<text class="note">Sign out</text>
			</view>
			<!-- <view class="download">
				<view class="icon-box">
					<text class="iconfont icon-shouji"></text>
				</view>
				<text class="note">Download App</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	import HomeApi from '../../api/HomeApi.js'
	export default {
		data() {
			return {
				userName: '',
				availableSum: 0,
				freezeSum: 0,
				vipLevel:1
			}
		},
		computed:{
			getFunds(){
				return this.availableSum+this.freezeSum
			},
			vipImg(){
				return `../../static/imgs/profile/vip_level/v${this.vipLevel}.png`
				
			}
		},
		onLoad() {
			uni.getStorage({
			    key: 'userInfo',
			    success:(res)=>{
					let inf=JSON.parse(res.data)
					console.log(inf)
					console.log("inf")
			        this.userName=inf.userName;
			        this.availableSum=inf.availableSum;
			        this.freezeSum=inf.freezeSum;
					this.vipLevel = inf.grade
			    }
			});
		},
		methods: {
			loginOut(){
				
				let token = uni.getStorageSync('token');
				let parmas = {
					token:token
				}
				HomeApi.loginOut_Api(parmas).then(res => {
					if(res.responseCode == '0000'){
						uni.showToast({
						    title: 'Log out successfully',
						    duration: 2000,
							icon:'none'
						});
						uni.removeStorage({
						    key: 'token',
						});
						uni.removeStorage({
						    key: 'userInfo',
						});
						this.$store.commit('setUserInfo',{})
						this.$store.commit('setToken','')
						setTimeout(()=>{
							uni.navigateTo({
							    url: '/pages/loginPage/loginPage'
							});
						},1000)
					}
				})
			},
			jumpSysmessage(){
				uni.navigateTo({
					url:'../sysMessage/sysMessage'
				})
			},
			jumpWithdraw(){
				uni.navigateTo({
					url:'../withDraw/withDraw'
				})
			},
			jumpRecharge(){
				uni.navigateTo({
					url:'../reCharge/reCharge'
				})
			},
			jumpTeam(){
				uni.navigateTo({
					url:'../operationPages/teamReport'
				})
			},
			jumpAccdetail(){
				uni.navigateTo({
					url:'../accDetail/accDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #fcedff;
}
@import '../../static/iconfont/css/icon.css';
	
	
.profile-page{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
 .message{
	width: 100%;
	height: 108rpx;
	background-color: #4C15A3;
 	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.text{
		padding: 0 30rpx;
	}
 	.message-btn{
 		width: 108rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.iconfont{
			font-size: 50rpx;
		}
 	}
 }
.bgblue{
	height: 200rpx;
	width: 100%;
	background-color: #4C15A3;
}
.userdata-box{
	width: 710rpx;
	margin-top: -188rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	border-radius: 20rpx;
}

.userprofile{
	margin: 30rpx;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	.icon{
		width: 160rpx;
		height: 160rpx;
		border-radius: 60rpx;
		margin-right: 15rpx;
		image{
			width: 160rpx;
			height: 160rpx;
		}
	}
	.data{
		color: #ffffff;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-wrap: wrap;
		width: 370rpx;
		.name{
			font-size: 32rpx;
			color: #29292C;
			font-weight: 600;
			margin-bottom: 16rpx;
		}
		.level{
			width: 180rpx;
			height: 90rpx;
			// background-color: red;
			image{
				width: 180rpx;
				height: 90rpx;
			}
			
		}
	}
}


.balance{
	background-image: url(../../static/imgs/profile/balance_bg.png);
	background-size: 710rpx 280rpx;
	.my-balance{
		// width: 176rpx;
		margin: 30rpx;
		padding: 16rpx 0;
		border-bottom: 1px solid #e8bb74;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.data-box{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			.amount{
				font-size: 36rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				
			}
			.note{
				color: #b3b3b3;
				font-size: 24rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
		.recharge,.withdraw{
			height: 72rpx;
			padding: 0 20rpx;
			line-height: 72rpx;
			text-align: center;
			font-size: 24rpx;
			border: 1.6rpx solid #C348E9;
			border-radius: 36rpx;
			color: #9858F8;
			font-weight: 500;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			
		}
		.recharge{
			color: #ffffff;
			background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
			box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.3);
			border:0;
		}
		.withdraw{
			margin-left: 60rpx;
		}
	}
	.balance-detail{
		padding: 14rpx 0 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.available,.frozen{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 50%;
			.amount{
				height: 48rpx;
				line-height: 40rpx;
				font-size: 32rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
			.note{
				color: #A3A9B1;
				font-size: 28rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
		.frozen{
			border-left: 1px solid #e8bb74;
		}
	}
}
.my-operate{
	padding: 50rpx 0;
	margin-top: 20rpx;
	width: 710rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	border-radius: 20rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	.funding,.team,.yuebao{
		width: 33%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.icon-box{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
			line-height: 100rpx;
			text-align: center;
			background-color: #F6DEFF;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.iconfont{
				font-size: 48rpx;
				color: #6E00BF;
			}
		}
		.note{
			margin-top: 10rpx;
			font-size: 28rpx;
			color: #666666;
		}
	}
}

.sys-operate{
	padding: 50rpx 0;
	margin: 20rpx auto 60rpx;
	width: 710rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	border-radius: 20rpx;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	.password,.introduce,.signout,.download{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 236rpx;
		.icon-box{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
			line-height: 100rpx;
			text-align: center;
			background-color: #F6DEFF;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.iconfont{
				font-size: 48rpx;
				color: #6E00BF;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
		.note{
			margin-top: 10rpx;
			font-size: 26rpx;
			color: #666666;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
	.download{
		margin-top: 40rpx;
	}
}
</style>
