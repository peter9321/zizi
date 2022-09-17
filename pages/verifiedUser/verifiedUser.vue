<template>
	<view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form class="main-form" labelPosition="left"  ref="form1">
			
			<u-form-item labelWidth="90" label="姓名" prop="username" borderBottom ref="item1">
				<u--input v-model="sendform.username" placeholder="请输入姓名" border="none"></u--input>
			</u-form-item>
            <u-form-item labelWidth="90" label="身份证号码" prop="username" borderBottom ref="item1">
            	<u--input v-model="sendform.pwd" placeholder="请输入有效身份证号" border="none"></u--input>
            </u-form-item>
			
			<view class="btn">
                立即认证
			</view>
		</u--form>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
              sendform:{
				  username:'',
				  pwd:''
			  },
			  show:false
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.main-form{
	width: 700rpx;
	margin: 0 auto;
	margin-top: 60rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	.main-tit{
		color: #385fec;
		font-size: 18px;
		margin: 30rpx auto;
		font-weight: bold;
	}
	.code-box{
		position: relative;
	}
	.u-form-item{
		width: 600rpx;
		margin-bottom: 40rpx;
	}
	.code{
		width: 260rpx;
		height: 80rpx;
		position: absolute;
		right: 0;
		top: 0;
		border: 1px solid red;
	}
	.btn{
		width: 650rpx;
		height: 70rpx;
		background: #287593;
		border-radius: 10rpx;
		margin-top: 40rpx;
		color: #ffffff;
		line-height: 70rpx;
		text-align: center;
	}
	.forget{
		color: #3d58f0;
		font-size: 14px;
		margin-top: 70rpx;
		font-weight: bold;
	}
}
</style>
