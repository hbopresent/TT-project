function Work() {
  // play section
  this.tattooWords = document.getElementById("tattooWords");
  this.tattooWordsLen = document.getElementById("tattooWordsLen");
  this.userFont = document.getElementById("userFont");
  this.userColor = document.getElementById("userColor");
  this.goodsQuantity = document.getElementById("goodsQuantity");
  this.addToCartBtn = document.getElementById("addToCartBtn");
  // goods object
  this.goodsInfo = {
    content: "",
    font: "",
    color: "",
    quantity: 0
  };
}

Work.prototype = {
  init: function() {
    work.setListener();
  },
  setListener: function() {
    work.addToCartBtn.addEventListener("click", function() {
      work.addGoods();
    });
  },
  setGoodsInfo: function() {
    work.goodsInfo.content = work.tattooWords.value;
    work.goodsInfo.font = work.userFont.value;
    work.goodsInfo.color = work.userColor.value;
    work.goodsInfo.quantity = work.goodsQuantity.value;
  },
  addGoods: function() {
    if(work.tattooWords.value != "") {
      work.setGoodsInfo();
      work.saveToCart();
    }
    else {
      alert("輸入框不可空白喔");
    }
  },
  saveToCart: function() {
    
  }
};

var work = new Work();
work.init();
