<template>
	<view class="eatWhat">
		<view class="tip">
			点我添加可选食物...
		</view>

		<view class="addFood">
			<view class="ipt">
				<select id="selectTime" v-model="values">
					<option value="breakfast" checked>早餐</option>
					<option value="lunch">午餐</option>
					<option value="dinner">晚餐</option>
				</select>
				<input type="text" v-model="foods" value="在此输入食物" />
				<view class="add" @tap="add">+</view>
			</view>
			<text>食物可以单个添加也可以通过 , 隔开</text>
		</view>
		<view class="content">

		</view>
		<view class="mark" @tap="markTap"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				values: '',
				breakfast: [],
				lunch: [],
				dinne: [],
				foods:''
			};
		},
		onLoad() {

		},
		methods: {
			add(e){
				console.log(this.foods);
				switch(this.values){
					case 'breakfast' :{
						this.breakfast.push(this.foods)
						uni.setStorage({
							key: 'breakfast',
							data: JSON.stringify(this.breakfast),
							success: function () {
								console.log('success');
							}
						});
						break;
					};
					case 'lunch' :{
						console.log('lunch');
						break;
					};
					case 'dinner' :{
						console.log('dinner');
						break;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.eatWhat {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.tip {
			width: 90%;
			height: 60px;
			color: #FFFFFF;
			text-indent: 20px;
			line-height: 60px;
			font-size: 20px;
			margin-top: 10px;
			background-color: $uni-bg-color-base;
			border-radius: $uni-border-radius-base;
		}

		.addFood {
			position: absolute;
			background-color: $uni-bg-color-base;
			width: 350px;
			height: 150px;
			border-radius: $uni-border-radius-base;
			top: 20%;
			z-index: 3;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			// display: none;
			.ipt {
				width: 90%;
				display: flex;
				justify-content: center;
				align-items: center;

				select {
					width: 100px;
					flex: 1;
					height: 40px;
					font-size: 16px;
					text-align: center;
					border: none;
					margin-left: 3px;
					font-family: YangRenDongZhuShiTi;
					border-bottom-left-radius: $uni-border-radius-base;
					border-top-left-radius: $uni-border-radius-base;

					&:active {
						border: none;
					}
				}

				input {
					flex: 4;
					width: 100px;
					height: 38px;
					font-size: 16px;
					border: 1px solid white;
					border-right: none;
					background-color: #FFFFFF;
				}

				.add {
					width: 40px;
					height: 40px;
					line-height: 40px;
					font-size: 30px;
					font-weight: 700;
					text-align: center;
					margin-right: 3px;
					background-color: #FFFFFF;
					border-bottom-right-radius: $uni-border-radius-base;
					border-top-right-radius: $uni-border-radius-base;
				}
			}

			text {
				color: white;
				font-size: 15px;
				margin-top: 10px;
			}
		}

		.content {
			width: 90%;
			min-height: 500px;
			margin-top: 100px;
			background-color: $uni-bg-color-base;
			border-radius: $uni-border-radius-base;
		}

		.mark {
			display: none;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: #FFFFFF;
			z-index: 2;
		}
	}
</style>
