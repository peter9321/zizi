<template>
	<view>
		<view class="recharge-box">
			<view class="recharge-amount">
				<input type="text"  placeholder="Enter the top-up amount"/>
				<view class="quick-amount">
					<text class="amount">200.00</text>
					<text class="amount">500.00</text>
					<text class="amount">1000.00</text>
					<text class="amount">3000.00</text>
					<text class="amount">5000.00</text>
					<text class="amount">10000.00</text>
					<text class="amount">20000.00</text>
					<text class="amount">50000.00</text>
				</view>
			</view>
			<view class="recharge-address">
				<text class="title">Wallet address</text>
				<text class="adress">0x2691a1395Bc3a58d9322481F817F90B6F6038588</text>
				<view class="copybtn">Copy address</view>
			</view>
			<view class="submit-btn" @click="jumpCheckCounter()">
				Submit orders
			</view>
			<!-- 充值注意事项 -->
			<view class="rules">
				<text>Recharge rule</text>
				<text>1. Cute Cartoon Kids Sleeping Pillows 0-10.</text>
				<text>2. 0x2691a1395Bc3a58d9322481F817F90B6F6038588</text>
				<text>3. Cute Cartoon Kids.</text>
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
			jumpCheckCounter(){
				uni.navigateTo({
					url:'../checkCounter/checkCounter'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../static/iconfont/css/icon.css';
page{
	background-image: url(../../static/imgs/common/background.png);
	background-size: 100% 100%;
}
.recharge-box{
	margin-top: 10rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	.recharge-amount{
		display: flex;
		flex-direction: column;
		align-items: center;
		input{
			margin-top: 12rpx;
			width: 710rpx;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 45rpx;
			text-align: center;
			background-color: #ffffff;
			border: 1px solid #dee2e6;
		}
		.quick-amount{
			margin-top: 28rpx;
			width:710rpx;
			// background-color: blue;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			.amount{
				margin-bottom: 20rpx;
				width: 170rpx;
				height: 90rpx;
				color: #66666D;
				border-radius: 10rpx;
				line-height: 90rpx;
				text-align: center;
				background-color: #F6DEFF;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				
			}
		}
	}
	.recharge-address{
		padding: 40rpx ;
		width: 710rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title{
			font-size: 36rpx;
			color: #29292C;
			font-weight: 700;
		}
		.adress{
			margin: 30rpx;
			font-size: 24rpx;
		}
		.copybtn{
			width: 200rpx;
			height: 64rpx;
			color: #ffffff;
			line-height: 64rpx;
			text-align: center;
			font-size: 24rpx;
			background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
			box-shadow: 0rpx 2rpx r4px 0rpx rgba(0,0,0,0.3);
			border-radius: 32rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
	.submit-btn{
		margin:40rpx 0 40rpx;
		width: 710rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: #ffffff;
		background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.3);
		border-radius: 45rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
}
.rules{
	width: 710rpx;
	display: flex;
	flex-direction: column;
	font-size: 25.6rpx;
	line-height: 40rpx;
	color: #666666;
}
</style>
