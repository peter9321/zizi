
<template>
	<view class="order-page">
		<view class="contain-box">
			<!-- 导航栏 -->
			<view class="tab-head">
				
				<view class="tab-item"  :class="[item.isClick ? 'item-active' : '']"  @click="tabChange(item,index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
			</view>
			<!-- 订单列表 -->
			<view class="tab-body">
				<view v-if="0==tabIndex" class="body-item">
					<view class="order-list">
						<view class="order-box" v-for="(item,index) in orderList" :key="index">
							<!-- 时间和订单状态 -->
							<view class="top">
								<text class="time">{{item.status == 0 || item.status == 2?item.createTime:item.completeTime}}</text>
								<text class="state pending" v-if="item.status == 0">PENDING</text>
								<text class="state pending" v-if="item.status == 1">COMPLETED</text>
								<text class="state pending" v-if="item.status == 2">FREEZING</text>
							</view>
							<!-- 商品介绍和商品详情 -->
							<view class="info">
								<view class="img-box"> <image src="../../static/imgs/order/main_pc.jpg" mode=""></image></view>
								<view class="txt">
									<text class="bolder">[{{item.commodityName}}]</text>
									{{item.commodityDirections}}
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
							<!-- 提交订单弹窗 -->
							<u-popup v-model="show" mode="center" border-radius="14" width="720rpx" height="665rpx" closeable >
										<view class="order-popup">
											<view class="title">
												submit all orders
											</view>
											<view class="rush-order">
												time to rush an order: 2021/09/21 16:11:28
											</view>
											<view class="order-number">
												order number UB2109211611284121
											</view>
											<view class="detail">
												<view class="img">
													<image src="../../static/imgs/order/icon.jpg" mode=""></image>
												</view>
												<view class="description">
													<text>BD PrecisionGlide Needle 30G x 1/2 (0.3mmx13mm)Single Use - 100Pcs/Box</text>
												</view>
											</view>
											<view class="total">
												<text class="note">Total order</text>
												<text class="amount">35700.00</text>
											</view>
											<view class="commission">
												<text class="note">commission</text>
												<text class="amount">10710.00</text>
											</view>
											<view class="buttons">
												<view  class="cancel-btn" >CANCEL</view>
												<view  class="submit-btn" >SUBMIT ORDER</view>
											</view>
										</view>			
							</u-popup>
							<view v-if="item.status == 0" class="submit-btn" @click="show = true">SUBMIT ORDER</view>
							<view v-if="item.status == 0" class="submit-btn">CANCEL ORDER</view>
						</view>
						
					</view>
				</view>
				<view v-if="1==tabIndex" class="body-item">pending页面</view>
				<view v-if="2==tabIndex" class="body-item">complete页面</view>
				<view v-if="3==tabIndex" class="body-item">freezing页面</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HomeApi from '../../api/HomeApi.js'
	export default {
		data() {
			return {
				title: 'Hello',
                webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				show: false,
				tabList: [
					{
						name: 'ALL',
						isClick: true,
					},
					{
						name:'PENDING',
						isClick:false
					},
					{
						name:'COMPLETED',
						isClick:false
					},
					{
						name:'FREEZING',
						isClick:false
					}
				],
				tabIndex:0,
				orderList:[]
			}
		},
		onLoad() {
           this.initData()
		},
		methods: {
			initData(){
				
				// try {
				//     let user =  uni.getStorageSync('userInfo');
				//     console.log(userInfo)
				//     //let userMes = JSON.parse(user)
				    
				//     console.log(userMes)
				//     console.log("userInfo")
				// } catch (e) {
				//     // error
				// 	console.log(e)
				// }
				
				uni.getStorage({
				    key: 'userInfo',
				    success:  (res)=> {
				        console.log(res.data);
						let userMes = JSON.parse(res.data)
						console.log(userMes)
						let parmas = {
							pageNum:"1",
							pageSize:"10",
							userId:userMes.userId,
						}
						HomeApi.getUserBook_Api(parmas).then(res => {
							console.log(res)
							console.log("res")
							if(res.responseCode == '0000'){
								console.log("555")
								//this.orderList = res.data.rows
								console.log(this.orderList)
								this.orderList = [
									{
										status:"1",
										commission:'1111',
										orderAmount:'1111',
										commodityDirections:'1111',
										createTime:'2021-10-10',
										completeTime:'2021-10-10'
									},
									{
										status:"1",
										commission:'1111',
										orderAmount:'1111',
										commodityDirections:'1111',
										createTime:'2021-10-10',
										completeTime:'2021-10-10'
									},
								]
							}
						})
				    }
				});
				
				
			},
			tabChange(item,index){
				for(let i=0;i<this.tabList.length;i++){
					console.log(this.tabList[i])
					this.tabList[i].isClick=false
				}
				item.isClick=true
				this.tabIndex=index
				console.log(item.name);
				console.log(index)
				console.log(this.tabIndex)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../static/iconfont/css/icon.css';
page{
	background-color: #fceeff;
}
.order-page{
	display: flex;
	flex-direction: column;
	justify-content:flex-start;
	align-items: center;
	.contain-box{
		width: 710rpx;
	}
}
.item-active{
	color: #6d00be ;
	border-bottom: 1rpx solid #6d00be;
}

.tab-head{
	display: flex;
	flex-direction: row;
	justify-content:flex-start;
	align-items: center;
	.tab-item{
		height: 88rpx;
		line-height: 88rpx;
		font-size: 28rpx;
		padding: 0 14rpx;
	}
}
.tab-body{
	margin-top: 40rpx;
}
.order-box{
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
		align-items: center;
		font-size: 25.6rpx;
		.time{
			color: #C348E9;
			padding-left: 40rpx;
			background-image: url(../../static/imgs/order/Order_icon_time.png);
			background-size: 30rpx 30rpx;
			background-repeat: no-repeat;
		}
		.state{
			text-align: center;
			border-radius: 20rpx;
			padding: 0 20rpx;
			float: right;
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
			width: 446rpx;
			line-height: 36rpx;
			font-size: 22rpx;
			.bolder{
				margin-right: 5rpx;
				font-weight: 600;
			}
		}
	}
	.order-data{
		display: flex;
		flex-direction: column;
		justify-content:flex-start;
		.total,.commission{
			height: 60rpx;
			line-height: 60rpx;
			font-size: 24rpx;
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
	}
}
.order-popup{
	
	.title{
		padding: 32rpx;
		font-size: 40rpx;
	}
	.rush-order,.order-number{
		font-size: 24rpx;
		color: #9e9e9e;
		margin: 12rpx 32rpx;
	}
	.detail{
		display: flex;
		flex-direction: row;
		width: 650rpx;
		margin: 0 auto;
		background-color: #f2f2f2;
		.img{
			width: 136rpx;
			height: 136rpx;
			image{
				width: 136rpx;
				height: 136rpx;
			}
		}
		.description{
			font-size: 24rpx;
			line-height: 52rpx;
			padding-left: 20rpx;
		}
		
	}
	.total,.commission{
		width: 650rpx;
		margin: 40rpx auto;
		font-size: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.commission{
		.amount{
			color: #ff9a2c;
			font-size: 24rpx;
		}
	}
	.buttons{
		display: flex;
		flex-direction: row;
		justify-content: center;
		.cancel-btn,.submit-btn{
			font-size: 32rpx;
			height: 72rpx;
			line-height: 72rpx;
			border-radius: 36rpx;
			padding: 0 24rpx;
			margin-right: 40rpx;
			box-shadow: 0px 6px 6px #d0bcbc;
		}
		.submit-btn{
			color: #ffffff;
			background-color: #6d00be;
			box-shadow: 0px 0px 0px #d0bcbc;
		}
	}
}

</style>
