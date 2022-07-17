<template>
	<view class="translate">
		<view-loader :isLoading="isLoading" top="0"></view-loader>
		<view class="LinKing">
			<view class="lk-left">
				<text>{{linking.month}}</text>
				<text>{{linking.day}}</text>
			</view>
			<view class="lk-right">
				<text>{{linking.en}}</text>
				<text>{{linking.zh}}</text>
			</view>
		</view>
		<view class="target">
			<textarea v-model="target" placeholder="在此输入..." />
		</view>
		<button @tap="translate" type="default">
			<text>↓&nbsp;&nbsp;&nbsp;TRANSLATE&nbsp;&nbsp;&nbsp;↓</text>
		</button>
		<view class="result" v-if="result">
			<textarea :value="result" placeholder="" disabled="true" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: true,
				target: '',
				result: '',
				linking:{}
			};
		},
		onLoad() {
			uni.request({
				url: 'https://api.vvhan.com/api/en',
				method: 'GET',
				success: (res) => {
					this.linking=res.data.data;
					setTimeout(()=>{
						this.isLoading=false
					},500)
				}
			})
		},
		methods: {
			getData(target) {
				uni.request({
					url: 'https://api.vvhan.com/api/fy?text=' + target,
					method: 'GET',
					success: (res) => {
						this.result = res.data.data.fanyi
					}
				})
			},
			translate() {
				if(this.target){
					this.getData(this.target)
				}else{
					uni.showModal({
						content: '输入内容不能为空哦 (‾◡◝)!',
						showCancel: false
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.translate {
		width: 100%;
		.LinKing {
			display: flex;
			align-items: center;
			padding: 15px;
			font-size: 16px;
			view{
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
			}
			text{
				padding: 3px 0;
			}
			.lk-left{
				flex: 1;
			}
			.lk-right{
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

		.target,
		.result {
			flex: 3;
			width: 100%;
			textarea {
				height: 150px;
				width: 100%;
				font-size: 16px;
				padding: 10px 20px;
			}
		}
		
		.target{
			textarea{
				border-top: 1px solid $uni-border-color;
			}
		}
		.result {
			textarea{
				border-bottom: 1px solid $uni-border-color;
			}
		}
	}
</style>
