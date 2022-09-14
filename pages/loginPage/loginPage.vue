<template>
	<view class="login-page">	
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
				<view class="">
					<input v-model="account"  type="text" placeholder="Mobile phone number" />
				</view>
			</view>
			<view class="password">
				<input v-model="password"  type="password" :password="pass" placeholder="Password" />
			</view>	
			<view class="login-btn" @click="login">LOGIN</view>		
			<view class="reg" @click="jumpRegister()">
				<text>Register</text>
			</view>
			<view class="forget" @click="jumpRegister()">
				<text>Forgot password?</text>
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
				account:'15999852324',
				password:'123456',
				// account:'',
				// password:''
			}
		},
		onLoad() {
		},
		methods: {
			//登录
			login(){
				let params = {
					phone:this.account,
					password:this.password,
				}
				HomeApi.login_Api(params).then(res => {
					if(res.responseCode == '0000'){
						
						uni.setStorage({
						    key: 'token',
						    data: res.responseMsg,
						});
						this.$store.commit('setToken',res.responseMsg)
						this.getUserMes(res.responseMsg)
						uni.showToast({
						    title: 'Login successful',
						    duration: 2000,
							icon:'none'
						});
						
					}else{
						uni.showToast({
						    title: 'Login failed',
						    duration: 2000,
							icon:'none'
						});
						icon:'none'
					}
					
				})
			},
			getUserMes(token){
				let parmas = {
					token:token
				}
				HomeApi.getUserMes_Api(parmas).then(res => {
					if(res.responseCode == '0000'){
						
						let user = JSON.stringify(res.data)
						uni.setStorage({
						    key: 'userInfo',
						    data: user,
						});
						this.$store.commit('setUserInfo',res.data)
						setTimeout(()=>{
							uni.switchTab({
							    url: '/pages/index/index'
							});
						},1000)
					}
					
				})
			},
			btnclick(){
				this.pass=!this.pass
			},
			jumpRegister(){
				uni.navigateTo({
				    url: '../registerPage/registerPage'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background: linear-gradient(to bottom, #fcedff 0%, #ffffff 100%);
}
.login-page{
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
			// height: 152rpx;
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
			border-radius: 40px;
			border: 1px solid rgba(0, 0, 0, 0.08);
			position: relative;
			.front{
				padding: 0 8rpx;
				// height: 42rpx;
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
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
		.password{
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
			margin: 20rpx 0 80rpx 0;
			input{
				text-align: center;
				width: 100%;
			}
		}
	}
	.login-btn{
		width: 630rpx;
		height: 100rpx;
		background-image: linear-gradient(113deg, #D279F1 0%, #B6B7FF 100%);
		text-align: center;
		color: #FFFFFF;
		line-height: 100rpx;
		border-radius: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.reg{
		margin-top: 50rpx;
		font-size: 28rpx;
		color: #6E00BF;
		font-weight: 600;
	}
	.forget{
		margin-top: 140rpx;
		font-size: 28rpx;
		color: #A3A9B1;
		line-height: 40rpx;
		font-weight: 500;
	}
	
}
</style>
