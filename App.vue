<script>
	export default {
		onLaunch: function() {
		    
				uni.onTabBarMidButtonTap(() => {
					console.log("点击中间")
					uni.navigateTo({
		    
						url: "/pages/index/task",
						animationType: "slide-in-bottom",
						animationDuration: 150
					})
				})
			},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "uview-ui/index.scss";
</style>
