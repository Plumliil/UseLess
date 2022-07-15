<template>
	<view class="index">
		<view class="tip">
			一个并没有什么大用的软件...
		</view>
		<view class="content">
			<view @tap="eatWhat">
				吃点什么..
			</view>
			<view @tap="hotSearch">
				热搜浏览
			</view>
			<view @tap="onlineClass">
				网课查询
			</view>
			<view @tap="translate">
				翻译
			</view>
			<view @tap="movies">
				电影票房
			</view>
			<view @tap="knowWorld">
				读世界
			</view>
			<view>
				...
			</view>
			<view style="background-color: #FFFFFF;"></view>
			<view style="background-color: #FFFFFF;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			eatWhat() {
				console.log(111);
				uni.navigateTo({
					url: '../eatWhat/eatWhat'
				})
			},
			hotSearch(){
				console.log(222);
				uni.navigateTo({
					url: '../hotSearch/hotSearch'
				})
			}
		}
	}
</script>

<style lang="scss">
	.index {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		
		.tip {
			width: 90%;
			height: 200px;
			color: #FFFFFF;
			text-indent: 20px;
			line-height: 200px;
			font-size: 20px;
			margin-top: 10px;
			background-color: $uni-bg-color-base;
			border-radius: $uni-border-radius-base;
		}

		.content {
			background-color: #FFFFFF;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;

			view {
				width: 80px;
				height: 80px;
				background-color: #336666;
				margin: 10px;
				color: #FFFFFF;
				text-align: center;
				line-height: 80px;
				border-radius: 10px;
			}
		}
	}
</style>
