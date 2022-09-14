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
				@change="changeTime"
			/>
			<view class="search-btn" @click="getQueryfunds()">
				search
			</view>
		</view>
		
		<view class="content">
			<scroll-view class="tab" id="tab" :show-scrollbar="false" :scroll-x="true" :scroll-into-view="tabScrollInto">
				<view class="tabContent" style="display: flex; flex-direction: column;">
					<view style="display: flex;flex-direction: row;">
						<view class="tabItem" v-for="(tab,tabItemIndex) in tabList" :key="tab.id" :id="tab.id" :data-id="tabItemIndex"
							:data-current="tabItemIndex" @click="pressScrollViewItem">
							<text class="tabItemTitle"
								:class="tabIndex==tabItemIndex ? 'tabItemTitleActive' : ''"
								:style="{width:tabList[tabItemIndex].width + 'px'}"
								>{{tab.title}}</text>
						</view>
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
		
					<view v-if="orderList.length>0"  class="order-list">
					   <view class="list" v-for="(item,index) in orderList" :key="index">
							<view class="left">
								<view class="type">
									{{filterType(item.tradeType)}}
								</view>
								<view class="time">
									{{getTime(item.tradeTime)}}
								</view>
							</view>
							<view class="right">
								{{item.tradeAmount}}
							</view>
					   </view>
						
					</view>
					<view v-else class="no-data">
						<view class="no-data-box">
							<image src="../../static/imgs/order/nodata.png" mode="aspectFit"></image>
							<text>no more date~</text>
						</view>	
					</view>
		
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import HomeApi from '../../api/HomeApi.js';
export default {
	data() {
		return {
			// single: "2021-04-3",
			// datetimesingle: "2021-04-3",
			range: [],
			// datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
			tabList: [{
				id: "tabItem0",
				title: 'All',
				width:50,
				tabId:'',
			}, {
				id: "tabItem1",
				title: 'Withdraw',
				width:90,
				tabId:'2'
			}, {
				id: "tabItem2",
				title: 'Deposit',
				width:90,
				tabId:'3'
			}, {
				id: "tabItem3",
				title: 'Team \n commission',
				width:80,
				tabId:'1'
			} ],
			tabIndex: 0,
			tabScrollInto: "",
			tabListSize: {},
			tabItemLineLeft: 0,
			tabItemLineWidth: 0,
			isPress: false,
			swiperHeight: 0,
			
			orderList:[],
			userId:'',
			queryTimeB:'',
			queryTimeE:'',
			typeId:''
		}
	},
	mounted() {
		// setTimeout(() => {
		// 	this.datetimesingle = "2021-5-1";
		// 	 this.single = "2021-5-1";
		// }, 1000);
	},
	
	onLoad() {
		this.getToday()
		let system = uni.getSystemInfoSync();
		this.swiperHeight = system.windowHeight - 44;
		console.log(this.swiperHeight);
		
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
		// this.getTime(1637397901610)
		
	},
	onReady() {
	
		this.setTabItemDistance();
		this.setTabSelect(this.tabIndex);
	},
	watch: {
		range(newval) {
			console.log("范围选:", this.range);
		},
	},
	methods: {
		changeTime(changeRange){
			console.log('898989')
			console.log(changeRange)
			this.queryTimeB=changeRange[0];
			this.queryTimeE=changeRange[1];
			
		},
		getToday(){
				let myDate = new Date();
				let yy=myDate.getFullYear();
				let mm=(myDate.getMonth()+1)>9?myDate.getMonth()+1:'0'+myDate.getMonth()+1
				let dd=myDate.getDate()>9?myDate.getDate():'0'+myDate.getDate()
				let today=yy+'-'+mm+'-'+dd;
				// this.range=[today,today]
				// this.queryTimeB=today
				// this.queryTimeE=today
		},
		filterType(type){
			if(type==1){
				return "Order commission"
			}
			else if(type==2){
				return "Deposit"
			}
			else{
				return "Withdraw"
			}
		},
		getTime(time){
			let ntime=Number(time)
			let date = new Date(ntime);
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = date.getDate()< 10 ? '0'+date.getDate()+' ': date.getDate()+' ';
			let h = date.getHours()< 10 ? '0'+date.getHours()+':': date.getHours()+':';
			let m = date.getMinutes()< 10 ? '0'+date.getMinutes()+':': date.getMinutes()+':'; 
			let s = date.getSeconds()< 10 ? '0'+date.getSeconds(): date.getSeconds(); 
			return (Y+M+D+h+m+s); 
		},
		getQueryfunds(){
			let parmas={
				pageNum:1,
				pageSize:10,
				userId:this.userId,
				typeId:this.typeId,  //佣金1，充值2，提现3
				queryTimeB:this.queryTimeB,
				queryTimeE:this.queryTimeE,
			}
			HomeApi.getQueryfunds_Api(parmas).then(res=>{
				console.log('747474');
				console.log(res)
				if(res.data){
					this.orderList=res.data.rows
				}else{
					this.orderList=[]
				}
				
				console.log(this.orderList)
				
				
				
			})
		},
		change(e) {
			this.single = e;
			console.log("-change事件:", e);
		},
		pressScrollViewItem(e) {
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			this.isPress = true;
			this.setTabSelect(index);
		},
		swiperChange(e) {
			let index = e.target.current || e.detail.current;
			
			this.tabIndex = index;
			
			this.setTabSelect(this.tabIndex);
			this.typeId=this.tabList[index].tabId
			console.log('787878')
			console.log(this.typeId)
			this.getQueryfunds()
			
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
			console.log(this.tabScrollInto);
		
		},
		
	}
}
</script>

<style lang="scss" scoped>
@import '../../static/iconfont/css/icon.css';
page{
	background-color: #EEF1FA;
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
//tab开始
	
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
	background-color: #ffffff;
	height: 100rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	width: 710rpx;
	margin: 0 auto;
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
	left: -8px;
	height: 2px;
	background-color: transparent;
	
}

.tabLine {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 10px;
	width: 0;
	background-color: #6d00be;
	// background-color: red;
}

.tabLineActive {
	transition-duration: 0.3s;
	transition-property: left;
}

.childPageView {
	margin: 20rpx auto 0;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	width: 710rpx;
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
	height: 48px;
	line-height: 20px;
	color: #29292C;
	font-weight: 700;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

.tabItemTitleActive {
	color: #6d00be;
}

.childPageViewItem {
	flex: 1;
	flex-direction: column;
	.order-list{
		.list{
			width: 650rpx;
			height: 136rpx;
			border-bottom: 1rpx solid #F1F1F1;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.left{
				.type{
					color: #333333 ;
					font-size: 30rpx;
					font-weight: 600;
				}
				.time{
					margin-top: 14rpx;
					color: #999999;
					font-size: 24rpx;
				}
			}
			.right{
				font-size: 30rpx;
				color: #1C731B ;
				font-weight: 600;
			}
		}
	}
}

</style>
