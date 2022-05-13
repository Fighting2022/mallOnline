import { request } from "./request";
export function getData(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}

//获取推荐的数据
export function getRecommendData() {
  return request({
    url: "/recommend",
  });
}

//封装一个获取商品属性的类
export class Goods {
  constructor(iteminfo, colums, services) {
    // 商品的标题
    this.title = iteminfo.title;
    // 商品新价格
    this.newPrice = iteminfo.price;
    // 商品就价格
    this.oldPrice = iteminfo.oldPrice;
    // 商品的的折扣
    this.discount = iteminfo.discountDesc;

    this.colums = colums;
    this.services = services;
    this.realPrice = iteminfo.lowNowPrice;
  }
}

//封装一个店铺属性的类
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sell = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

//封装一个商品参数的类
export class GoodsParam {
  constructor(itemParams) {
    //商品的尺码信息
    this.rule = itemParams.rule;
    //商品的生产信息
    this.info = itemParams.info;
  }
}
