<template>
	<view class="recharge">
		<view class="amount">
			充值金额:
		</view>
		<view class="shortcut">
			<view class="rechargemoney">
				300
			</view>
			<view class="rechargemoney">
				500
			</view>
			<view class="rechargemoney">
				1000
			</view>
			<view class="rechargemoney">
				2000
			</view>
			<view class="rechargemoney">
				5000
			</view>
			<view class="rechargemoney">
				5000
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
.amount{
	background: #F9F9F9;
	padding: 10px 8px;
	font-size: 16px;
}
.shortcut{
	display: flex;
	flex-wrap: wrap;
	padding: 6px;
	.rechargemoney{
		width: 95px;
		border-radius: 5px;
		margin-left: 5px;
		height: 30px;
		background: #999;
		text-align: center;
	}
}
</style>
