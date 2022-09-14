<template>
	<view>
		<view class="upload">
			<text class="title">Upload a screenshot of payment</text>
			<view class="upload-btn" @click="chooseImage()">
				
			</view>
		</view>
		<view class="submit-btn">
			Submit screenshot
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chooseImage(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-image: url(../../static/imgs/common/background.png);
	background-size: 100% 100%;
}
.upload{
	margin: 0 auto;
	width: 710rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	border-radius: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	.title{
		margin-top: 40rpx;
		font-size: 36rpx;
		color: #29292C;
		font-weight: 700;
	}
	.upload-btn{
		width: 200rpx;
		height: 200rpx;
		border-radius: 10rpx;
		border: 1rpx solid #666666;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
	}
}
.submit-btn{
	    margin: 40rpx auto;
		width: 710rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: #ffffff;
		background-image: linear-gradient(113deg, #D279F1 0%, #B6B7FF 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.3);
		border-radius: 50rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
}
</style>
