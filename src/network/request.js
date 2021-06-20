import axios from "axios";

//最终方法2
export function request(config){
  // 1.实例化一个axios
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2.axios的拦截器
    // axios.interceptors //全局的拦截
    // instance1.interceptors.response;  //局部响应请求
    // 2.1请求拦截的作用（在发送请求前做些什么）
    //局部拦截请求,拦截的是config配置信息，如果没有响应的话就拿不到数据，因为给拦截了
    instance1.interceptors.request.use(config => {
      // console.log(config);
      return config //拦截完后得return回去！！！！不然拿不到config
    },err => {
      console.log(err);
    })

    // 2.2响应拦截（在响应到请求后做些什么再返回数据）
    // 响应拦截器，就是在请求结果返回后，先不直接导出，而是先对响应码等等进行处理，
    // 处理好后再导出给页面，如果将这个对响应码的处理过程抽出来，就成了所谓的响应拦截器；
    instance1.interceptors.response.use(res => {
      // console.log(res);
      return res.data      //拦截完要返回，否则undefined
    },err => {
      console.log(err);
    })

    // 3.发送真正的网络请求
    return instance1(config)  //因为instance1内部本身就调用了Promise，因此已经有了resolve和reject，直接返回即可
}
