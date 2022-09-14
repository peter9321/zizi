
<template>
	<view>
		<view class="contain-box">
			<view class="tab-head">
				<view class="tab-item"  :class="[item.isClick ? 'item-active' : '']"  @click="tabChange(item,index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
			</view>
			<view class="tab-body">
				<view v-if="0==tabIndex" class="body-item">
					<text>A man facing choice:since the mother from stomach choice a boy or a girl; A year old when lottery: what is caught the money or catch books; In the age of 5: exactly programmes will learn piano or learning to paint; Twelve years old up the junior high school: what is on the public or private; In high school, always hear teacher said university fine, carefree life, no teacher's custody, not the parents of loquacious, bored witless, never worry never worry for examination, pass, live for ever. In different teacher recounting their wonderful university life. We started the infinite and yearning college life. 18 when graduated from high school: exactly is choosing to enter good university? Or step into the society? Also or abroad?

I, a boy, a year old when lottery caught books, five years old learned painting, on the private junior high.</text>
					<view class="star-btn">
						START TO PROMOTE
					</view>
				</view>
				
				<view v-if="1==tabIndex" class="body-item">
					<text>A man facing choice: since the mother from stomach choice a boy or a girl; A year old when lottery: what is caught the money or catch books; In the age of 5: exactly programmes will learn piano or learning to paint; Twelve years old up the junior high school: what is on the public or private; In high school, always hear teacher said university fine, carefree life, no teacher's custody, not the parents of loquacious, bored witless, never worry never worry for examination, pass, live for ever. In different teacher recounting their wonderful university life. We started the infinite and yearning college life. 18 when graduated from high school: exactly is choosing to enter good university? Or step into the society? Also or abroad?

I, a boy, a year old when lottery caught books, five years old learned painting, on the private junior high.</text>
				<view class="star-btn">
					    START SAVING MONEY
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
				title: 'Hello',
				show: false,
				tabList: [
					{
						name: 'PROMOTE',
						isClick: true,
					},
					{
						name:'YUEBAO',
						isClick:false
					}
				],
				tabIndex:0
			}
		},
		onLoad() {

		},
		methods: {
			tabChange(item,index){
				for(let i=0;i<this.tabList.length;i++){
					console.log(this.tabList[i])
					this.tabList[i].isClick=false
				}
				item.isClick=true
				this.tabIndex=index
				console.log(item.name);
				console.log(index)
				console.log(this.tabIndex)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../static/iconfont/css/icon.css';
page{
	background-color: #fceeff;
}
.item-active{
	border-bottom: 1rpx solid #6d00be;
}
.contain-box{
	background-color: #ffffff;
	width: 710rpx;
	margin: 36rpx auto 0;
	box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.15);
	border-radius: 20rpx;
	.tab-head{
		display: flex;
		flex-direction: row;
		justify-content:space-around;
		align-items: center;
		height: 120rpx;
		text-align: center;
		.tab-item{
			height: 60rpx;
			line-height: 60rpx;
		}
	}
	.tab-body{
		margin: 0 20rpx;
		padding: 32rpx 10rpx;
		border-top: 1rpx solid #f2f2f2;
		background-color: #ffffff;
		
		font-size: 26rpx;
		color: #29292C;
		line-height: 32rpx;
		font-weight: 500;
		.star-btn{
			margin-top: 40rpx;
			color: #ffffff;
			width: 640rpx;
			height: 90rpx;
			font-size: 28rpx;
			line-height: 90rpx;
			text-align: center;
			background-image: linear-gradient(113deg, #A700E1 0%, #7285FF 100%);
			box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.3);
			border-radius: 45rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
}






</style>
