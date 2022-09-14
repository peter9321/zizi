<template>
	<view class="invite-page">
		<!-- 系统信息 -->
		<view class="message">
			<view class="back-btn" @click="backBtn()">
				<text class="iconfont icon-31fanhui1"></text>
			</view>
			<view class="title">
				<text>TEAM REPORT</text>
			</view>
			<view class="message-btn">
				<text class="iconfont icon-lingdang-xianxing"></text>
			</view>
		</view>
		
		<view class="time-box">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change">
			</u-tabs>
			
			<view class="timeBtn" @click="opentime()">
				<text>打开日期</text>
			</view>
			<!-- 时间控件 -->
			<u-calendar v-model="show" :mode="mode" @change="changeT(e)">
					<view slot="tooltip">
						<!-- <view class="title">
							请选择住店/离店时间
						</view> -->
					</view>
			</u-calendar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {	
						show: false,
						mode: 'range',
						closeable:false,
						list: [{
							name: '待收货'
						}, {
							name: '待付款'
						}, {
							name: '待评价',
							// count: 5
						}],
						current: 0
					}
				},
		methods:{
			backBtn(){
				uni.switchTab({
					url:'../index/profile'
				})
			},
			change(index) {
							this.current = index;
			},
			opentime(){
				this.show=true
			},
			changeT(e) {
							console.log(e);
						}
		}
	}
</script>

<style lang="scss" scoped>
	
@import '../../static/iconfont/css/icon.css';

.message{
	background-color: #7107de;
	width: 100%;
	height: 108rpx;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
	font-size: 32rpx;
	.back-btn{
		width: 108rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
	}
	.message-btn{
		width: 108rpx;
		text-align: center;
		.icon-lingdang-xianxing{
			font-size: 48rpx;
		}
	}
}
.time-box{
	padding-top: 200rpx;
	height: 400rpx;
	background-color: blue;
	.timeBtn{
		color: #ffffff;
		
	}
}

</style>
