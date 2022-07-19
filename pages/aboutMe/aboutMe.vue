<template>
	<view class="aboutMe">
		<text class="title">无用</text>
		<view class="content">
			<text>app由uniapp架构</text>
			<text>数据接口由韩小韩API接口站提供</text>
			<text style="text-indent: 20px;">本应用旨在优化app功能,将部分app功能集中到本App中,如有其他需求可邮箱联系尽量添加,应用内不断扩展中...</text>
		</view>
		<text class="btm"> © plumli 版权所有 联系我 plumliil@189.cn</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: ''
			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style scoped lang="scss">
	.aboutMe {
		width: 100vw;
		height: 100vh;
		color: $uni-text-color;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;

		.title {
			flex: 1;
			display: block;
			font-size: 24px;
			text-align: center;
			padding-top: 10px;
		}

		.content {
			flex: 8;
			display: flex;
			align-items: center;
			flex-direction: column;
			font-size: 20px;

			text {
				margin: 10px;
			}
		}

		.btm {
			position: absolute;
			bottom: 10px;
			font-size: 16px;
		}
	}
</style>
