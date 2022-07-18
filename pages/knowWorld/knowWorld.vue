<template>
	<view>
		<view-loader class="loader" :isLoading="isLoading" top="0"></view-loader>
		<view class="head">
			<text v-for="(item,index) in dataList.time" :key="index">{{item}}</text>
		</view>
		<list class="dataList">
			<cell class="listItem" v-for="(item, index) in dataList.data" :key="item.index">
				<text>{{index+1}}:&nbsp;&nbsp;&nbsp;{{item}}</text>
			</cell>
		</list>
	</view>
</template>

<script>
	import utils from '../../commons/js/utils.js'
	export default {
		data() {
			return {
				dataList: {},
				isLoading: true,
			}
		},
		onLoad() {
			let timeConfig = {
				interval: 1,
				runNow: true,
				time: '00:00:01'
			}
  			let oldValue = utils.cache('60s');
			if (oldValue) {
				this.dataList = oldValue;
				setTimeout(() => {
					this.isLoading = false;
				}, 500)
			} else {
				utils.timeoutFunc(timeConfig, this.getData)
				setTimeout(() => {
					this.isLoading = false;
				}, 500)
			}

		},
		methods: {
			getData() {
				uni.request({
					url: 'https://api.vvhan.com/api/60s?type=json',
					method: 'GET',
					success: (res) => {
						this.dataList = res.data;
						utils.cache('60s', this.dataList, 60*60);
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.loader {
		margin-top: 0;
	}

	.head {
		width: 100%;
		height: 50px;
		background-color: #f76a97;
		color: white;
		font-weight: 700;
		position: fixed;
		border-bottom: 1px solid $uni-border-color;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 20px;

	}

	.dataList {
		display: flex;
		padding-top: 50px;
		padding-bottom: 70px;
		justify-content: center;
		flex-direction: column;
		text-indent: 20px;
		font-size: 20px;
		transition: 1s;

		.listItem {
			margin-top: 15px;
			font-size: 18px;
			padding: 5px;
			transition: 1s;
		}
	}
</style>
