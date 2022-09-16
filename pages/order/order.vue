<template>
	<view class="order">
		<view class="header">
			<image mode="aspectFit" class="logo" src="../../static/images/logo2.png" ></image>
		</view>
		<view class="tab-box">
			<view class="tab-header">
				<view class="header-item" :class="[tabIndex == index?'active':'']" @click="changeTab(item,index)" v-for="(item,index) in tabList" :key="index">
					{{ item.name }}
				</view>
			</view>
			<view class="tab-content">
				<view class="tab-item">
					<view class="item-wrap">
						<view class="top">
							<text>中航储能股权融资冲刺号</text>
							<view class="hot">
								热
							</view>
						</view>
						<view class="main-mes">
							<view class="mes-item">
								<text class="tit">7 <text class="ltit">天</text></text>
								<text class="stit">投资期限</text>
							</view>
							<view class="mes-item">
								<text class="tit">7777</text>
								<text class="stit">每日收益（元）</text>
							</view>
							<view class="mes-item">
								<text class="tit">777</text>
								<text class="stit">起购金额（元）</text>
							</view>
						</view>
						<view class="desc-box">
							<view class="left">
								<view class="line">
									<text class="tit">预期收益率：
									  <text class="stit" style="color: red;">21.1%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">项目规模：
									  <text class="stit" style="color: black;">10000000万元</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">按天付收益，：
									  <text class="stit">到期还本</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">持有股权：
									  <text class="stit">200%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">当前项目可投余额：
									  <text class="stit" style="color: red;">925555522222元</text>
									</text>
								</view>
							</view>
							<view class="right">
								<view class="btn">
									立即投资
								</view>
							</view>
						</view>
						<view class="jin">
							<text>项目进度</text>
							<view class="jindu">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
							<text style="color: #666;font-size: 14px;">5.3%</text>
							
						</view>
					</view>
				</view>
				<view class="tab-item">
					<view class="item-wrap">
						<view class="top">
							<text>中航储能股权融资冲刺号</text>
							<view class="hot">
								热
							</view>
						</view>
						<view class="main-mes">
							<view class="mes-item">
								<text class="tit">7 <text class="ltit">天</text></text>
								<text class="stit">投资期限</text>
							</view>
							<view class="mes-item">
								<text class="tit">7777</text>
								<text class="stit">每日收益（元）</text>
							</view>
							<view class="mes-item">
								<text class="tit">777</text>
								<text class="stit">起购金额（元）</text>
							</view>
						</view>
						<view class="desc-box">
							<view class="left">
								<view class="line">
									<text class="tit">预期收益率：
									  <text class="stit" style="color: red;">21.1%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">项目规模：
									  <text class="stit" style="color: black;">10000000万元</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">按天付收益，：
									  <text class="stit">到期还本</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">持有股权：
									  <text class="stit">200%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">当前项目可投余额：
									  <text class="stit" style="color: red;">925555522222元</text>
									</text>
								</view>
							</view>
							<view class="right">
								<view class="btn">
									立即投资
								</view>
							</view>
						</view>
						<view class="jin">
							<text>项目进度</text>
							<view class="jindu">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
							<text style="color: #666;font-size: 14px;">5.3%</text>
							
						</view>
					</view>
				</view>
				<view class="tab-item">
					<view class="item-wrap">
						<view class="top">
							<text>中航储能股权融资冲刺号</text>
							<view class="hot">
								热
							</view>
						</view>
						<view class="main-mes">
							<view class="mes-item">
								<text class="tit">7 <text class="ltit">天</text></text>
								<text class="stit">投资期限</text>
							</view>
							<view class="mes-item">
								<text class="tit">7777</text>
								<text class="stit">每日收益（元）</text>
							</view>
							<view class="mes-item">
								<text class="tit">777</text>
								<text class="stit">起购金额（元）</text>
							</view>
						</view>
						<view class="desc-box">
							<view class="left">
								<view class="line">
									<text class="tit">预期收益率：
									  <text class="stit" style="color: red;">21.1%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">项目规模：
									  <text class="stit" style="color: black;">10000000万元</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">按天付收益，：
									  <text class="stit">到期还本</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">持有股权：
									  <text class="stit">200%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">当前项目可投余额：
									  <text class="stit" style="color: red;">925555522222元</text>
									</text>
								</view>
							</view>
							<view class="right">
								<view class="btn">
									立即投资
								</view>
							</view>
						</view>
						<view class="jin">
							<text>项目进度</text>
							<view class="jindu">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
							<text style="color: #666;font-size: 14px;">5.3%</text>
							
						</view>
					</view>
				</view>
				<view class="tab-item">
					<view class="item-wrap">
						<view class="top">
							<text>中航储能股权融资冲刺号</text>
							<view class="hot">
								热
							</view>
						</view>
						<view class="main-mes">
							<view class="mes-item">
								<text class="tit">7 <text class="ltit">天</text></text>
								<text class="stit">投资期限</text>
							</view>
							<view class="mes-item">
								<text class="tit">7777</text>
								<text class="stit">每日收益（元）</text>
							</view>
							<view class="mes-item">
								<text class="tit">777</text>
								<text class="stit">起购金额（元）</text>
							</view>
						</view>
						<view class="desc-box">
							<view class="left">
								<view class="line">
									<text class="tit">预期收益率：
									  <text class="stit" style="color: red;">21.1%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">项目规模：
									  <text class="stit" style="color: black;">10000000万元</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">按天付收益，：
									  <text class="stit">到期还本</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">持有股权：
									  <text class="stit">200%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">当前项目可投余额：
									  <text class="stit" style="color: red;">925555522222元</text>
									</text>
								</view>
							</view>
							<view class="right">
								<view class="btn">
									立即投资
								</view>
							</view>
						</view>
						<view class="jin">
							<text>项目进度</text>
							<view class="jindu">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
							<text style="color: #666;font-size: 14px;">5.3%</text>
							
						</view>
					</view>
				</view>
				<view class="tab-item">
					<view class="item-wrap">
						<view class="top">
							<text>中航储能股权融资冲刺号</text>
							<view class="hot">
								热
							</view>
						</view>
						<view class="main-mes">
							<view class="mes-item">
								<text class="tit">7 <text class="ltit">天</text></text>
								<text class="stit">投资期限</text>
							</view>
							<view class="mes-item">
								<text class="tit">7777</text>
								<text class="stit">每日收益（元）</text>
							</view>
							<view class="mes-item">
								<text class="tit">777</text>
								<text class="stit">起购金额（元）</text>
							</view>
						</view>
						<view class="desc-box">
							<view class="left">
								<view class="line">
									<text class="tit">预期收益率：
									  <text class="stit" style="color: red;">21.1%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">项目规模：
									  <text class="stit" style="color: black;">10000000万元</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">按天付收益，：
									  <text class="stit">到期还本</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">持有股权：
									  <text class="stit">200%</text>
									</text>
								</view>
								<view class="line">
									<text class="tit">当前项目可投余额：
									  <text class="stit" style="color: red;">925555522222元</text>
									</text>
								</view>
							</view>
							<view class="right">
								<view class="btn">
									立即投资
								</view>
							</view>
						</view>
						<view class="jin">
							<text>项目进度</text>
							<view class="jindu">
								<u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>
							</view>
							<text style="color: #666;font-size: 14px;">5.3%</text>
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
					{
						name:'融资板块'
					},
					{
						name:'三期项目'
					},
					{
						name:'四期项目'
					},
				],
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
.order{
	box-sizing: border-box;
	.header{
		height: 88rpx;
		width: 100%;
		background: #28759382;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 200rpx;
			height: 36rpx;
		}
	}
	.tab-box{
		background: #166182;
		.tab-header{
			display: flex;
			align-items: center;
			height: 60rpx;
			width: 100%;
			background: #ffffff;
			.header-item{
				color: #000000;
				font-size: 28rpx;
				font-weight: bold;
				margin:0  20rpx;
			}
			.active{
				color: red;
			}
		}
		.tab-content{
			padding:10rpx 10rpx;
			.tab-item{
				width: 100%;
				height: 560rpx;
				border-radius: 10px;
				background: #ffffff;
				padding-top: 20rpx;
				margin-bottom: 10rpx;
				.item-wrap{
					border-radius: 10px;
					width: 100%;
					background: linear-gradient(180deg, rgba(231, 56, 69, 0.2) 0%, rgba(231, 56, 69, 0.2) 0.01%, rgba(231, 56, 69, 0.02) 21.88%);
					border: 1px solid rgba(231, 56, 69, 0.1);
					height: 100%;
					padding: 10rpx;
					.top{
						display: flex;
						align-items: center;
						height: 100rpx;
						border-bottom: 1px solid #e7e7e7;
						.hot{
							background: red;
							color: #ffffff;
							font-size: 28rpx;
							border-radius: 10px;
							margin-left: 20rpx;
							width: 50rpx;
							height: 50rpx;
							text-align: center;
							line-height: 48rpx;
						}
					}
					.main-mes{
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 20rpx 20rpx;
						.mes-item{
							
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							.tit{
								color: #f20;
								font-size: 5vw;
								.ltit{
									font-size: 3vw;
									color: black;
								}
							}
							.stit{
								font-size: 3vw;
								color: black;
								margin-top: 10rpx;
							}
						}
					}
					.desc-box{
						display: flex;
						padding: 0rpx 20rpx;
						.left{
							flex: 1;
							display: flex;
							flex-direction: column;
							.line{
								display: flex;
								margin-bottom: 10rpx;
								text{
									font-size: 28rpx;
									color: #969696;
								}
							}
						}
						.right{
							width: 180rpx;
							height: 60rpx;
							background: #E73845;
							border-radius: 4px;
							line-height: 60rpx;
							text-align: center;
							color: #ffffff;
							font-size: 28rpx;
							margin-top: 10rpx;
						}
					}
					.jin{
						display: flex;
						align-items: center;
						padding: 0 20rpx;
						margin-top: 10rpx;
						text{
							color: #05a5cb;
							font-size: 24rpx;
						}
						.jindu{
							width: 420rpx;
							display: flex;
							align-items: center;
							margin:0 20rpx
						}
					}
				}
			}
		}
	}
}
</style>
