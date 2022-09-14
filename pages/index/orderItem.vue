<template>
	<view class="order-item" @click="btnClick(item)">
		<!-- 时间和订单状态 -->
		<view class="top">
			<view class="time"><image src="../../static/imgs/order/Order_icon_time.png" mode=""></image><span>{{item.status == 0 || item.status == 2?item.createTime:item.completeTime}}</span></view>
			<text class="state pending" v-if="item.status == 0">PENDING</text>
			<text class="state pending" v-if="item.status == 1">COMPLETED</text>
			<text class="state pending" v-if="item.status == 2">FREEZING</text>
		</view>
		<!-- 商品介绍和商品详情 -->
		<view class="info">
			<view class="img-box"> <image :src="item.imageUrl" mode="aspectFit"></image></view>
			<view class="txt">
				<text class="bolder">[{{item.commodityName}}]</text>
				<text>{{item.commodityDirections}}</text>
			</view>
		</view>
		<!-- 订单数据区 -->
		<view class="order-data">
			<view class="total">
				<text class="note">Total order:</text>
				<text class="amount">$ {{item.orderAmount}}</text>
			</view>
			<view class="commission">
				<text class="note">commission:</text>
				<text class="amount">$ {{item.commission}}</text>
			</view>
		</view>
		<!-- <view  class="submit-btn" @click="cancelOrder(item,'1')">SUBMIT ORDER</view>
		<view  class="submit-btn" @click="cancelOrder(item,'2')">CANCEL ORDER</view> -->
		<view v-if="item.status == 0" class="submit-btn" @click="cancelOrder(item,'1')">SUBMIT ORDER</view>
		<view v-if="item.status == 0" class="submit-btn" @click="cancelOrder(item,'2')">CANCEL ORDER</view>
	</view>
</template>

<script>
	
 export default{
	 name:'orderItem',
	 data(){
		 return{
			 // orderList:[],
		 }
	 },
	 props:{
		  item:{
			  type:Object
		  }
	 }, 
	 created(){
	 },
	 methods:{
		 btnClick(item){
			 this.$emit('itemclick',item)
		 },
		 cancelOrder(item,status){
			 let obj={
				 item:item,
				 status:status
			 }
			 this.$emit('cancelorder',obj)
		 }
	 },
 }
</script>

<style scoped lang="scss">
.order-item{
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 24rpx;
		margin-bottom:30rpx;
		box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.15);
		background-image: url(../../static/imgs/order/bg.png);
		background-size: 710rpx 500rpx;
		.top{
			color: #666666;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			// align-items: center;
			font-size: 26rpx;
			.time{
				width: 300rpx;
				height: 30rpx;
				line-height: 30rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				color: #C348E9;
				image{
					width: 30rpx;
					height: 30rpx;
				}
				span{
					margin-left: 10rpx;
				}
				
			}
			.state{
				text-align: center;
				border-radius: 20rpx;
				padding: 0 20rpx;
				float: right;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
			.pending{
				color: #C348E9;
				background-color:#F6DEFF;
			}
			.complete{
				color: #000000;
				background-color:#FFBC00;
			}
			.freezing{
				color: #ffffff;
				background-color:#FF0000;
			}
			.cancelled{
				color: #A3A9B1;
				background-color:#EEFCF7;
			}
		}
		.info{
			padding: 20rpx 0;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			border-bottom: 1rpx solid #F2f2f2;
			.img-box{
				width: 200rpx;
				height: 108rpx;
				image{
					width: 200rpx;
					height: 108rpx;
					border-radius: 10rpx;
				}
			}
			.txt{
				margin-left: 16rpx;
				display: flex;
				flex-direction: column;
				width: 446rpx;
				line-height: 36rpx;
				font-size: 26rpx;
				.bolder{
					margin-right: 5rpx;
					font-weight: bold;
					font-size: 28rpx;
				}
			}
		}
		.order-data{
			display: flex;
			flex-direction: column;
			justify-content:flex-start;
			.total,.commission{
				// height: 60rpx;
				line-height: 60rpx;
				font-size: 28rpx;
				display: flex;
				flex-direction: row;
				justify-content:space-between;
				align-items: center;
				.note{
					color: #29292C;
				}
				.amount{
					color: #666666;
				}
			}
		}
		.submit-btn{
			margin: 24rpx 0;
			color: #ffffff;
			background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
			text-align: center;
			height:100rpx;
			line-height: 100rpx;
			border-radius: 50rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}	
</style>
