<template>
	<view class="content">
		<scroll-view class="tab" id="tab" :show-scrollbar="false" :scroll-x="true" :scroll-into-view="tabScrollInto">
			<view class="tabContent" style="display: flex; flex-direction: column;">
				<view style="display: flex;flex-direction: row;">
					<view class="tabItem" v-for="(tab,tabItemIndex) in tabList" :key="tab.id" :id="tab.id" :data-id="tabItemIndex"
						:data-current="tabItemIndex" @click="pressScrollViewItem(tab,tabItemIndex)">
						<text class="tabItemTitle"
							:class="tabIndex==tabItemIndex ? 'tabItemTitleActive' : ''"
							:style="{width:tabList[tabItemIndex].width + 'px'}"
							>{{tab.title}}</text>
					</view><strong></strong>
				</view>
				<view class="tabLineView">
					<view class="tabLine" :class="isPress ? 'tabLineActive':'tabLineActive'"
						:style="{left: tabItemLineLeft + 'px', width: tabItemLineWidth + 'px'}"></view>

				</view>
			</view>
		</scroll-view>

		<swiper class="childPageView" :current="tabIndex" :duration="250" @change="swiperChange"
			@animationfinish="swiperChangeEnd" @onAnimationEnd="swiperChangeEnd" :style="{height: swiperHeight+'px'}">
			<swiper-item class="childPageViewItem" v-for="(page, childPageViewItemIndex) in tabList" :key="childPageViewItemIndex">
                <view  class="body-item">
					<scroll-view  scroll-y="true" :style="{height: swiperHeight+'px'}">
						<view v-if="orderList.length>0"  class="order-list">
						   <!-- 引入item组件 -->
							<order-item v-for="(item,index) in orderList" :key="index" :item="item" @itemclick="itemClick" @cancelorder="cancelOrder" ></order-item>
						</view>
						<view v-else class="no-data">
							<view class="no-data-box">
								<image src="../../static/imgs/order/nodata.png" mode="aspectFit"></image>
								<text>no more date~</text>
							</view>	
						</view>
					</scroll-view>
                </view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import HomeApi from '../../api/HomeApi.js'
	import orderItem from './orderItem.vue'
	export default {
		components:{
			orderItem
		},
		data() {
			return {
				tabList: [{
					id: "tabItem0",
					title: 'ALL',
					width:60,
					status:''
				}, {
					id: "tabItem1",
					title: 'PENDING',
					width:90,
					status:'0'
				}, {
					id: "tabItem2",
					title: 'COMPLETED',
					width:100,
					status:'1'
				}, {
					id: "tabItem3",
					title: 'FREEZING',
					width:90,
					status:'2'
				},],
				tabIndex: 0,
				tabScrollInto: "",
				tabListSize: {},
				tabItemLineLeft: 0,
				tabItemLineWidth: 0,
				isPress: false,
				swiperHeight: 0,
				orderList:[],
                show: false,
				status:''
			}
		},
		onLoad() {

			let system = uni.getSystemInfoSync();
			this.swiperHeight = system.windowHeight - 44;
		
		},
		onTabItemTap : function(e) {
			this.initData()
		    // e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
		},
		onReady() {

		
		},
		methods: {
			itemClick(item){
				console.log(666)
				console.log(item);
				console.log(777)
			},
			initData(){
				const userInfo = uni.getStorageSync('userInfo');
				if(!userInfo){
					uni.navigateTo({
					    url: '/pages/loginPage/loginPage'
					});
					return
				}
				let userMes=JSON.parse(userInfo)
				let parmas = {
					pageNum:"1",
					pageSize:"10",
					userId:userMes.userId,
					status:this.status
				}
				HomeApi.getUserBook_Api(parmas).then(res => {
					if(res.responseCode == '0000'){
						console.log("555")
						if(res.data && res.data.rows.length>0){
							this.orderList = res.data.rows
						}else{
							this.orderList = []
						}
						
						
					}
				})
				
				
			},
			pressScrollViewItem(tab,tabItemIndex) {
				// let index = e.target.dataset.current || e.currentTarget.dataset.current;
				// this.isPress = true;
				// this.setTabSelect(index);
				let index = tabItemIndex
				this.isPress = true;
				this.setTabSelect(index);
				this.status=tab.status
				this.initData()
			},
			swiperChange(e) {
				let index = e.target.current || e.detail.current;
				this.tabIndex = index;
				this.setTabSelect(this.tabIndex);
				this.status=this.tabList[index].status;
				this.initData()
				
			},
			setTabItemDistance() {

				var queryTabSize = uni.createSelectorQuery().in(this);
				for (var i = 0; i < this.tabList.length; i++) {
					queryTabSize.select('#' + this.tabList[i].id).boundingClientRect();
				}
				queryTabSize.exec(rects => {
					rects.forEach((rect) => {
						this.tabListSize[rect.dataset.id] = rect;
					})
					console.log(this.tabListSize);
					this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this
							.tabIndex]
						.width);
				});

			},
			setTabItemLinePosition(left, width) {
				this.tabItemLineLeft = left;
				this.tabItemLineWidth = width;
			},
			swiperChangeEnd(e) {

				this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);

			},
			setTabSelect(index) {

				this.tabIndex = index;
				this.tabScrollInto = this.tabList[index].id;

			},
			
			
			// 取消按钮
			cancelOrder(obj){
				let item=obj.item;
				let status=obj.status
				let parmas = {
					status:status,      //status = 1 表示 做任务 status = 2 表示取消任务
				    orderId:item.orderId,
			    }
				HomeApi.userDoingTask_Api(parmas).then(res => {
					if(res.responseCode == '0000'){
						if(status=='1'){
							uni.showToast({
							    title: 'Order Compledted',
							    duration: 2000,
								icon:'none'
							});
							this.getUserMes()
						}
						else{
							uni.showToast({
							    title: 'Cancel Success',
							    duration: 2000,
								icon:'none'
							});
						}
						this.initData()
					}
					else{
						uni.showToast({
						    title: res.responseMsg,
						    duration: 2000,
							icon:'none'
						});
					}
					//err-2 订单已经结束；err-1; //余额不足；err0; //任务失败；err-3; //订单发起人和付款人不一致
					
				})
				
			},

		}
	}
</script>

<style lang="scss" scoped>
	.no-data{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.no-data-box{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 200rpx;
		image{
			width: 260rpx;
			height: 380rpx;
		}
	}
	page{
		background-color: #fceeff;
	}
	.order-list{
		margin-top: 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.body-item{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.content {
		/* flex: 1; */
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.tab {
		/* #ifdef APP-PLUS */
		width: 100vw;
		/* #endif */
		height: 44px;
		display: flex;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	/* 隐藏滚动条 */

	.tab ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.tabLineView {
		position: relative;
		height: 2px;
		background-color: transparent;
		
	}

	.tabLine {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		background-color: #6d00be;
	}

	.tabLineActive {
		transition-duration: 0.3s;
		transition-property: left;
	}

	.childPageView {
		display: flex;
		flex-direction: column;
	}

	.tabItem {
		/* #ifndef APP-PLUS */
		/* display: inline-block; */
		/* #endif */
		display: flex;
		margin-right: 20rpx;
		
		/* flex-wrap: nowrap; */
		
		/* 
		padding-left: 20px;
		padding-right: 20px; */
		
	}

	.tabItemTitle {
		font-size: 14px;
		height: 42px;
		line-height: 40px;
		color: #29292C;
		font-weight: 700;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.tabItemTitleActive {
		color: #6d00be;
	}

	.childPageViewItem {
		flex: 1;
		flex-direction: column;
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
