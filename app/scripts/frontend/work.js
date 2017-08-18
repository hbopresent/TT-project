function Work() {
  // play section
  this.tattooWords = document.getElementById("tattooWords");
  this.tattooWordsLen = document.getElementById("tattooWordsLen");
  this.userContent = document.getElementById("userContent");
  this.userFont = document.getElementById("userFont");
  this.userColor = document.getElementById("userColor");
  this.userQuantity = document.getElementById("userQuantity");
  this.decreaseGoods = document.getElementById("decreaseGoods");
  this.addGoods = document.getElementById("addGoods");
  this.resetBtn = document.getElementById("resetBtn");
}

Work.prototype = {
  init: function() {
    work.setListener();
  },
  setListener: function() {
    // open font list
    work.userFont.addEventListener("click", font.openfontlist);
    // update tatto words when user is typeing
    window.addEventListener("keydown", function(e) {
      if(document.activeElement.id == "tattooWords") {
        work.countWordsLength(e.code);
        work.setuserContent(e.key);
      }
    });
    // work.userFont.addEventListener("click", openfontlist);
    work.decreaseGoods.addEventListener("click", function() {
      work.calculateGoods("substract");
    });
    work.addGoods.addEventListener("click", function() {
      work.calculateGoods("add");
    });
    // reset all data on work input options
    work.resetBtn.addEventListener("click", work.resetAllWork);
  },
  calculateGoods: function(operation) {
    var nowQuantity = parseInt(work.getNowQuantity());
    if(operation == "add") {
      nowQuantity += 1;
    }

    if(operation == "substract") {
      if(nowQuantity > 1) {
        nowQuantity -= 1;
      }
    }
    work.userQuantity.innerHTML = nowQuantity;
  },
  getNowQuantity: function() {
    var nowGoodsQuan = work.userQuantity.innerHTML;
    return nowGoodsQuan;
  },
  resetAllWork: function() {
    work.tattooWords.value = "";
    work.tattooWordsLen.value = 25;
    work.userContent.innerHTML = "";
    // default value of goods quantity is 1
    work.userQuantity.innerHTML = 1;
  },
  countWordsLength: function(code) {
    if(code == "Backspace") {
      if(work.tattooWordsLen.value < 25) {
        work.tattooWordsLen.value = parseInt(work.tattooWordsLen.value) + 1;
      }
    }
    else {
      if(work.tattooWordsLen.value > 0) {
        work.tattooWordsLen.value = (25 - (work.tattooWords.value.length));
      }
    }

    // else {
    //   work.letterAmount.style.animation = "notification 0.2s ease forwards";
    // }
  },
  setuserContent: function(key) {
    // delay a few seconds to read value
    setTimeout(function() {
      work.userContent.innerHTML = work.tattooWords.value;
    }, 100);
  }
};

var work = new Work();
work.init();
