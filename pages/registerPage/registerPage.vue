<template>
	<view class="register-page">
		<view class="content">
			<view class="logo">
				<image src="../../static/imgs/loginPage/logo.png" mode=""></image>
			</view>
			<view class="text-box">
			    <text>MALL  ACTIVITIES</text>
			</view>
			<view class="note-box">
				<text>Store owners provide part-time tasks, and everyone can choose to complete them according to their abilities and receive commissions.</text>
			</view>
			<view class="account">
				<view class="front">+86</view>
				<input v-model="account"  type="text" placeholder="Mobile phone number" />
			</view>
			<view class="password">
				<input v-model="password" type="password"   placeholder="Password" />
			</view>	
			<view class="confirm-password">
				<input v-model="confirmPasseord" type="password"  placeholder="Please confirm the password" />
			</view>
			<view class="invitation-code">
				<input v-model="invitationCode"  type="text"  placeholder="Please enter the invitation code" />
			</view>
			<view class="register-btn" @click="registerBtn">REGISTERED ACCOUNT</view>		
			<view class="login-btn" @click="jumpLogin">
				<text>Login</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HomeApi from '../../api/HomeApi.js'
	export default {
		data() {
			return {
				title: 'Hello',
				value: '',
				type: 'text',
				border: true,
				pass:false,
				account:'',
				password:'',
				confirmPasseord:'',
				invitationCode:''
			}
		},
		onLoad() {
		},
		methods: {
			registerBtn(){
				//提交注册信息
				HomeApi.register_Api({
				  phone:this.account,
				  password:this.password,
				  areaCode:"+86",
				  invitationCode:this.invitationCode
                
				}).then(res => {
					console.log(res)
					console.log("注册res")
					if(res.responseCode == '0000'){
						uni.showToast({
						    title: 'Registration Success',
						    duration: 2000
						});
						uni.setStorage({
						    key: 'token',
						    data: res.responseMsg,
						    success: function () {
						        console.log('success');
						    }
						});
						setTimeout(()=>{
							uni.switchTab({
							    url: '/pages/index/index'
							});
						},2000)
						
					}else{
						uni.showToast({
						    title: 'Registration Failed',
						    duration: 2000,
							icon:'none'
						});
					}
					
				})
			},
			jumpLogin(){
				console.log(11)
				uni.navigateTo({
				    url: '../loginPage/loginPage'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.register-page{
	background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%);
	height: 100vh;
	background-color: #fcedff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	.content{
		margin-top: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		.logo{
			width: 200rpx;
			height: 188rpx;
			image{
				width: 	200rpx;
				height: 188rpx;
			}
		}
		.text-box{
			margin: 20rpx 0 32rpx;
			text{
				font-size: 36rpx;
				color: #29292C;
				font-weight: 700;
				// font-weight: bolder;
			}
		}
		.note-box{
			width: 626rpx;
			color: #66666D;
			text-align: center;
			font-weight: 700;
		}
		.account{
			margin-top: 40rpx;
			border: 1rpx solid red;
			width: 630rpx;
			height: 90rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			background: #ffffff;
			border-radius: 40rpx;
			border: 1rpx solid rgba(0, 0, 0, 0.08);
			position: relative;
			.front{
				padding: 0 8rpx;
				height: 42rpx;
				position: absolute;
				left: 20rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
			input{
				text-align: center;
				width: 100%;
			}
		}
		.password,.confirm-password,.invitation-code{
			border: 1rpx solid red;
			width: 630rpx;
			height: 90rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			background: #ffffff;
			border-radius: 40rpx;
			border: 1rpx solid rgba(0, 0, 0, 0.08);
			margin-top: 20rpx;
			input{
				text-align: center;
				width: 100%;
			}
		}
	}
	.register-btn{
		width: 630rpx;
		height: 100rpx;
		background-image: linear-gradient(113deg, #D279F1 0%, #B6B7FF 100%);
		text-align: center;
		color: #FFFFFF;
		line-height: 100rpx;
		border-radius: 60rpx;
		margin-top: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.login-btn{
		width: 100rpx;
		height: 100rpx;
		color:#6d00be;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
}
</style>
