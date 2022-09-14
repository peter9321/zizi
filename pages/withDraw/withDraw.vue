<template>
	<view class="withdraw">
		<view class="infobox">
			<view class="top">
				<text class="title">Withdraw amount:</text>
				<text class="fee">Handling fee 0.20%</text>
			</view>
			<view class="wdamount">
				<u-input
				    placeholder="Enter the withdrawal amount"
				    v-model="value"
				    @change="change"
					>
				</u-input>
			</view>
			<view class="info">
				<text class="title">Balance:</text>
				<text class="value">2430.50</text>
			</view>
			<view class="info">
				<text class="title">Orders completed today(50):</text>
				<text class="value txtred">0</text>
			</view>
			<view class="info">
				<text class="title">Number of wthdraw today:</text>
				<text class="value">1</text>
			</view>
			<view class="info">
				<text class="title">Select withdrawal method:</text>
				<text class="value">TRC 20</text>
				<text class="select-btn">></text>
			</view>
			<view class="tr-title">
				Transaction password
			</view>
			<view class="pwinput">
				<jpCoded style="height: 64rpx;" :width="660" :codes="codes" @tokey="toOpen" @inputVal="inputVal"></jpCoded>
			</view>
			<view class="confirm-btn">
				Confirm
			</view>
		</view>
		<view class="reminder">
			<view class="top">
				Friendly Reminders
			</view>
			<text class="txt">
				1.The amount of single withdrawal is between 20~1000000
				2.The payment will be sent before 12amon the next dayafter the withdrawal request approved，the actual time issubject to the system.The bank will charge a portion ofthe handling fee for each withdirawals，and the minimumwithdirawal amount is 20.
				3.Every accounts must complete a minimum purchaseorder of 50in order to withdraw the money.lf themember has not completed the corresponding ordernumber，he/she can not make a withdrawal.The membercan make a full withdrawal if the account has completedmore than 50 orders.
 
			</text>
		</view>
	</view>
</template>

<script>
	import jpCoded from '@/components/jpCoded/jp-coded.vue';
	export default {
		components:{
			jpCoded
		},
		data() {
			return {
				value:'',
				codes: '',
			}
		},
		methods: {
			inputVal(e){
				console.log(e);
			}
		}
	}
</script>
<style lang="scss">
.wdamount{
	background-color: #F5F5FB;
	height: 90rpx;
	display: flex;
	align-items: center;
	padding: 0 16rpx;
	margin: 30rpx 0 40rpx;
}	
</style>
<style lang="scss" scoped>
page{
	background-color: #EEF1FA;
}
.withdraw{
	padding-bottom: 50rpx;
	.infobox{
		width: 712rpx;
		// height: 700rpx;
		margin: 20rpx auto 20rpx;
		padding: 40rpx 26rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		.top{
			display: flex;
			flex-direction: row;
			align-items: center;
			.title{
				font-size: 38rpx;
				margin-right: 20rpx;
				font-weight: 600;
			}
			.fee{
				font-size: 30rpx;
				color: red;
			}
		}
		.info{
			height: 60rpx;
			line-height: 60rpx;
			font-size: 34rpx;
			font-weight: 600;
			color: #333333;
			display: flex;
			flex-direction: row;
			align-items: center;
			.title{
				margin-right: 20rpx;
			}
			.txtred{
				color: #A10CE2;
			}
			.select-btn{
				margin-left: auto;
			}
		}
		.tr-title{
			font-size: 40rpx;
			font-weight: 600;
			margin: 40rpx 0;
		}
		.pwinput{
			// background-color: red;
			width: 100%;
			display: flex;
			justify-content: center;
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
		padding: 40rpx 23rpx;
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
