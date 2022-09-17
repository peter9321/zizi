<template>
	<view class="main">
		<view class="tab-header">
			<view class="tab-item" @click="changeTab(item,index)" :class="[tabIndex == index?'acitve':'']" v-for="(item,index) in tabList" :key="index">
				<view class="tab-item-text">{{ item.name }}</view>
			</view>
		</view>
		<view class="tab-content">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					name: '未使用',
				}, {
					name: '已使用',
				}, {
					name: '已过期'
				}],
				tabIndex:0
			}
		},
		methods: {
			changeTab(item,index){
				this.tabIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{
	background: #f6f6f6;
	.tab-header{
		width: 100%;
		height: 80rpx;
		display: flex;
		background: #ffffff;
		.tab-item{
			width: 33.3%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
			position: relative;
			font-weight: bold;
		}
		.acitve{
			color: #ff1767;
		}
		.acitve::after{
			content: '';
			position: absolute;
			width: 100rpx;
			height: 2px;
			background: red;
			left: 50%;
			margin-left: -50rpx;
		}
	}
	.tab-content{
		height: 1000rpx;
		width: 100%;
	}
}
</style>
