// import Vue from 'vue'
// import axios from 'axios'

// const baseUrl='https://api.vvhan.com/api/hotlist';
// // create an axios instance
// const service = axios.create({
// 	// baseURL: 'http://127.0.0.1:8686', // url = base url + request url
// 	// ``baseURL:baseUrl+ request url,
// 	//withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
// 	timeout: 6000, // request timeout
// 	crossDomain: true
// })

// // request拦截器,在请求之前做一些处理
// service.interceptors.request.use(
//     config => {
//         // if (store.state.token) {
//         //     // 给请求头添加user-token
//         //     config.headers["user-token"] = store.state.token;
//         // }
//         console.log('请求拦截成功')
//         return config;
//     },
//     error => {
//         console.log(error); // for debug
//         return Promise.reject(error);
//     }
// ); 

// //配置成功后的拦截器
// service.interceptors.response.use(res => {
//     if (res.data.status== 200) {
//         return res.data
//     } else {
//         return Promise.reject(res.data.msg);
//     }
// }, error => {
// 	if (error.response.status) {
// 		switch (error.response.status) {
// 			case 401:
// 				break;
// 			default:
// 				break;
// 		}
// 	}
//     return Promise.reject(error)
// })

// export default service
