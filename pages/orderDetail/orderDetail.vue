<template>
	<view class="detail">
		<view class="top-tit">
			中航储能股权融资冲刺号
		</view>
		<view class="top-two">
			<view class="two-item">
				<text class="two-tit">项目规模</text>
				<text class="two-value">￥<text style="color: red;font-size: 16px;">10000000</text>万元</text>
			</view>
			<view class="two-item">
				<text class="two-tit">每份分红</text>
				<text class="two-value"><text style="color: red;font-size: 16px;">58.9666</text>元起</text>
			</view>
			<view class="two-item">
				<text class="two-tit">投资周期</text>
				<text class="two-value">￥<text style="color: red;font-size: 16px;">7</text>天</text>
			</view>
		</view>
		<view class="top-line">
			分红方式：按天付收益，到期还本
		</view>
		<view class="top-line">
			起投金额：<text style="color: red;">399</text>元
		</view>
		<view class="top-line">
			担保机构：中国平安财产保险股份有限公司
		</view>
		<view class="top-line">
			投资零风险：本息保障
        </view>
		<view class="jindu">
			<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
		</view>
		<view class="xian"></view>
		<view class="tab-box">
			<view class="tab-head">
				<view class="head-item" @click="tabClick(item,index)" :class="[tabIndex==index?'active':'']" v-for="(item,index) in tabList" :key="index">
					{{ item.name }}
				</view>
			</view>
			<view class="tab-content">
				<view class="tab1" v-if="tabIndex == 0">
					<view class="table">
						<view class="table-line">
							<view class="table-l">
								项目名称
							</view>
							<view class="table-r">
								中航储能股权融资冲刺号
							</view>
						</view>
						<view class="table-line">
							<view class="table-l">
								项目金额
							</view>
							<view class="table-r">
								<text style="color: red;">1000000万</text>
								 人民币
							</view>
						</view>
						<view class="table-line">
							<view class="table-l">
								每天分红
							</view>
							<view class="table-r">
								<text style="color: red;">按每日2.11%的收益（保本保息）</text>
							</view>
						</view>
						<view class="table-line">
							<view class="table-l">
								投资金额
							</view>
							<view class="table-r">
								<text style="color: red;">最低起投399元</text>
								（限买1000000份）
							</view>
						</view>
						<view class="table-line">
							<view class="table-l">
								项目期限
							</view>
							<view class="table-r">
								<text style="color: red;">7个</text>
								自然日
							</view>
						</view>
					</view>
				</view>
				<view class="tab2" v-if="tabIndex == 1">
					项目说明
				</view>
			</view>
		</view>
		<view class="bottom-box">
			<view class="btn" @click="goPage('/pages/toInvest/toInvest')">
				马上投资
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					name: '投资详情',
				}, {
					name: '项目说明',
				}],
				tabIndex:0
			}
		},
		methods: {
			tabClick(item,index) {
				console.log('item', item);
				this.tabIndex = index
			},
			goPage(url){
				console.log(666)
				uni.navigateTo({
					url: url
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.detail{
	padding-bottom: 120rpx;
	.top-tit{
		padding: 20rpx 20rpx;
		font-size: 28rpx;
		border-bottom: 1px solid #ddd;
		height: 100rpx;
		font-size: 32rpx;
		line-height: 60rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-bottom: 10rpx;
	}
	.top-two{
		margin-left: 20rpx;
		margin-right: 20rpx;
		height: 140rpx;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10rpx;
		margin-bottom: 10rpx;
		.two-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.two-tit{
				color: #999;
			}
			.two-value{
				margin-top: 8rpx;
				font-size: 28rpx;
				color: black;
			}
		}
	}
	.top-line{
		margin-left: 20rpx;
		margin-right: 20rpx;
		border-top: 1px solid #ddd;
		height: 88rpx;
		display: flex;
		align-items: center;
	}
	.jindu{
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}
	.xian{
		margin-top: 30rpx;
		border-top: 1px solid #ddd;
	}
	.tab-box{
		margin-top: 20rpx;
		.tab-head{
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #ddd;
			height: 100rpx;
			.head-item{
				width: 50%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				line-height: 100rpx;
				
				
			}
			.active{
				border-bottom: 2px solid #385fec;
				color: #385fec;
			}
		}
		.tab-content{
			padding: 0 40rpx ;
			.tab1{
				margin-top: 40rpx;
				.table{
					border: 1px solid black;
					border-bottom: none;
					.table-line{
						display: flex;
						align-items: center;
						justify-content: space-between;
						.table-l{
					      width: 200rpx;	
						  padding:16rpx 10rpx;
						  border-right: 1px solid black;
						  border-bottom: 1px solid black;
						  font-size: 12px;
						  color: #666;
						}
						.table-r{
						  flex: 1;
						  padding:16rpx 10rpx;
						  border-bottom: 1px solid black;
						  font-size: 12px;
						  color: #666;
						}
					}
				}
			}
			.tab2{
				margin-top: 40rpx;
			}
		}
	}
	.bottom-box{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		border-top: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
		.btn{
			width: 670rpx;
			height: 70rpx;
			background: #287593;
			border-radius: 5px;
			text-align: center;
			align-items: center;
			display: flex;
			justify-content: center;
			color: #fff;
			font-size: 32rpx;
		}
	}
}
</style>
