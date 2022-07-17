<template>
	<view class="weather" :style="{height:windowHeight}">
		<view-loader :isLoading="isLoading" top="0"></view-loader>
		<view class="temp">
			<text style="font-size: 20px;">{{currentDay.date}}</text>
			<text style="font-size: 28px;">{{city}}</text>
			<text style="font-size: 20px;">{{currentDay.week}}</text>
		</view>
		<view class="tempInfo">
			<image :src="currentDay.typeImgUrl" mode=""></image>
			<text style="font-size: 32px;">{{currentDay.type}}</text>
			<text>
				<image src="../../static/imgs/weather/1042.svg" mode=""></image>
				<text>:{{currentDay.low.substring(2)}}-{{currentDay.high.substring(2)}}</text>
			</text>
			<text v-if="currentDay.fengxiang">
				<image src="../../static/imgs/weather/2001.svg" mode=""></image>
				<text>:{{currentDay.fengxiang}}</text>
			</text>
		</view>

		<uni-list class="tab">
			<uni-list-item v-for="(item,index) in dataList" @tap="changeList(item)">
				<text>{{item.date}}</text>
				<image :src="item.typeImgUrl" mode=""></image>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import utils from '../../commons/js/utils.js'
	export default {
		data() {
			return {
				windowHeight: 0,
				isLoading: true,
				currentDay: {},
				dataList: [],
				city: ''
			};
		},
		onLoad() {
			setTimeout(() => {
				this.isLoading = false
			}, 1000)
			const {
				windowWidth,
				windowHeight,
				screenHeight
			} = uni.getSystemInfoSync();
			this.windowHeight = windowHeight + 'px';
			this.getAddress();
			this.getData(this.city)
		},
		methods: {
			getAddress() {
				// 获取ip
				uni.request({
					url: 'http://pv.sohu.com/cityjson?ie=utf-8',
					method: 'POST',
					success: (res) => {
						const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
						let ip = reg.exec(res.data);
						// 获取位置
						uni.request({
							url: 'https://api.vvhan.com/api/getIpInfo?ip=' + ip[0],
							method: 'GET',
							success: (res) => {
								this.city = res.data.info.city;
							}
						})

					}
				})
			},
			getData(city) {
				uni.request({
					url: `https://api.vvhan.com/api/weather?city=${city}&type=week`,
					method: 'GET',
					success: (res) => {
						this.city = res.data.data.city;
						this.dataList.push(res.data.data.yesterday);
						res.data.data.forecast.forEach(item => {
							this.dataList.push(item)
						})
						this.dataList.forEach(item => {
							item['typeImgUrl'] =
								`../../static/imgs/weather/${this.addTempInfo(item.type)}-fill.svg`;
							item.date = item.date.replace('月', '-')
							item.date = item.date.replace('日', '')
						})
						this.currentDay = this.dataList[1];
						
					}
				})
			},
			addTempInfo(type) {
				switch (type) {
					case '晴':
						return '100'
						break;
					case '多云':
						return '101'
						break;
					case '少云':
						return '102'
						break;
					case '晴间多云':
						return '102'
						break;
					case '阴':
						return '104'
						break;
					case '阵雨':
						return '300'
						break;
					case '强阵雨':
						return '301'
						break;
					case '雷阵雨':
						return '302'
						break;
					case '强雷阵雨':
						return '303'
						break;
					case '雷阵雨伴有冰雹':
						return '304'
						break;
					case '小雨':
						return '305'
						break;
					case '中雨':
						return '306'
						break;
					case '大雨':
						return '307'
						break;
					case '极端降雨':
						return '308'
						break;
					case '细雨':
						return '309'
						break;
					case '暴雨':
						return '310'
						break;
					case '大暴雨':
						return '311'
						break;
					case '特大暴雨':
						return '312'
						break;
					case '冻雨':
						return '313'
						break;
					case '小到中雨':
						return '314'
						break;
					case '中到大雨':
						return '315'
						break;
					case '大到暴雨':
						return '316'
						break;
					case '暴雨到大暴雨':
						return '317'
						break;
					case '大暴雨到特大暴雨':
						return '318'
						break;
					case '阵雨':
						return '350'
						break;
					case '强阵雨':
						return '351'
						break;
					case '雨':
						return '399'
						break;
					case '小雪':
						return '400'
						break;
					case '中雪':
						return '401'
						break;
					case '大雪':
						return '402'
						break;
					case '暴雪':
						return '403'
						break;
					case '雨夹雪':
						return '404'
						break;
					case '雨雪天气':
						return '405'
						break;
					case '阵雨夹雪':
						return '406'
						break;
					case '阵雪':
						return '407'
						break;
					case '小到中雪':
						return '408'
						break;
					case '中到大雪':
						return '409'
						break;
					case '大到暴雪':
						return '410'
						break;
					case '阵雨夹雪':
						return '457'
						break;
					case '雪':
						return '499'
						break;
					case '薄雾':
						return '500'
						break;
					case '雾':
						return '501'
						break;
					case '霾':
						return '502'
						break;
					case '扬沙':
						return '503'
						break;
					case '浮尘':
						return '504'
						break;
					case '沙尘暴':
						return '507'
						break;
					case '强沙尘暴':
						return '508'
						break;
					case '浓雾':
						return '509'
						break;
					case '强浓雾':
						return '510'
						break;
					case '中度霾':
						return '511'
						break;
					case '重度霾':
						return '512'
						break;
					case '严重霾':
						return '513'
						break;
					case '大雾':
						return '514'
						break;
					case '特强浓雾':
						return '515'
						break;
					default:
						return '999'
						break;
				}
			},
			changeList(item) {
				this.currentDay = item
			}
		}
	}
</script>

<style lang="scss" scoped>
	.weather {
		margin-top: 0px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		// background-color: skyblue;

		.temp {
			width: 100%;
			height: 10%;
			font-size: 30px;
			// background-color: yellow;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		.tempInfo {
			width: 100%;
			height: 78%;
			display: flex;
			// justify-content: center;
			align-items: center;
			flex-direction: column;


			image {
				width: 200px;
				height: 200px;
			}

			text {
				font-size: 24px;
				margin-top: 30px;

				image {
					width: 20px;
					height: 20px;
				}
			}

		}

		.tab {
			width: 100%;
			height: 15%;
			display: flex;
			justify-content: space-around;

			uni-list-item {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 50px;
				text-align: center;

				image {
					width: 30px;
				}
			}

		}
	}
</style>
