import { request } from "./request";

// 封装的意义,把首页的网络请求都放在文件夹中,可以方便统一管理
export function getHomeMulitidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}


