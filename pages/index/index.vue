<template>
	 <view class="main-page">
		 <!-- 顶部状态栏 -->
		 <view class="header">
		 	<view class="logo-area">
				<image mode="aspectFit" class="logo" src="../../static/images/logo.png" ></image>
				<image mode="aspectFit" class="logo-name" src="../../static/images/logo-name.png" ></image>
		 	</view>
			
			<view class="login-area">
				<view class="login" @click="goPage('/pages/login/login')">
					登录
				</view>
				/
				<view class="register" @click="goPage('/pages/register/register')">
					注册
				</view>
			</view>
		 </view>
		 <view class="video-box">
			 <video id="myVideo" class="video-item" src="../../static/video.mp4" 
			                      show-fullscreen-btn poster="../../static/images/n1.png" controls></video>
		 </view>
		 <view class="notice-box">
			<u-notice-bar :text="text1"  color="#ffffff" bgColor="none"></u-notice-bar>
		 	<!-- <u-notice-bar class="nb" icon="" mode="horizontal" :text="text1" color="#ffffff" bgColor="none"></u-notice-bar> -->
		 	<!-- <u-notice-bar mode="horizontal" :list="list" bg-color="#FDF7FF"></u-notice-bar> -->
		 </view>
		<!-- 四个按钮 -->
		 <view class="function-btns">
		 	<view class="btn" @click="goPage('/pages/companyProfile/companyProfile')">
		 		<img src="../../static/images/jieshao.png" alt="">
				<view class="text">
					公司介绍
				</view>
		 	</view>
			<view class="btn" @click="goPage('/pages/userKnow/userKnow')">
				<img src="../../static/images/xuzhi.png" alt="">
				<view class="text">
					用户须知
				</view>
			</view>
			<view class="btn" @click="show = true">
				<img src="../../static/images/qiandao.png" alt="">
				<view class="text">
					每日签到
				</view>
			</view>
			<view class="btn" @click="goPage('/pages/inviteFriends/inviteFriends')">
				<img src="../../static/images/yaoqing.png" alt="">
				<view class="text">
					邀请好友
				</view>
			</view>
		 </view>
		 <view class="project-area">
			<view class="top-btn">
				<view class="btn">
					<img src="../../static/images/grtz.png" alt="">
					个人投资图
				</view>
				<view class="btn">
					<img src="../../static/images/recommend.png" alt="">
					推荐返佣图
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper"  :autoplay="false" acceleration="true" indicator-dots="true" indicator-color="#B8B8B8" indicator-active-color="#ffffff">
							<swiper-item >
								<view class="swiper-item ">
									<view class="top-area">
										<view class="left">
											<view class="hot">
												<img src="../../static/images/hot.png" alt="">
												推荐项目
											</view>
											<view class="name">
												中航储能股权四期体验号
											</view>
										</view>
										<view class="right">
											<view class="text">
												2.99%
											</view>
										</view>
									</view>
									<view class="main-mes">
										<view class="mes-item">
											<text class="tit">7 <text class="ltit">天</text></text>
											<text class="stit">投资期限</text>
										</view>
										<view class="mes-item">
											<text class="tit">7777</text>
											<text class="stit">每日收益（元）</text>
										</view>
										<view class="mes-item">
											<text class="tit">777</text>
											<text class="stit">起购金额（元）</text>
										</view>
									</view>
									<view class="desc-box">
										<view class="left">
											<view class="line">
												<text class="tit">预期收益率：
												  <text class="stit" style="color: red;">21.1%</text>
												</text>
											</view>
											<view class="line">
												<text class="tit">项目规模：
												  <text class="stit" style="color: black;">10000000万元</text>
												</text>
											</view>
											<view class="line">
												<text class="tit">按天付收益，：
												  <text class="stit">到期还本</text>
												</text>
											</view>
										</view>
										<view class="right">
											<view class="btn">
												立即投资
											</view>
										</view>
									</view>
									<view class="jin">
										<view class="jindu">
											<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
										</view>
										<text style="color: #666;font-size: 14px;">进度5.3%</text>
									</view>
								</view>
							</swiper-item>
							<swiper-item >
								<view class="swiper-item ">
									<view class="">2</view>
								</view>
							</swiper-item>
							<swiper-item >
								<view class="swiper-item ">
									<view class="">3</view>
								</view>
							</swiper-item>
							
						</swiper>
					</view>
				</view>
			</view>
			<!-- 上市进度 -->
			<view class="Listing-progress">
				<view class="title-box">
					<view class="left">
						
					</view>
					<view class="">
						上市进度
					</view>
				</view>
				<view class="main">
					<view class="name">
						<view class="left">
							
						</view>
						<view class="">
							中创新航技术股份有限公司
						</view>
					</view>
					<img src="../../static/images/zhonghang.jpg" alt="">
				</view>
			</view>
		 </view>
		
		
		<u-modal :show="show" title="提示" @confirm="show = false" :content='content'></u-modal>
		
		
	
		
	</view>
