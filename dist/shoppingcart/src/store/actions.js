"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _products = require("../api/products");

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllProducts = function getAllProducts(context) {
  var commit = context.commit;
  _products2.default.getProducts(function (products) {
    //console.info(products)
    commit("receive_product", products);
  });
}; /*
    * Action 类似于 mutation，不同在于：
    * Action 提交的是 mutation，而不是直接变更状态。
    * Action 可以包含任意异步操作。
    *
    * 据此，可以简单地把actions看成对mutations的封装
    * */

// 引入api


var addToCart = function addToCart(context, productInfo) {
  var commit = context.commit;

  if (productInfo.inventory > 0) {
    //库存大于0的时候可以调用
    commit("add_to_cart", productInfo);
  }
};

var deleteCartProducts = function deleteCartProducts(context, productInfo) {
  var commit = context.commit;

  if (productInfo.num > 0) {
    commit("delete_cart_product", productInfo);
  }
};

var submitCart = function submitCart(context) {
  var commit = context.commit;
  commit("submit_cart_product");
};

exports.default = {
  getAllProducts: getAllProducts,
  addToCart: addToCart,
  deleteCartProducts: deleteCartProducts,
  submitCart: submitCart
};
//# sourceMappingURL=actions.js.map