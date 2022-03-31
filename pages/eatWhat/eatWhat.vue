<template>
	<view class="eatWhat">
		<view class="tip todayFood ">
			<view class="todayFood" v-if="isTodayFood&&!isAdd">
				<text v-for="(food,index) in todayFood" :key="index">{{food}}</text>
			</view>
			<view class="addFood" v-if="!isTodayFood&&isAdd">
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
			<view class="" v-if="!isAdd&&!isTodayFood">xxxxxx</view>
		</view>
		<view class="tip" :class="[{isTodayFood:isTodayFood}]" @tap="showToday">
			点我查看今天吃点什么...
		</view>
		<view class="tip" :class="[{isTodayFood:isTodayFood}]" @tap="showAdd">
			点我添加可选食物...
		</view>
		<view class="foodList">
			<!-- <text>Breakfast</text>
			<view class="foods" v-for="(bfood,index) in totalBreakfast" :key="index+bfood">
				{{index}}-{{bfood}}
			</view>
			<text>Lunch</text>
			<view class="foods" v-for="(lfood,index) in totalLunch" :key="index+lfood">
				{{index}}-{{lfood}}
			</view>
			<text>Dinner</text>
			<view class="foods" v-for="(dfood,index) in totalDinner" :key="index+dfood">
				{{index}}-{{dfood}}
			</view> -->
			<uni-table stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th align="center">xxx</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-td>aa</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="mark" @tap="markTap"></view>
	</view>
</template>

<script>
	import utils from '../../commons/js/utils.js'
	export default {
		data() {
			return {
				// 选择
				values: '',
				// 用于添加到storage
				breakfast: [],
				lunch: [],
				dinner: [],
				foods: '',
				isAdd: false,
				// 从储存中获取到总的
				totalBreakfast: [],
				totalLunch: [],
				totalDinner: [],
				// 今天吃的
				todayFood: '',
				isTodayFood: false
			};
		},
		onLoad() {
			this.getTodayFood()
		},
		methods: {
			add(e) {
				if (this.foods === '') return console.log('还未添加任何东西');
				switch (this.values) {
					case 'breakfast': {
						this.breakfast.push(this.foods);
						utils.cache(this.values, JSON.stringify(this.breakfast))
						break;
					};
				case 'lunch': {
					this.lunch.push(this.foods);
					utils.cache(this.values, JSON.stringify(this.lunch))
					break;
				};
				case 'dinner': {
					this.dinner.push(this.foods);
					utils.cache(this.values, JSON.stringify(this.dinner))
					break;
				}
				}
			},
			showAdd() {
				this.isTodayFood = false;
				this.isAdd = !this.isAdd
			},
			getTodayFood() {
				this.totalBreakfast = JSON.parse(utils.cache('breakfast'));
				this.totalLunch = JSON.parse(utils.cache('lunch'));
				this.totalDinner = JSON.parse(utils.cache('dinner'));
				console.log(this.totalBreakfast);
				console.log(this.totalLunch);
				console.log(this.totalDinner);
			},
			showToday() {
				let tbRdm = Math.floor(Math.random() * this.totalBreakfast.length);
				let tlRdm = Math.floor(Math.random() * this.totalLunch.length);
				let tdRdm = Math.floor(Math.random() * this.totalDinner.length);
				console.log(tbRdm, tlRdm, tdRdm);
				let TFood = [`早餐:${this.totalBreakfast[tbRdm]}`, `午餐:${this.totalLunch[tlRdm]}`,
					`晚餐:${this.totalDinner[tdRdm]}`
				];
				if (!utils.cache('todayFood')) {
					utils.cache('todayFood', JSON.stringify(TFood), 60 * 60 * 24);
					this.todayFood = JSON.parse(utils.cache('todayFood'));
				} else {
					this.todayFood = JSON.parse(utils.cache('todayFood'));
				}
				this.isAdd = false
				this.isTodayFood = !this.isTodayFood;
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
			transition: 1s;
			// transform: translateY(-190px);
		}

		.todayFood {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: auto;
		}

		.addFood {
			// position: absolute;
			background-color: $uni-bg-color-base;
			// width: 350px;
			height: 150px;
			border-radius: $uni-border-radius-base;
			top: 5%;
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
				text-align: center;
			}
		}

		.foodList {
			width: 90%;
			min-height: 500px;
			margin-top: 15px;
			background-color: $uni-bg-color-base;
			border-radius: $uni-border-radius-base;
			font-size: 30px;
			color: #FFFFFF;
			text-align: center;
			// display: none;

			.food {}
		}

		// .foodList {
		// 	.food {}
		// }

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
