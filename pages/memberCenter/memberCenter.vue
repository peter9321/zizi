<template>
	<view class="member">
		<view class="logo-box">
			<image mode="aspectFit" class="logo" src="../../static/images/member/logo.png" ></image>
		</view>
		<view class="user-area">
			<view class="avtar">
				<image mode="aspectFit" class="logo" src="../../static/images/member/touxiang.png" ></image>
			</view>
			<view class="right-area">
				<view class="top">
					当前会员等级：V1会员
				</view>
				<view class="bottom">
					<text>账号：133******3699</text>
					<text>余额：0.00</text>
					<text>现金券：0</text>
				</view>
				<view class="qiandao">
					<image mode="aspectFit" class="logo" src="../../static/images/member/qiandao.png" ></image>
				</view>
			</view>
		</view>
		<view class="money-area">
			<view class="money-item">
				<text>0.00</text>
				<text class="tit">可用余额（元）</text>
			</view>
			<view class="money-item">
				<text>0.00</text>
				<text class="tit">可提余额（元）</text>
			</view>
			<view class="money-item">
				<text>0.00</text>
				<text class="tit">待收利息（元）</text>
			</view>
			<view class="money-item">
				<text>0.00</text>
				<text class="tit">股权（元）</text>
			</view>
		</view>
		<view class="main-menu">
			<view class="menu-item" @click="goPage('/pages/recharge/recharge')">
				<image mode="aspectFit" class="logo" src="../../static/images/member/cz.png" ></image>
				<text>充值</text>
			</view>
			<view class="menu-item" @click="goPage('/pages/transfer/transfer')">
				<image mode="aspectFit" class="logo" src="../../static/images/member/trans.png" ></image>
				<text>转账</text>
			</view>
			<view class="menu-item" @click="goPage('/pages/withdraw/withdraw')">
				<image mode="aspectFit" class="logo" src="../../static/images/member/tx.png" ></image>
				<text>提现</text>
			</view>
		</view>
		<view class="nav-list">
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/ebao.png" ></image>
				<text>股权</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/juan.png" ></image>
				<text>优惠券</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/accSet.png" ></image>
				<text>账号设置</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/icon-in-001.png" ></image>
				<text>银行卡绑定</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/userrealname.png" ></image>
				<text>实名认证</text>
			</view>
			
			<view class="nav-item" @click="goPage('/pages/inviteFriends/inviteFriends')">
				<image mode="aspectFit" class="logo" src="../../static/images/member/icon-in7.png" ></image>
				<text>邀请好友</text>
			</view>
			<view class="nav-item" @click="goPage('/pages/letter/letter')">
				<image mode="aspectFit" class="logo" src="../../static/images/member/index-hlf-icon6.png" ></image>
				<text>站内短信</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/accTotal.png" ></image>
				<text>收益记录</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/icon-in4.png" ></image>
				<text>投资记录</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/accBank.png" ></image>
				<text>资金流水</text>
			</view>
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/accBusiness.png" ></image>
				<text>充值记录</text>
			</view>
			
			<view class="nav-item">
				<image mode="aspectFit" class="logo" src="../../static/images/member/redom.png" ></image>
				<text>提现记录</text>
			</view>
		</view>
		<view class="get-out">
			安全退出
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goPage(url){
				console.log(666)
				uni.navigateTo({
					url: url
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.member{
	padding-top: 40rpx;
	padding-bottom: 70rpx;
	background: linear-gradient(to right,#ff0000,#ff9933);
	.logo-box{
		width: 320rpx;
		height: 48rpx;
		margin: 0 auto;
		
		image{
			width: 320rpx;
			height: 48rpx;
		}
	}
	.user-area{
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		align-items: center;
		.avtar{
			height: 140rpx;
			width: 140rpx;
			image{
				width: 140rpx;
				height: 140rpx;
			}
		}
		.right-area{
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 10rpx;
			position: relative;
			flex: 1;
			.top{
				color: #ffffff;
				font-size: 32rpx;
			}
			.bottom{
				margin-top: 10rpx;
				text{
					font-size: 24rpx;
					color: #bbd5e0;
					margin-right: 10rpx;
					font-weight: bold;
				}
				
			}
		}
		.qiandao{
			position: absolute;
			right: 10rpx;
			top: 0rpx;
			width: 140rpx;
			height: 50rpx;
			image{
				width: 140rpx;
				height: 50rpx;
			}
		}
	}
	.money-area{
		padding-left: 20rpx;
		padding-right: 20rpx;
		background: rgba(255,255,255,.1);
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		width: 100%;
		height: 140rpx;
		.money-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 25%;
			border-right: 1rpx solid #66a5bc;
			text{
				font-size: 24rpx;
				color: #ffffff;
			}
			.tit{
				margin-top: 10rpx;
			}
		}
	}
	.main-menu{
		display: flex;
		align-items: center;
		width: 720rpx;
		height: 148rpx;
		margin: 20rpx auto;
		background: #ffffff;
		border-radius: 10rpx;
		.menu-item{
			width: 33.3%;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 90rpx;
				height: 90rpx;
				margin-right: 10rpx;
			}
		}
	}
	.nav-list{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 720rpx;
		margin: 0 auto;
		background: #ffffff;
		border-radius: 10rpx;
		.nav-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 160rpx;
			width: 33.3%;
			border-bottom: 1rpx solid #e5e5e5;
			box-sizing: border-box;
			border-right: 1rpx solid #e5e5e5;
			image{
				width: 70rpx;
				height: 70rpx;
			}
			text{
				margin-top: 10rpx;
				font-size: 28rpx;
			}
		}
	}
	.get-out{
		width: 650rpx;
		height: 70rpx;
		background: #ff9900;
		color: #ffffff;
		text-align: center;
		line-height: 70rpx;
		margin: 40rpx auto;
		border-radius: 5px;
		
	}
}
</style>
