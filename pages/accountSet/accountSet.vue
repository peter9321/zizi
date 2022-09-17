<template>
	<view class="main">
		<view class="line">
			<view class="l-left">
				<image mode="aspectFit" class="icon" src="../../static/images/user_tel.png" ></image>
				<text>手机号</text>
			</view>
			<view class="right">
				136336452333
			</view>
		</view>
		<view class="line">
			<view class="l-left">
				<image mode="aspectFit" class="icon" src="../../static/images/user_cert1.png" ></image>
				<text>实名认证</text>
			</view>
			<view class="right" @click="goPage('/pages/verifiedUser/verifiedUser')">
				未认证
			</view>
		</view>
		<view class="line" @click="goPage('/pages/setLoginPwd/setLoginPwd')">
			<view class="l-left">
				<image mode="aspectFit" class="icon" src="../../static/images/user_lpwd.png" ></image>
				<text>修改登录密码</text>
			</view>
			<view class="right">
				<image mode="aspectFit" class="icon" src="../../static/images/next.png" ></image>
			</view>
		</view>
		<view class="line" @click="goPage('/pages/setPayPwd/setPayPwd')">
			<view class="l-left">
				<image mode="aspectFit" class="icon" src="../../static/images/user_ppwd.png" ></image>
				<text>修改支付密码</text>
			</view>
			<view class="right">
				<image mode="aspectFit" class="icon" src="../../static/images/next.png" ></image>
			</view>
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
.main{
	.line{
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		height: 100rpx;
		justify-content: space-between;
		border-bottom: 1px solid #eaeaea;
		.l-left{
			display: flex;
			align-items: center;
			.icon{
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}
			text{
				color: #385fec;
				font-size: 28rpx;
			}
		}
		.right{
			color: #385fec;
			font-size: 28rpx;
			image{
				width: 34rpx;
				height: 34rpx;
			}
		}
		
	}
	
}
</style>
