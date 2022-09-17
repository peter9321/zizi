<template>
	<view class="letter">
		<u-collapse accordion>
			<u-collapse-item>
				<text slot="title" class="u-page__item__title__slot-title">
					<view class="l-header">
						<text class="tit"> <text class="isred">已读</text> 文档指南</text>
						<text class="l-tit"><text style="margin-right: 20px;">229022</text> 2022-08-09</text>
					</view>
				</text>
				<text class="u-collapse-content">签到1元</text>
			</u-collapse-item>
			<u-collapse-item>
				<text slot="title" class="u-page__item__title__slot-title">
					<view class="l-header">
						<text class="tit"> <text class="nored">未读</text> 文档指南</text>
						<text class="l-tit"><text style="margin-right: 20px;">229022</text> 2022-08-09</text>
					</view>
				</text>
				<text class="u-collapse-content">签到1元</text>
			</u-collapse-item>
		</u-collapse>
		
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
.letter{
	.l-header{
		display: flex;
		flex-direction: column;
		.tit{
			.isred{
				font-size: 24rpx;
				color: green;
				margin-right: 20rpx;
			}
			.nored{
				font-size: 24rpx;
				color: red;
				margin-right: 20rpx;
			}
		}
		.l-tit{
			margin-top: 6rpx;
			font-size: 24rpx;
			color: #212529;
		}
	}
}
</style>
