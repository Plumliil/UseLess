<template>
	<view class="index">
		<view class="tip">
			一个并没有什么大用的软件...
		</view>
		<view class="content">
		<!-- 	<view @tap="eatWhat">
				吃点什么..
			</view> -->
			<view @tap="toLanZou">
				蓝奏
			</view>
			<view @tap="hotSearch">
				热搜
			</view>
			<!-- 	<view @tap="onlineClass">
				网课查询
			</view> -->
			<view @tap="toTranslate">
				翻译
			</view>
			<view @tap="toMovie">
				电影
			</view>
			<view @tap="toWeather">
				天气
			</view>
			<view @tap="knowWorld">
				60s
			</view>
			<view @click="aboutMe">
				关于
			</view>
			<view>
				...
			</view>
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
				uni.navigateTo({
					url: '../eatWhat/eatWhat'
				})
			},
			toLanZou(){
				uni.navigateTo({
					url:'../lanZou/lanZou'
				})
			},
			hotSearch() {
				uni.navigateTo({
					url: '../hotSearch/hotSearch'
				})
			},
			knowWorld() {
				uni.navigateTo({
					url: '../knowWorld/knowWorld'
				})
			},
			toTranslate() {
				console.log('翻译')
				uni.navigateTo({
					url: '../translate/translate'
				})
			},
			toWeather() {
				console.log(111)
				uni.navigateTo({
					url: '../weather/weather'
				})
			},
			toMovie() {
				console.log(111)
				uni.navigateTo({
					url: '../movie/movie'
				})
			},
			aboutMe() {
				console.log('aboutme')
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
			width: 93%;
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
				width: 70px;
				height: 70px;
				background-color: #336666;
				margin: 10px;
				color: #FFFFFF;
				text-align: center;
				line-height: 70px;
				border-radius: 10px;
			}
		}
	}
</style>
