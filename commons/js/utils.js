function cache(key, value, time = 3600 * 24 * 24 * 24) {
	let nowTime = Date.parse(new Date()) / 1000;
	if (key && value) {
		// 设置到期时间
		let expire = nowTime + Number(time);
		uni.setStorageSync(key, JSON.stringify(value) + '|' + expire);
		console.log('已经把' + key + '存入缓存,过期时间是' + expire);

	} else if (key && !value) {
		let val = uni.getStorageSync(key);
		if (val) {
			// 判断缓存是否过期
			let temp = val.split('|');
			if (!temp[1] || temp[1] <= nowTime) {
				uni.removeStorageSync(key);
				console.log(key + '缓存已失效');
				return '';
			} else {
				return JSON.parse(temp[0]);
			}
		}
	}
}

module.exports = {
	cache
}
