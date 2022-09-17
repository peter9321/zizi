<template>
	<view class="invest-record">
		<view class="table">
			<view class="top-line">
				<view class="left">
					订单号
				</view>
				<view class="mid">
					充值金额
				</view>
				<view class="mid">
					充值方式
				</view>
				<view class="right">
					订单状态
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
					09-17 01:51
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
			// border-right: none;
			margin-left: -2rpx;
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.left{
			width: 157rpx;
		}
		.mid{
			width: 197rpx;
		}
		.right{
			width: 197rpx;
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
