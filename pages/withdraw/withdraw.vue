<template>
	<view class="withdraw">
		<view class="bank">
			<view class="tit">
				提现银行
			</view>
			
		</view>
		<view class="money">
			<view >提现金额:</view>
			<view class="amount">
				<view class="big">￥</view>
				<u--input
				    placeholder="提现金额最低为100元"
				    border="surround"
				    v-model="value"
				    @change="change"
				></u--input>
			</view>
			<view >可提现金额 0.00元</view>
		</view>
		<view class="password">
			<view class="tit">
				交易密码
			</view>
			 <u--input
			    placeholder="请输入交易密码"
				type="password"
			    border="surround"
			    v-model="value"
			    @change="change"
			  ></u--input>
		</view>
		<view class="btn">
			申请提现
		</view>
		<view class="tips">
			<view class="tit">温馨提示：</view> 
		    <view class="p">1：提现时间：08:00-21:00 </view> 
		    <view class="p">2：余额100即可发起提现 </view> 
		    <view class="p">3：每日仅可提现一次 </view>     
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
			
		}
	}
</script>

<style lang="scss" scoped>
.withdraw{
	font-size: 28rpx;
	color: #424242;
	padding: 0 25rpx;
	.bank,.password{
		padding: 20rpx 0;	
		display: flex;
		align-items: center;
		.tit{
			margin-right: 28rpx;
		}
	}
	.money{
		padding: 20rpx 0rpx;
		.amount{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 25rpx 0;
			.big{
				width: 140rpx;
				font-size: 42rpx
			}
		}
	}
	.btn{
		width: 650rpx;
		height: 70rpx;
		color: #fff;
		border-radius: 10rpx;
		background: #287593;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20rpx;
	}
	.tips{
		padding: 30rpx;
	}
}
</style>
