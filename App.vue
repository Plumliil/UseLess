<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url('./commons/css/global.css');

	view {
		font-family: YangRenDongZhuShiTi;
	}

	uni-page-head .uni-page-head__title {
		font-family: YangRenDongZhuShiTi;
	}

	uni-page-head .uni-page-head {
		height: 50px ;
		line-height: 50px;
		padding: 10px 0;
		font-size: 25px;
	}

	uni-page-head .uni-btn-icon {
		font-size: 30px;
		line-height: 50px;
		margin-top: 20px;
	}
</style>