</template>

<script>

export default {
	components:{
		
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
			text1:"123",
			platformList:[],
			current: {
				poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				name: '致爱丽丝',
				author: '暂无',
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
			},
			audioAction: {
				method: 'pause'
			},
			show:false,
			content:'签到成功'
		}
	},
	onLoad() {
		this.initData()   
	},
	methods: {
		initData(){
			this.$myRuquest({
				url: '/config',
				method:'GET'
			}).then(res => {
				console.log(res)
				console.log("99999res")
			})
		},
		goPage(url){
			console.log(666)
			uni.navigateTo({
				url: url
			});
		},
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
	.function-btns{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 10px;
		color: #fff;
		font-size: 12px;
		.btn{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.icon-qianbao2{
			font-size: 26px;
			margin-bottom:10px;
		}
	}
	.project-area{
		background-color: #fff;
		margin: 5px;
		padding-top: 10px;
		padding-bottom: 100px;
		border-radius: 5px;	
		.top-btn{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			.btn{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				width: 150px;
				height: 65px;
				border-radius: 5px;
				background: rgba(231, 56, 69, 0.05);
				color: #E73845;
				img{
					margin-right:5px;
				}
			}
		}
		.uni-padding-wrap{
			// width: 100%;
			margin: 20px 5px;
			.swiper{
				height: 250px;
				.swiper-item{
					.top-area{
						border-radius: 10px 10px 0 0;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						height: 80px;
						border-bottom: 1px solid #e7e7e7;
						background: blue;
						background: linear-gradient(
						180deg, rgba(231, 56, 69, 0.2) 0%, rgba(231, 56, 69, 0.2) 0.01%, rgba(231, 56, 69, 0.02) 21.88%);
						.left{
							.hot{
								color: #E73845;
								display: flex;
								flex-direction: row;
								font-size: 12px;
								font-weight: 400;
								margin: 15px 0 10px 15px;
								img{
									margin-right: 6px;
								}
							}
							.name{
								margin-left: 8px;
							}
						}
						.right{
							color: #f20;
							display: flex;
							align-items: flex-end;
							justify-content: center;
							width: 100px;
							height: 100%;
							.text{
								margin-bottom: 5px;
							}
						}
					}
					.main-mes{
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 20rpx 20rpx;
						.mes-item{
							
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							.tit{
								color: #f20;
								font-size: 5vw;
								.ltit{
									font-size: 3vw;
									color: black;
								}
							}
							.stit{
								font-size: 3vw;
								color: black;
								margin-top: 10rpx;
							}
						}
					}
					.desc-box{
						display: flex;
						padding: 0rpx 20rpx;
						.left{
							flex: 1;
							display: flex;
							flex-direction: column;
							.line{
								display: flex;
								margin-bottom: 10rpx;
								text{
									font-size: 28rpx;
									color: #969696;
								}
							}
						}
						.right{
							width: 180rpx;
							height: 60rpx;
							background: #E73845;
							border-radius: 4px;
							line-height: 60rpx;
							text-align: center;
							color: #ffffff;
							font-size: 28rpx;
							margin-top: 10rpx;
						}
					}
					.jin{
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 0 20rpx;
						margin-top: 10rpx;
						text{
							color: #05a5cb;
							font-size: 24rpx;
						}
						.jindu{
							width: 420rpx;
							display: flex;
							align-items: center;
							// margin:0 20rpx
						}
					}
				}
			}
		}
		.Listing-progress{
			.title-box{
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 10px 15px;
				margin-top: 5px;
				border-top: 2px solid #287593;
				border-bottom: 2px solid #287593;
				.left{
					height: 15px;
					width: 4px;
					background: #fd480f;
					margin-right: 10px;
				}
			}
			.main{
				margin: 20px;
				box-shadow:0px 5px 5px 0px gray;
				.name{
					display: flex;
					flex-direction: row;
					align-items: center;
					font-size: 18px;
					padding:15px 0;
					.left{
						margin:0 20px;
						width: 1px;
						height: 30px;
						background: red;
					}
				}
				img{
					margin-top: 10px;
					width: 100%;
				}
			}
		}
	}
}
</style>
