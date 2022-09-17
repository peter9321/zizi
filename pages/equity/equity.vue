<template>
	<view class="main">
		<view class="top">
			总股权：0（股）
		</view>
		<view class="btn">
			申请回购
		</view>
		<view class="table">
			<view class="line">
				<view class="line-item td1">
					投资产品
				</view>
				<view class="line-item td2">
					投资状态
				</view>
				<view class="line-item td31">
					投资时间
				</view>
				<view class="line-item td4">
					股权
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
	.top{
		text-align: center;
		margin-top: 40rpx;
	}
	.btn{
		height: 70rpx;
		width: 650rpx;
		border-radius: 6px;
		text-align: center;
		color: #ffffff;
		background: #009688;
		line-height: 70rpx;
		margin: 40rpx auto;
	}
	.table{
		.line{
			border-top: 1px solid #ebebeb;
			display: flex;
			.line-item{
				padding: 10rpx 20rpx;
				border-right: 1px solid #ebebeb;
				border-bottom: 1px solid #ebebeb;
				font-size: 14px;
				text-align: center;
			}
			.td1{
				flex: 1;
			}
		}
	}
}
</style>
