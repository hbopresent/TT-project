function Font() {
  this.font0 = document.getElementById("font0");
  this.font1 = document.getElementById("font1");
  this.font2 = document.getElementById("font2");
  this.font3 = document.getElementById("font3");
  this.font4 = document.getElementById("font4");
  this.leaveFontList = document.getElementById("leaveFontList");
}

Font.prototype = {
  init: function() {

  }
}

var font = new Font();
font.init();
