// /*
//  * 模拟服务端数据获取
//  */
//
// var _products = [
//     {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
//     {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
//     {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
// ]
//
// export default {
//     // 获取数据
//     getProducts: function (callback) {
//         setTimeout(callback(_products), 300)
//     }
// }
import axios from 'axios'
function apiAxiosGet(callback) {
  axios.get('/api/index.json', {})
    .then(function (response) {
      console.log(response)
      callback(response.data.products)
    })
}

export default {
  getProducts: function(callback) {
    setTimeout(apiAxiosGet(callback), 300)
  }
}