<template>
	<view class="acc-detail">
		<view class="time-box">
			<view class=" riqi iconfont icon-riqi">
				
			</view>
			<uni-datetime-picker
				v-model="range"
				type="daterange"
				start="2021-3-20"
				end="2021-12-20"
				rangeSeparator="~"
			/>
			<view class="search-btn">
				search
			</view>
		</view>
		
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
							<!-- <order-item v-for="(item,index) in orderList" :key="index" :item="item" @itemclick="itemClick" @cancelorder="cancelOrder" ></order-item> -->
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
import HomeApi from '../../api/HomeApi.js';
export default {
	data() {
		return {
			// single: "2021-04-3",
			// datetimesingle: "2021-04-3",
			range: ["2021-03-8", "2021-12-20"],
			// datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
			
			tabList: [{
				id: "tabItem0",
				title: 'ALL',
				width:60,
				status:''
			}, {
				id: "tabItem1",
				title: 'Withdraw',
				width:90,
				status:'0'
			}, {
				id: "tabItem2",
				title: 'Deposit',
				width:100,
				status:'1'
			}, {
				id: "tabItem3",
				title: 'commission',
				width:90,
				status:'2'
			}
			],
			tabIndex: 0,
			tabScrollInto: "",
			tabListSize: {},
			tabItemLineLeft: 0,
			tabItemLineWidth: 0,
			isPress: false,
			swiperHeight: 0,
			orderList:[],
			show: false,
			status:'',
			userId:''
		}
	},
	mounted() {
		// setTimeout(() => {
		// 	this.datetimesingle = "2021-5-1";
		// 	 this.single = "2021-5-1";
		// }, 1000);
	},
	onLoad() {
		uni.getStorage({
		    key: 'userInfo',
		    success:(res)=>{
				let inf=JSON.parse(res.data)
				console.log(inf)
				console.log("inf")
				this.userId = inf.userId
				this.getQueryfunds()
		    }
		})
	},
	watch: {
		// datetimesingle(newval) {
		//     console.log("单选:", this.datetimesingle);
		// },
		range(newval) {
			console.log("范围选:", this.range);
		},
		// datetimerange(newval) {
		//     console.log("范围选:", this.datetimerange);
		// },
	},
	methods: {
		getQueryfunds(){
			let parmas={
				pageNum:1,
				pageSize:10,
				userId:this.userId,
				typeId:'1',  //佣金1，充值2，提现3
				queryTimeB:'2021-11-01',
				queryTimeE:'2021-11-30',
			}
			HomeApi.getQueryfunds_Api(parmas).then(res=>{
				console.log('747474');
				console.log(res)
			})
		},
		change(e) {
			this.single = e;
			console.log("-change事件:", e);
		},
		pressScrollViewItem(tab,tabItemIndex) {
			// let index = e.target.dataset.current || e.currentTarget.dataset.current;
			// this.isPress = true;
			// this.setTabSelect(index);
			let index = tabItemIndex
			this.isPress = true;
			this.setTabSelect(index);
			this.status=tab.status
		},
		swiperChange(e) {
			let index = e.target.current || e.detail.current;
			this.tabIndex = index;
			this.setTabSelect(this.tabIndex);
			this.status=this.tabList[index].status;
			
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
		console.log('99')
		},
		setTabSelect(index) {
			this.tabIndex = index;
			this.tabScrollInto = this.tabList[index].id;
		
		},
	}
}
</script>

<style lang="scss" scoped>
@import '../../static/iconfont/css/icon.css';
.time-box{
	width: 710rpx;
	margin: 20rpx auto 20rpx;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	.riqi{
		position: absolute;
		left: 40rpx;
		z-index: 10;
	}
	.search-btn{
		background-image: linear-gradient(
		113deg, #A700E1 0%, #7285FF 100%);
		width: 120rpx;
		height: 72rpx;
		text-align: center;
		color: #ffffff;
		border-radius: 100rpx;
		line-height: 68rpx;
		position: absolute;
		// top:0;
		right: 0;
	}
}
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
	// page{
	// 	background-color: #fceeff;
	// }
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

</style>
