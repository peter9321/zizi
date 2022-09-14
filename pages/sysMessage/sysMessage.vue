<template>
	<view>
		<view class="notice-box">
			<u-notice-bar mode="horizontal" :list="list" bg-color="#ffffff"></u-notice-bar>
			
			<view class="message-item">
				<view class="title">System notification</view>
				<view class="txt">
					Cute Cartoon Kids Sleeping Pillows 0-10 Years Cotton Infant Baby Prevent Flat Head Pillow Kids  Pillow Kids Pillow Kids Pillow Kids Pillow Kids
				</view>
			</view>
			<view class="message-item">
				<view class="title">System notification</view>
				<view class="txt">
					Cute Cartoon Kids Sleeping Pillows 0-10 Years Cotton Infant Baby Prevent Flat Head Pillow Kids  Pillow Kids Pillow Kids Pillow Kids Pillow Kids
				</view>
			</view>
			<view class="message-item">
				<view class="title">System notification</view>
				<view class="txt">
					Cute Cartoon Kids Sleeping Pillows 0-10 Years Cotton Infant Baby Prevent Flat Head Pillow Kids  Pillow Kids Pillow Kids Pillow Kids Pillow Kids
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
						'寒雨连江夜入吴',
						'平明送客楚山孤',
						'洛阳亲友如相问',
						'一片冰心在玉壶'
					  ]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-image: url(../../static/imgs/common/background.png);
	background-size: 100%;
}
.message-item{
	margin: 20rpx auto 0;
	padding: 28rpx 20rpx;
	width: 710rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	border-radius: 20rpx;
	.title{
		height: 50rpx;
		font-size: 28rpx;
		color: #29292C;
		line-height: 18px;
		font-weight: 700;
	}
	.txt{
		font-size: 24rpx;
		line-height: 40rpx;
	}
}
</style>
