//B页面
<template>
	<web-view :src="url" :progress="true"></web-view>
</template>
 
<script>
    export default {
        data() {
            return {
                url:'',
                title:''
            }
        },
        onLoad(option) {
			console.log(option)
            this.url = decodeURIComponent(option.url);
			// console.log(this.url)
        },
		// onReady(){//改变标题
  //           uni.setNavigationBarTitle({
  //               title:this.title
  //           })
  //       }
    }
</script>