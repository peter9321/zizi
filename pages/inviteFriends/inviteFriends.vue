<template>
	<view class="main">
		<view class="top">
			<text>推荐奖励：</text>
			<text>一级17% 二级5% 三级3%</text>
		</view>
		<view class="qr-box">
			<image src="../../static/images/erweima.png" mode=""></image>
		</view>
		<view class="my-code">
			我的推荐码：775912375
		</view>
		<view class="list-box">
			<view class="list-tit">
				我推荐的会员
			</view>
			<view class="list-content">
				<view class="list-line">
					<view class="item-tit">
						下级会员账号
					</view>
					<view class="item-tit">
						下级层级
					</view>
					<view class="item-tit">
						注册时间
					</view>
				</view>
				<view class="list-line">
					<view class="item-tit">
						13666325666
					</view>
					<view class="item-tit">
						666
					</view>
					<view class="item-tit">
						2022-06-03
					</view>
				</view>
				<view class="list-line">
					<view class="item-tit">
						13666325666
					</view>
					<view class="item-tit">
						666
					</view>
					<view class="item-tit">
						2022-06-03
					</view>
				</view>
				<view class="list-line">
					<view class="item-tit">
						13666325666
					</view>
					<view class="item-tit">
						666
					</view>
					<view class="item-tit">
						2022-06-03
					</view>
				</view>
				<view class="list-line">
					<view class="item-tit">
						13666325666
					</view>
					<view class="item-tit">
						666
					</view>
					<view class="item-tit">
						2022-06-03
					</view>
				</view>
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
.main{
	background: #f8fafc;
	.top{
		width: 650rpx;
		padding: 20rpx;
		background: #fff3e3;
		margin: 20rpx auto;
		text{
			color: #925f3e;
		}
	}
	.qr-box{
		width: 500rpx;
		height: 500prx;
		margin: 20rpx auto;
		image{
			width: 500rpx;
			height: 500prx;
		}
	}
	.my-code{
		width: 650rpx;
		margin: 0 auto;
		text-align: center;
		padding: 20rpx;
		background: #fff3e3;
		color: #925f3e;
	}
	.list-box{
		background: #ffffff;
		margin-top: 40rpx;
		padding-top: 20rpx;
		.list-tit{
			border-left:  2px solid #385fec;
			padding-left: 20rpx;
			margin-bottom: 20rpx;
		}
		.list-content{
			background: #166182;
			.list-line{
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #ffffff;
				.item-tit{
					width: 33.3%;
					height: 70rpx;
					border-right: 1px solid #fff;
					color: #fff;
					text-align: center;
					line-height: 80rpx;
					font-size: 28rpx;
				}
			}
		}
	}
}
</style>
