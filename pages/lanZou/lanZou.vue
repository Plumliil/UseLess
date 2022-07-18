<template>
	<view class="lanzou">
		<view-loader :isLoading="isLoading" top="0"></view-loader>
		<view class="target">
			<textarea v-model="target" placeholder="在此输入..." />
		</view>
		<button @tap="analysis" type="default">
			<text>↓&nbsp;&nbsp;&nbsp;解析&nbsp;&nbsp;&nbsp;↓</text>
		</button>
		<view class="result" v-if="result">
			<!--  -->
			<text>文件信息</text>
			<view class="info">
				<text>文件名称:{{result.info.name}}</text>
				<text>文件作者:{{result.info.author}}</text>
				<text>发布时间:{{result.info.time}}</text>
				<text>文件大小:{{result.info.size}}</text>
			</view>
			<view class="download">
				<button type="default" @tap="download">下载文件</button>
				<button type="default" @tap="download">文件地址</button>
			</view>
			<text>{{this.result.download}}</text>
			<text>{{this.result.fileUrl}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: true,
				target: 'https://vvhan.lanzoui.com/iBxcLfxzm7c',
				result: '',
			};
		},
		onLoad() {
			setTimeout(() => {
				this.isLoading = false
			}, 500)
		},
		methods: {
			analysis() {
				uni.request({
					url: 'https://api.vvhan.com/api/lz?url=' + this.target,
					method: 'GET',
					success: (res) => {
						this.result = res.data;
						// console.log(this.result.download)
						// console.log(this.result.fileUrl)
						console.log(this.result)
					}
				})
			},
			download() {
				// plus.runtime.openURL(this.result.info.download)
				// uni.saveFile({
				// 	tempFilePath: this.result.download,
				// 	success: function(res) {
				// 		// var savedFilePath = res.savedFilePath;
				// 		console.log(res)
				// 		console.log(222)
				// 	},
				// 	fail: (err) => {
				// 		console.log('fail',err)
				// 	}
				// });
				uni.downloadFile({
						url: this.result.fileUrl,//下载地址接口返回
						success: (data) => {
							if (data.statusCode === 200) {
								//文件保存到本地
								uni.saveFile({
									tempFilePath: data.tempFilePath, //临时路径
									success: function(res) {
										uni.showToast({
											icon: 'none',
											mask: true,
											title: '文件已保存：' + res.savedFilePath, //保存路径
											duration: 3000,
										});
										setTimeout(() => {
											//打开文档查看
											uni.openDocument({
												filePath: res.savedFilePath,
												success: function(res) {
													console.log('打开文档成功');
												}
											});
										}, 3000)
									}
								});
							}
						},
						fail: (err) => {
							console.log(err);
							uni.showToast({
								icon: 'none',
								mask: true,
								title: '失败请重新下载',
							});
						},
					});
				console.log(111)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lanzou {
		width: 100%;

		.LinKing {
			display: flex;
			align-items: center;
			padding: 15px;
			font-size: 16px;

			view {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
			}

			text {
				padding: 3px 0;
			}

			.lk-left {
				flex: 1;
			}

			.lk-right {
				flex: 8;
				flex-direction: column;

			}
		}

		button {
			width: 100%;
			height: 50px;
			color: $uni-text-color;
			font-weight: 700;
			background-color: white;
			border-top: 1px solid $uni-border-color;
			border-bottom: 1px solid $uni-border-color;
			border-radius: 0;
		}

		.target {
			flex: 3;
			width: 100%;

			textarea {
				height: 150px;
				width: 100%;
				font-size: 16px;
				padding: 10px 20px;
				border-top: 1px solid $uni-border-color;
			}
		}

		.result {
			flex: 3;
			width: 100%;
			font-size: 20px;
			padding: 20px 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.info {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				font-size: 18px;
			}

			.download {
				display: flex;
				justify-content: center;
				align-items: center;

				button {
					border: none;
					background: none;
					outline: none;
					margin: 3px;
					height: 36px;
					line-height: 36px;
				}
			}
		}
	}
</style>
