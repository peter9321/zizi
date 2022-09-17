<template>
	<view class="fund-state">
		<view class="table">
			<view class="top-line">
				<view class="left">
					说明
				</view>
				<view class="mid">
					金额
				</view>
				<view class="right">
					时间
				</view>
			</view>
			<view class="line">
				<view class="left">
					签到1元
				</view>
				<view class="mid">
					+1
				</view>
				<view class="right">
					09-17 01:51
				</view>
			</view>
			<view class="line">
				<view class="left">
					签到1元
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
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.left,.right{
			width: 240rpx;
		}
		.mid{
			width: 150rpx;
			border-left: none;
			border-right: none;
		}
		.right{
			width: 356rpx;
		}
	}
	.top-line{
		font-weight: 800;
	}
	.line{
		margin-top: -2rpx;
		.mid{
			border-left: none;
			border-right: none;
			color: #38c172;
		}
		.right{
			color: #212529;
		}
	}
	
}
</style>
