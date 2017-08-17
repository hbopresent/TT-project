function Cart() {
  this.cartSection = document.getElementById("cartSection");
  this.cartBtn = document.getElementById("cartBtn");
  this.cartGoodsQuan = document.getElementById("cartGoodsQuan");
  this.cartGoddsDele = document.getElementById("cartGoddsDele");
  // cart state
  this.cartState = false;
}

Cart.prototype = {
  init: function() {
    cart.setListener();
  },
  setListener: function() {
    cart.cartBtn.addEventListener("click", cart.handlecartPage);
  },
  getcartState: function() {
    return cart.cartState;
  },
  setcartState: function(state) {
    cart.cartState = state;
  },
  handlecartPage: function() {
    var state = cart.getcartState();
    state = !state;

    if(state === false) {
      // close cart page
      cart.closecartPage();
    }
    if(state === true) {
      // open cart page
      cart.opencartPage();
    }
    cart.setcartState(state);

  },
  opencartPage: function() {
    // close the page behind cart
    var nowLocation = main.getNowLocation();
    main.closePage(nowLocation);
    cart.cartSection.style.display = "block";
  },
  closecartPage: function() {
    // open the page behind cart
    var nowLocation = main.getNowLocation();
    main.directPage(nowLocation);
    cart.cartSection.style.display = "none";
  }
}

var cart = new Cart();
cart.init();
