<template>
	<view>
		<view class="contain">
			<view class="list">
				<text class="txt1">How to deposit and withdraw ?</text>
				<text class="iconfont icon-xiangyou1"></text>
			</view>
			<view class="list">
				<text class="txt2">How to do the task ?</text>
				<text class="iconfont icon-xiangyou1"></text>
			</view>
			<view class="list">
				<text class="txt3">How to promote money ?</text>
				<text class="iconfont icon-xiangyou1"></text>
			</view>
			<view class="list">
				<text class="txt4">Deposit Yu'E Bao and receive income ?</text>
				<text class="iconfont icon-xiangyou1"></text>
			</view>
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
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/css/icon.css';
page{
	background-image:url(../../static/imgs/common/background.png) ;
	background-size: 100%;  
}
.contain{
	background-color: #ffffff;
	.list{
		width: 750rpx;
		height: 120rpx;
		line-height: 120rpx;
		border-bottom: 1rpx solid #f2f2f2;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.txt1,.txt2,.txt3,.txt4{
			margin-left: 26rpx;
			padding-left: 70rpx;
			background-repeat: no-repeat;
			background-size: 80rpx;
			background-position: left;
			background-size: 48rpx 48rpx;
		}
		.txt1{
			background-image: url(../../static/imgs/noviceTutorial/help_icon_one.png);
		}
		.txt2{
			background-image: url(../../static/imgs/noviceTutorial/help_icon_two.png);
		}
		.txt3{
			background-image: url(../../static/imgs/noviceTutorial/help_icon_three.png);
		}
		.txt4{
			background-image: url(../../static/imgs/noviceTutorial/help_icon_Four.png);
		}
		.icon-xiangyou1{
			color: #66666D;
			font-size: 48rpx;
			padding-right: 40rpx;
		}
	}
}
</style>
