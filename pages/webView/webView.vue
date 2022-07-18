//B页面
<template>
	<view class="view">
		<view-loader :isLoading="isLoading" top="0"></view-loader>
		<web-view :src="url" :progress="true"></web-view>
	</view>
</template>
 
<script>
    export default {
        data() {
            return {
                url:'',
                title:'',
				isLoading:true
            }
        },
        onLoad(option) {
			setTimeout(() => {
				this.isLoading = false
			},500)
            this.url = decodeURIComponent(option.url);
        },
    }
</script>
<style lang="scss" scoped>
	.view{
		width: 100%;
		height: 100%;
	}
</style>