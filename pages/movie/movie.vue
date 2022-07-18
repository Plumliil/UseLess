<template>
	<uni-list class="movies">
		<view-loader :isLoading="isLoading" top="0"></view-loader>
		<uni-list-item class="item" v-for="(item,index) in dataList" :key="index" @tap="goMovie(item.info.url)">
			<image class="item-left" :src="item.info.imgurl" mode=""></image>
			<view class="item-right">
				<text class="title">{{item.title}}</text>
				<text>{{item.info.yanyuan}}</text>
				<text>{{item.info.pingjia}}</text>
			</view>
		</uni-list-item>
	</uni-list>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: true,
				dataList: {},
			};
		},
		onLoad() {
			uni.request({
				url: 'https://api.vvhan.com/api/douban',
				method: 'GET',
				success: (res) => {
					this.dataList = res.data.data
					console.log(res)
				}
			})
			setTimeout(() => {
				this.isLoading = false
			},500)
		},
		methods: {
			goMovie(url) {
				uni.navigateTo({
					url: '../webView/webView?url=' + url,
				})
				console.log(this.dataList)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.movies {
		// padding-bottom: 20px;
		margin-bottom: 20px;

		.item {
			width: 95%;
			margin: 10px auto;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 3px 0;
			border-bottom: 1px solid $uni-bg-color-base;
			border-radius: 10px;

			.item-left {
				width: 200px;
				height: 200px;
				margin-left: 10px;
			}

			.item-right {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				flex-direction: column;
				width: 400px;

				text {
					margin: 0 10px;
					padding: 3px;
				}

				.title {
					font-size: 20px;
				}
			}
		}
	}
</style>
