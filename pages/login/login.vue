<template>
	<view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form class="main-form" labelPosition="left"  ref="form1">
			<view class="main-tit">
				登录
			</view>
			<u-form-item labelWidth="60" label="手机" prop="username" borderBottom ref="item1">
				<u--input v-model="sendform.username" placeholder="请输入用户名" border="none"></u--input>
			</u-form-item>
            <u-form-item labelWidth="60" label="密码" prop="username" borderBottom ref="item1">
            	<u--input v-model="sendform.pwd" placeholder="请输入密码" border="none"></u--input>
            </u-form-item>
			<u-form-item  labelWidth="60" class="code-box" label="验证码" prop="username" borderBottom ref="item1">
				<u--input v-model="sendform.pwd" placeholder="请输入验证码" border="none"></u--input>
				<image mode="aspectFit" class="code" src="../../static/images/jiesao2.jpg" ></image>
			</u-form-item>
			<view class="btn">
				登录
			</view>
			<view class="forget" @click="show = true">
				忘记密码?
			</view>
		</u--form>
		
		<u-modal :show="show" title="提示" @confirm="show = false" content='忘记密码请联系客服修改'></u-modal>

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
		width: 700rpx;
		height: 70rpx;
		background: #287593;
		border-radius: 70rpx;
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
