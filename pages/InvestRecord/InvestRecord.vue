<template>
	<view class="invest-record">
		<view class="table">
			<view class="top-line">
				<view class="left">
					投资产品
				</view>
				<view class="mid">
					投资状态
				</view>
				<view class="mid">
					投资时间
				</view>
				<view class="right">
					协议
				</view>
			</view>
			<view class="line">
				<view class="left">
					签到1元
				</view>
				<view class="mid">
					+1
				</view>
				<view class="mid">
					+1
				</view>
				<view class="right">
					阅读
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
.table{
	font-size: 24rpx;
	margin-top: 10rpx;
	.top-line,.line{
		display: flex;
		.left,.mid,.right{
			border: 1px solid #ebebeb;
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.left{
			width: 374rpx;
		}
		.mid{
			width: 140rpx;
			// border-left: none;
			// border-right: none;
		}
		.right{
			width: 93rpx;
		}
	}
	.top-line{
		font-weight: 800;
	}
	.line{
		margin-top: -2rpx;
		.mid{
			color: #38c172;
		}
		.right{
			color: #212529;
		}
	}
	
}
</style>
