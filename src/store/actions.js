import { ADD_COUNTER, ADD_TO_CART } from "./mutations-types";

export default {
  //这是一个函数  payload是传过来的对象
  addCart(context, payload) {
    return new Promise((resolve,reject) =>{
      const oldProduct = context.state.cartlist.find(
        (item) => item.iid === payload.iid
      );
  
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("商品数量+1")
      } else {
        payload.count = 1;
        payload.checked = true;
        context.commit(ADD_TO_CART, payload);
        reject("添加商品成功~")
      }
    })
    
  },
};
