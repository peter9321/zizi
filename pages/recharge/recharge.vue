<template>
	<view class="recharge">
		<view class="amount">
			充值金额 :
		</view>
		<view class="shortcut">
			<view class="rechargemoney" @click="">
				300
			</view>
			<view class="rechargemoney">
				500
			</view>
			<view class="rechargemoney">
				1000
			</view>
			<view class="rechargemoney">
				2000
			</view>
			<view class="rechargemoney">
				5000
			</view>
			<view class="rechargemoney">
				5000
			</view>
		</view>
		<view class="balance">
			账户余额 : 0.00元
		</view>
		<view class="type">
			支付方式 :
		</view>
		<view class="channel">
			银行卡支付
		</view>
		<view class="tips">
			温馨提示：<span style="color:red;">300元以上</span>的充值,需通过<span style="color:red;">银行卡渠道</span>进行充值！请联系客服领取卡号！
		</view>
		<view class="charge-btn" @click="show=true">
			立即充值
		</view>
		<u-modal :show="show" :title="title" @confirm="show = false" :content='content'></u-modal>
		<view class="explain"> 
		    <view class="">说明：</view>
			<view class="">  1、支持微信、支付宝充值</view>
			<view class="">  2、请按照【充值金额】选择金额支付</view>
			<view class="">  3、付款成功请返回个人账户查看余额，如未到账请保存付款成功截图与客服联系处理</view>
			<view class="">  4、请勿造成重复支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				title:'信息',
				content:'申请充值成功，请联系客服获取充值银行卡号！'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.amount,.type{
	background: #F9F9F9;
	padding: 32rpx 16rpx;
	font-size: 32rpx;
	border:1rpx solid #e6e6e6;
}
.shortcut{
	display: flex;
	flex-wrap: wrap;
	padding: 12rpx;
	.rechargemoney{
		width: 174rpx;
		height: 60rpx;
		color: #fff;
		font-size: 24rpx;
		border-radius: 10rpx;
		margin-left: 6rpx;
		margin-top: 16rpx;
		background: #999;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.balance{
	padding: 32rpx 16rpx;
	font-size: 28rpx
}
.tips{
	color: #008000;
	margin: 16rpx;
	font-size: 24rpx
}
.charge-btn{
	margin: 16rpx auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 650rpx;
	height: 70rpx;
	border-radius: 10rpx;
	background: #287993;
	color: #fff;
}
.explain{
	font-size: 24rpx;
	color: #ff0000;
	margin: 16rpx;
}
</style>
