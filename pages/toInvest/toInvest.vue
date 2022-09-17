<template>
	<view class="main">
		<view class="top">
			<view class="top-item">
				<text class="top-tit">账户可用余额（元）</text>
				<text class="top-value">￥3000000元</text>
			</view>
			<view class="top-item">
				<text class="top-tit">项目可投金额（元）</text>
				<text class="top-value">￥300099999000元</text>
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				起投金额
			</view>
			<view class="line-r">
				￥ <text style="color:#385fec">399</text>元
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				结息时间
			</view>
			<view class="line-r">
				满 <text style="color:#385fec;font-weight: bold;">24小时</text>自动结息
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				投资金额
			</view>
			<view class="line-r">
				<u--input
				    placeholder="请输入投资金额"
				    border="surround"
				    v-model="value"
				  ></u--input>
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				
			</view>
			<view class="line-r">
				<text  style="font-size: 12px;">
					最低起投
					<text style="color:#385fec;font-weight: bold;">399</text>
					元，加一次为<text style="color:#385fec;font-weight: bold;">100</text> 元
				</text>
				
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				加息券
			</view>
			<view class="line-r" @click="show = true">
				请选择加息券
				<image mode="aspectFit" class="down" src="../../static/images/down.png" ></image>
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				现金券
			</view>
			<view class="line-r" @click="show = true">
				请选择现金券
				<image mode="aspectFit" class="down" src="../../static/images/down.png" ></image>
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				持有股权
			</view>
			<view class="line-r">
				798
			</view>
		</view>
		<view class="line">
			<view class="line-l">
				支付密码
			</view>
			<view class="line-r">
				<u--input
				   class="pay-pwd"
				    placeholder="默认为登录密码"
				    border="surround"
				    
				  ></u--input>
			</view>
		</view>
		
		<view class="btn">
			立即投资
		</view>
		
		<u-picker :show="show" @cancel="show = false" @confirm="confirm" :columns="columns"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'399',
				show: false,
				columns: [
					['中国', '美国', '日本']
				],
			}
		},
		methods: {
			confirm(){
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{
	.top{
		width: 700rpx;
		height: 160rpx;
		border-radius: 10px;
		margin: 0 auto;
		margin-top: 20rpx;
		background:#385fec ;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10rpx;
		.top-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 50%;
			text-align: center;
			.top-tit{
				color: #ffffff;
				font-size: 12px;
			}
			.top-value{
				color: #ffffff;
				font-size: 14px;
				margin-top: 20rpx;
			}
		}
		
	}
	.line{
		display: flex;
		height: 100rpx;
		border-bottom: 1px solid #ddd;
		padding: 0 25rpx;
		align-items: center;
		justify-content: space-between;
		.line-l{
			font-size: 16px;
		}
		.line-r{
			display: flex;
			align-items: center;
			.down{
				width: 36rpx;
				height: 36rpx;
				margin-left: 40rpx;
			}
		}
	}
	.btn{
		width: 700rpx;
		height: 80rpx;
		text-align: center;
		color: #ffffff;
		line-height: 80rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		border-radius: 10rpx;
		background: #287593;
	}
}
</style>
