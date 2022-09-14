<template>
	<view class="charge-methods">
		<view class="usdt-list">
			<view class="usdt-item" v-for="(item,index) in usdtChannel" :key="index" @click="usdtClick(item,index)">
				<view class="type">
					{{item.type}}
				</view>
				<view class="channel">
					{{item.channel}}
				</view>
				<view class="description">
					{{item.description}}
				</view>
				<view class="select" :class="{bgimg:index===current}">
					
				</view>
			</view>
		</view>
		<view class="next-btn" @click="jumpChargeInfo">
			Next
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:'-1',
				usdtChannel:[
					{	
						type:"USDT",
						channel:"USDT-ERC20",
						description:"Deposite address",
					},
					{
						type:"USDT",
						channel:"USDT-TRC20",
						description:"Deposite address"
					},
					{
						type:"ETH",
						channel:"ETH-ERC20",
						description:"Deposite address"
					},
				]
			}
		},
		methods: {
			usdtClick(item,index){
				console.log(item);
				this.current=index
			},
			jumpChargeInfo(){
				console.log('跳转充值信息页面')
				uni.navigateTo({
					url:'chargeInfo'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
page{
	background-color: #EEF1FA;
}
.charge-methods{
	.usdt-list{
		margin-top: 40rpx;
		.usdt-item{
			padding: 0 36rpx;
			margin: 0 auto 20rpx;
			width: 712rpx;
			height: 94rpx;
			line-height: 94rpx;
			border-radius: 20rpx;
			background-color: #ffffff;
			display: flex;
			flex-direction: row;
			// justify-content: space-between;
			align-items: center;
			.type{
				font-size: 34rpx;
				margin-right: 20rpx;
			}
			.channel{
				// margin-left: 0;
				margin-right: 10rpx;
			}
			.description{
				// margin-right: 30rpx;
			}
			.select{
				width: 40rpx;
				height: 40rpx;
				// border: 1px dashed #000000;
				margin-left: auto;
				background-image: url(../../static/imgs/charge/weixuan.png);
				background-size: 38rpx 38rpx;
				background-repeat: no-repeat;
			}
			.bgimg{
				background-image: url(../../static/imgs/charge/gouxuan.png);
				background-size: 38rpx 38rpx;
				background-repeat: no-repeat;
			}
		}
	}
	.next-btn{
		margin: 60rpx auto;
		width: 240rpx;
		height: 90rpx;
		color: #ffffff;
		border-radius: 45rpx;
		background: linear-gradient(to right,#757EFB,#A10CE2);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
}
</style>
