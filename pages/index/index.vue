<template>
	 <view class="main-page">
		 <!-- 顶部状态栏 -->
		 <view class="header">
		 	<view class="logo-area">
				<image mode="aspectFit" class="logo" src="../../static/images/logo.png" ></image>
				<image mode="aspectFit" class="logo-name" src="../../static/images/logo-name.png" ></image>
		 	</view>
			
			<view class="login-area">
				<view class="login">
					登录
				</view>
				/
				<view class="register">
					注册
				</view>
			</view>
		 </view>
		<!-- ../../static/images/n1.png -->
		 <view class="video-box">
			 <video id="myVideo" class="video-item" src="../../static/video.mp4" 
			                      show-fullscreen-btn poster="../../static/images/n1.png" controls></video>
		 </view>
		 <view class="notice-box">
		 	<u-notice-bar class="nb" icon="" mode="horizontal" :list="list" color="#ffffff" bgColor="none"></u-notice-bar>
		 	<!-- <u-notice-bar mode="horizontal" :list="list" bg-color="#FDF7FF"></u-notice-bar> -->
		 </view>
		 
		 <!-- 轮播图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :autoplay="true" acceleration="true" indicator-dots="true" indicator-color="#B8B8B8" indicator-active-color="#ffffff">
						<swiper-item >
							<view class="swiper-item uni-bg-red"><image   style="width: 100%; height: 280rpx"  src="../../static/imgs/index/swiper/banner1.png" mode=""></image></view>
						</swiper-item>
						<swiper-item >
							<view class="swiper-item uni-bg-green"><image  style="width: 100%; height: 280rpx"  src="../../static/imgs/index/swiper/banner2.png" mode=""></image></view>
						</swiper-item>
						<swiper-item >
							<view class="swiper-item uni-bg-green"><image  style="width: 100%; height: 280rpx"  src="../../static/imgs/index/swiper/banner3.png" mode=""></image></view>
						</swiper-item>
						
					</swiper>
				</view>
			</view>
		</view>
		
		<!-- 消息提醒区 -->
		
		
	
		
	</view>
</template>

<script>
import maoScroll from '../../components/mao-scroll/mao-scroll.vue';
import HomeApi from '../../api/HomeApi.js'
export default {
	components:{
		maoScroll
	},
	data() {
		return {
			title: 'Hello',
			count: 30,
			showNum: 4,
			lineHeight: 100,
			animationScroll: 600,
			animation: 2000,
			moneyList:[],
			list:[
				'你好',
				'北京欢迎你'
			],
			platformList:[],
			current: {
				poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				name: '致爱丽丝',
				author: '暂无',
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
			},
			audioAction: {
				method: 'pause'
			}
		}
	},
	onLoad() {
		   
			
		},
	methods: {
		jumpTast(item){
			let id = item.id
			let platformName=item.platformName
			let commissionRate=item.commissionRate
			// return 
			uni.navigateTo({  
				url: "/pages/index/task?id="+id+'&'+'platformName='+platformName+'&'+'commissionRate='+commissionRate,
				animationType: "slide-in-bottom",
				animationDuration: 150
			})
		},
		//获取佣金列表
		initMoneyList(){
			
			HomeApi.getMoneyList_Api({}).then(res => {
				if(res.responseCode == '0000'){
					this.moneyList = res.data
				}
			})
		},
		initData(){
			HomeApi.getIndexData_Api({}).then(res => {
				this.platformList = res.data
			})
		},
		
		jumpSysmessage(){
			uni.navigateTo({
				url:'../sysMessage/sysMessage'
			})
		},
		jumpNovice(){
			uni.navigateTo({
				url:'../noviceTutorial/noviceTutorial'
			})
		},
		jumpIntro(){
			uni.navigateTo({
				url:'../introPages/makemoneyIntro'
			})
		},
		jumpChargeMethods() {
			uni.navigateTo({
				url:'../reCharge/chargeMethods'
			})
		},
		jumpWithDraw() {
			uni.navigateTo({
				url:'../withDraw/withDraw'
			})
		}
		
		
	}
}
</script>

<style lang="scss" scoped>
 @import '../../static/iconfont/css/icon.css';
.main-page{
	background: linear-gradient(to right,#ff0000,#ff9933);
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 88rpx;
		background: #E73845;
		padding: 10rpx 20rpx;
		.logo-area{
			display: flex;
			.logo{
				width: 200rpx;
				height: 48rpx;
			}
			.logo-name{
				width: 208rpx;
				height: 48rpx;
				margin-left: 20rpx;
				border-left: 1rpx solid #ffffff;
			}
		}
		.login-area{
			display: flex;
			align-items: center;
			justify-content: center;
			color: #ffffff;
		}
	}
	.video-box{
		width: 735rpx;
		height: 430rpx;
		margin: 0 auto;
		background: #ffffff;
		padding: 10rpx;
		border-radius: 10rpx;
		margin-top: 5rpx;
		.video-item{
			width: 100%;
			height:100%;
		}
	}
}
</style>
