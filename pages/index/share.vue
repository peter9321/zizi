<template>
	<view class="share-page">
		<view class="share-btn">
			<image src="../../static/imgs/share/Share_img_share.png" mode=""></image>
		</view>
		<view class="text-box">
			
		</view>
		<view class="code-box">
			<view class="qr-box">
				<!-- <text class="title">Share QR code</text>
				<image src="../../static/imgs/share/qrcode.png" mode=""></image>
				<view class="btn"><text>save image</text></view> -->
				<text class="title">Invitation Code</text>
				<text class="title" style="margin-top: 20rpx;">{{invitationCode}}</text>
				<view class="btn" @click="copyCode"><text>Copy</text></view>
			</view>
			<view class="address-box">
				<text class="title">Share address</text>
				<text class="link">{{link}}</text>
				<view class="btn" @click="copyLink">Copy Link</view>
			</view>
		</view>
		<view class="rule-box">
			<text class="title">Rule</text>
			<text class="ruletext"> After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can get a reward of  
After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can get a reward of  After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can get a reward of  After completing the top-up of the 3 friends recommended on the day, you will receive a total of 158 rupees. All rewards are paid cumulatively. In addition, the invited friends can ..</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invitationCode:'',
				link:'https://dribbble.com/shots/16641974-OpenNFT'
			}
		},
		onLoad() {
			const userInfo = uni.getStorageSync('userInfo');
			if(!userInfo){
				uni.navigateTo({
				    url: '/pages/loginPage/loginPage'
				});
				return
			}
			let userObj=JSON.parse(userInfo)
			this.invitationCode=userObj.invitationCode
		},
		onTabItemTap : function(e) {
			const userInfo = uni.getStorageSync('userInfo');
			if(!userInfo){
				uni.navigateTo({
				    url: '/pages/loginPage/loginPage'
				});
				return
			}
			let userObj=JSON.parse(userInfo);
			this.invitationCode=userObj.invitationCode
		    // e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
		},
		methods: {
			copyLink(){
				uni.setClipboardData({
				    data: this.link,
				    success: function () {
				        uni.showToast({
				            title: 'Copy Success',
				            duration: 2000,
				        	icon:'none'
				        });
				    }
				});
			},
			copyCode(){
				uni.setClipboardData({
				    data: this.invitationCode,
				    success: function () {
				        uni.showToast({
				            title: 'Copy Success',
				            duration: 2000,
				        	icon:'none'
				        });
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>

page{
	 background-color: #fdf2ff;
 }
.share-btn{
	position: fixed;
	right: 20rpx;
	bottom: 140rpx;
	width: 108rpx;
	height: 108rpx;
	image{
		width: 100%;
		height: 100%;
	}
}
.text-box{
	background-image: url(../../static/imgs/share/top_bg.png);
	background-size: 750rpx 307rpx;
	width: 750rpx;
	height: 308rpx;
}
 .code-box{
	 box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.15);
	 border-radius: 10px;
	 padding: 24rpx 16rpx;
	 background-color: #ffffff;
	 width: 710rpx;
	 margin: 20rpx auto;
	 display: flex;
	 flex-direction: column;
	 justify-content: flex-start;
	 align-items: center;
	 .qr-box,.address-box{
		 width: 670rpx;
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 .title{
			 height: 36rpx;
			 font-family: Times-Bold;
			 font-size: 36rpx;
			 color: #29292C;
			 font-weight: 700;
			 
		 }
		 .link{
				 height: 36rpx;
				 font-size: 28rpx;
				 color: #666666;
				 text-align: center;
				 line-height: 36rpx;
		 }
		 image{
			 width: 200rpx;
			 height: 200rpx;
			 margin-top: 20rpx;
		 }
		 .btn{
			 margin: 24rpx 0;
			 color: #ffffff;
			 width: 200rpx;
			 height: 64rpx;
			 font-size: 28rpx;
			 line-height: 64rpx;
			 text-align: center;
			 background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
			 box-shadow: 0px 2rpx 4rpx 0px rgba(0,0,0,0.3);
			 border-radius: 16px;
			 display: flex;
			 flex-direction: row;
			 justify-content: center;
			 align-items: center;
		 }
	 }
	 .qr-box{
		 border-bottom: 2rpx solid #f2f2f2;
	 }
	 .address-box{
		 .title{
			 margin: 24rpx 0;
		 }
	 }
	 
 }
 .rule-box{
	 padding: 0 20rpx 20rpx;
	 width: 710rpx;
	 background-color: #ffffff;
	 margin: 20rpx auto 48rpx;
	 box-shadow: 0px 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	 border-radius: 20rpx;
	 display: flex;
	 flex-direction: column;
	 .title{
		 margin: 20rpx auto;
		 font-weight: 700;
	 }
	 .ruletext{
		 font-size: 28rpx;
		 color: #29292C;
		 line-height: 36rpx;
		 font-weight: 500;
	 }
	 
 }
</style>
