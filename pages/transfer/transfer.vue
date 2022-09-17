<template>
	<view class="transfer">
		<view class="money">
			<view >转账金额:</view>
			<view class="amount">
				<view class="big">￥</view>
				<u--input
				    placeholder="转账金额最低为300元"
				    border="surround"
				    v-model="value"
				    @change="change"
				></u--input>
			</view>
			<view >可转账金额 0.00元</view>
		</view>
		<view class="cell">
			<view class="tit1">手机号</view>
			<u--input
			    placeholder="输入接收人手机号"
			    border="surround"
			    v-model="value"
			    @change="change"
			></u--input>
		</view>
		<view class="password">
			<view class="tit2">交易密码</view>
			<u--input
			    placeholder="输入支付密码"
			    border="surround"
			    v-model="value"
			    @change="change"
			></u--input>
		</view>
		<view class="btn">
			立即转账
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
.transfer{
	font-size: 28rpx;
	color: #424242;
	padding: 0 25rpx;
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
.cell,.password{
		display: flex;
		flex-direction: row;
		align-items: center;
		.tit1{
			margin-right: 52rpx;
		}
		.tit2{
			margin-right: 24rpx;
		}
}
.btn{
	margin: 30rpx auto;
	width: 650rpx;
	height: 70rpx;
	color: #fff;
	background: #287593;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
</style>
