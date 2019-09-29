import axios from 'axios'
 
const axiosPostForm = axios.create({
    baseURL: "", // api的base_url
    timeout: 10000, // request timeout
    headers: {
        'Content-Type': 'application/json'
    }
})
 
axiosPostForm.interceptors.request.use(
    config => {
        //根据实际项目修改拦截器
        console.log(config);
        config.data = config.data||{}
        return config;
    },
    error =>{
        return Promise.reject(error);
    });
 
axiosPostForm.interceptors.response.use(
    response => {
        // console.log(response);
        return response.data
    },
    error => {
        return Promise.reject(error);
    })
export default axiosPostForm