<template>
	<view>
		<view class="container">
			<view class="card">
				<view class="card-head">
					<text class="note">Available cash amount</text>
					<text class="amount">$278491.00</text>
				</view>
				<view class="card-body">
					<!-- 用户信息 -->
						<view class="list">
							<text class="note">account name:</text>
							<text class="value">Seynieye</text>
						</view>
						<view class="list">
							<text class="note">Mobile number:</text>
							<text class="value">138****8001</text>
						</view>
						<view class="list">
							<text class="note">Wallet address:</text>
							<text class="address">0x2691a1395Bc3a58d9322481F817F90B6F6038588</text>
						</view>
				</view>
			</view>
		<!-- 提现区域 -->
			<view class="withdraw-amount">
				<input type="text" value="" placeholder="Enter the withdrawal amount"/>
			</view>
				<input type="password" value="" placeholder="Enter password"/>
			<view class="withdraw-btn">Initiate a withdrawal</view>
				<view class="rules">
					<text>Withdraw rule</text>
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
				list: [
						{
							name: 'after the wallet is approved, you need to register for the money',
							disabled: false
						},
						{
							name: 'withdraw cash to bank card',
							disabled: false
						}
					],
					// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
					value: 'after the wallet is approved, you need to register for the money',
			}
		},
		methods: {
			backBtn(){
				history.back()
			},
			radioGroupChange(){
				
			},
			radioChange(){
				
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
.container{
	width: 710rpx;
	margin: 0 auto;
}
.card{
	display:flex;
	flex-direction: column;
	border-radius: 20rpx;
	box-shadow: 0px 4rpx 8rpx  0rpx rgba(0,0,0,0.15);
	background-color: #ffffff;
	.card-head{
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #4C15A3;
		height: 136rpx;
		color: #ffffff;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		.note{
			font-size: 28rpx;
		}
		.amount{
			font-size: 42rpx;
		}
	}
	.card-body{
		background-color: #ffffff;
		padding:40rpx 24rpx 16rpx;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		.list{
			font-size: 25.6rpx;
			color: #666666;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.note{
				width: 280rpx;
				height: 60rpx;
				font-weight: 700;
			}
			.address{
				width: 336rpx;
				height: 72rpx;
				word-break: break-all;
			}
		}
	}
}

input{
	color: #A3A9B1;
	font-size: 32rpx;
	padding: 20rpx 32rpx;
	text-align: center;
	line-height: 90rpx;
	background-color: #ffffff;
	border-radius: 50rpx;
	border: 1px solid #ebebeb;
}
.withdraw-amount{
	margin: 40rpx 0 20rpx;
}
.withdraw-btn{
	margin-top: 40rpx;
	font-size: 32rpx;
	color: #ffffff;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	border-radius: 50rpx;
	background-image: linear-gradient(113deg, #D279F1 0%, #B6B7FF 100%);
	box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.rules{
	margin-top: 30rpx;
	width: 710rpx;
	display: flex;
	flex-direction: column;
	font-size: 25.6rpx;
	line-height: 40rpx;
	color: #666666;
}

</style>
