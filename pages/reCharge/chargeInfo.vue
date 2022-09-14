<template>
	<view class="charge-info">
		<view class="infobox">
			<view class="channel">
				Transfer Channel: <text class="rextxt">USDT</text>
			</view>
			<view class="type">
				USDT Top-up
			</view>
			<view class="u-input">
				<u-input
				    placeholder="Please input the number of USD T to be traded"
				    v-model="value"
				    @change="change"
					class="changefs"
					>
				</u-input>
			</view>
			<view class="title">
				Receivers address
			</view>
			<view class="address">
				<text class="txt">{{address}}</text>
				<view class="copy-btn" @click="copyAddress">copy</view>
			</view>
			<view class="confirm-btn">Confirm</view>
		</view>
		<view class="reminder">
			<view class="top">
				Friendly Reminders
			</view>
			<text class="txt">
				The amount of USDT for every single top-up:30~1000000
				1.Please enter the correct amount of USD T and wallet address.
				2.Please contact our online customer service if the amount is not shown or errors.
				3.Please do not repeatedly submit the order after
				complete the transferï¼submit only once.
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				// address:'0x5F5f6fC1B574F7A915',
				address:''
			}
		},
		methods: {
			change(e) {
			  console.log('change', e);
			},
			copyAddress(){
				uni.setClipboardData({
				    data: this.address,
				    success: function () {
				        uni.showToast({
				            title: 'Copy Success',
				            duration: 2000,
				        	icon:'none'
				        });
				    }
				});
			}		
		}
	}
</script>

<style lang="scss">
.u-input{
	background-color: #F5F5FB;
	height: 94rpx;
	line-height: 94rpx;
	font-size: 26rpx !important;
	display: flex;
	align-items: center;
	padding: 0 26rpx;
	.changefs{
		font-size: 26rpx !important;
	}
}
</style>
<style scoped lang="scss">
page{
	background-color: #EEF1FA;
}
.charge-info{
	.infobox{
		padding: 40rpx 26rpx;
		margin: 20rpx auto 20rpx;
		width: 712rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		.channel{
			.rextxt{
				display: inline-block;
				margin-left: 20rpx;
				color: red;
			}
		}
		.type,.title{
			font-size: 32rpx;
			margin: 20rpx 0;
		}
		.address{
			color: #666666;
			height: 90rpx;
			line-height: 90rpx;
			border-bottom: 4rpx solid #EEF1FA;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.copy-btn{
				width: 120rpx;
				height: 60rpx;
				color: #ffffff;
				line-height: 60rpx;
				text-align: center;
				font-size: 26rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 30rpx;
				background: linear-gradient(to right,#757EFB,#A10CE2);
			}
		}
		.confirm-btn{
			margin: 60rpx auto 0;
			width: 340rpx;
			height: 90rpx;
			border-radius: 45rpx;
			font-size: 36rpx;
			line-height: 90rpx;
			color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(to right,#757EFB,#A10CE2);
		}
	}
	.reminder{
		padding: 40rpx 24rpx;
		margin: 20rpx auto 20rpx;
		width: 712rpx;
		// height: 700rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		.top{
			width: 374rpx;
			height: 94rpx;
			line-height: 94rpx;
			color: #ffffff;
			text-align: center;
			background-image: url(../../static/imgs/charge/reminders.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}
		.txt{
			color: #444444;
			display: block;
			margin-top: 20rpx;
			font-size: 24rpx;
			line-height: 40rpx;
		}
	}
}
</style>
