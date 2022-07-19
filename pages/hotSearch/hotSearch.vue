<template>
	<view class="hotSearch">
		<view-loader :isLoading="isLoading" top="52px"></view-loader>
		<view class="tab">
			<uni-list>
				<uni-list-item v-for="(item,index) in hotListsMenu" @tap="changeList(item)"
					:style="[{'color':item.color},item.active?activeStyle:'']">{{item.title}}</uni-list-item>
			</uni-list>
		</view>
		<list class="listData">
			<cell class="listItem" v-for="(item, index) in listData" :key="item.index"
				:style="{color:activeStyle['background-color']}">
				<text
					@tap="toNewView(item.mobilUrl)">{{item.index}}:{{item.title}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
				<text style="margin-left: 20px;font-size:10px;">热度:{{item.hot}}</text>
			</cell>
		</list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: false,
				listData: [],
				weiboList: [],
				activeStyle: {
					'background-color': '#fa7d3c',
					'color': 'white'
				},
				hotListsMenu: [{
						'id': 0,
						'title': '微博',
						'name': 'wbHot',
						'color': '#fa7d3c',
						'active': true
					},
					{
						'id': 1,
						'title': '贴吧',
						'name': 'baiduRY',
						'color': '#47a8ed',
						'active': false
					},
					{
						'id': 2,
						'title': 'B站',
						'name': 'bili',
						'color': '#fb7299',
						'active': false
					},
					{
						'id': 3,
						'title': '知乎',
						'name': 'zhihuHot',
						'color': '#0066ff',
						'active': false
					},
					{
						'id': 4,
						'title': '百度',
						'name': 'baiduRD',
						'color': '#e10602',
						'active': false
					}
				]
			}
		},
		onLoad() {
			this.isLoading = true;
			this.getHotData('wbHot');
			setTimeout(() => {
				this.isLoading = false;
			}, 500)
		},
		methods: {
			changeList(value) {
				// tabBar切换热搜列表
				this.listData = null;
				this.isLoading = true;
				this.hotListsMenu.forEach(item => {
					item.active = false;
				})
				this.hotListsMenu[value.id]['active'] = true;
				this.activeStyle = {
					'background-color': value.color,
					'color': 'white'
				}
				this.hotListsMenu[value.id].active = true;
				this.getHotData(value.name)
				setTimeout(() => {
					this.isLoading = false;
				}, 500)
			},
			getHotData(type) {
				// 获取热点数据
				uni.request({
					url: 'https://api.vvhan.com/api/hotlist?type=' + type,
					method: 'GET',
					success: (res) => {
						this.listData = res.data.data;
					}
				})
			},
			toNewView(v) {
				// 链接跳转
				// plus.runtime.openURL(v);
				let url = encodeURIComponent(v + '');
				uni.navigateTo({
					url: '../webView/webView?url=' + url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	$weibo:#fa7d3c;
	$tieba:#47a8ed;
	$bili:#fb7299;
	$zhihu:#0066ff;
	$baidu:#e10602;

	.hotSearch {

		.tab {
			width: 100%;
			height: 50px;
			background-color: white;
			position: fixed;

			uni-list {
				display: flex;
				justify-content: space-around;
				align-items: center;
				border-top: 1px solid black;
				border-bottom: 1px solid black;
				height: 100%;
				transition: .5s;

				uni-list-item {
					transition: 1s;
					background-color: white;
					text-align: center;
					padding: 10px 20px;
					border-radius: $uni-border-radius-base;
				}
			}
		}

		.weiboList,
		.listData {
			display: flex;
			padding-top: 50px;
			justify-content: center;
			flex-direction: column;
			text-indent: 20px;
			font-size: 18px;
			transition: 1s;

			.listItem {
				margin-top: 20px;
				font-size: 18px;
				color: $weibo;
				padding: 3px;
				transition: 1s;

				&:active {
					color: pink;
				}
			}
		}
	}
</style>
