function Font() {
  this.fontlist = document.getElementById("fontlist");
  this.font0 = document.getElementById("font0");
  this.font1 = document.getElementById("font1");
  this.font2 = document.getElementById("font2");
  this.font3 = document.getElementById("font3");
  this.font4 = document.getElementById("font4");
  this.closefontlistBtn = document.getElementById("closefontlistBtn");
  // font list
  this.fontlistSection = document.getElementById("fontlistSection");
  // temp variable of selected font
  this.selectedFontFamily = null;
}

Font.prototype = {
  init: function() {
    font.setListener();
  },
  setListener: function() {
    // close font list
    font.closefontlistBtn.addEventListener("click", font.closefontlist);
    // font list item
    for(var i = 0 ; i < font.fontlist.children.length ; i++) {
      font.fontlist.children[i].addEventListener("click", font.selectFont);
    }
  },
  openfontlist: function() {
    // close the page behind font list
    var nowLocation = main.getNowLocation();
    main.closePage(nowLocation);
    font.fontlistSection.style.display = "block";
  },
  closefontlist: function() {
    // open the page behind font list
    var nowLocation = main.getNowLocation();
    main.directPage(nowLocation);

    font.fontlistSection.style.display = "none";
    // set selected font to tattoo words
    // in order to avoid the DOM of tattooWords reseted
    if(font.selectedFontFamily != null) {
      work.tattooWords.style.fontFamily = font.selectedFontFamily;
    }
  },
  selectFont: function(e) {
    font.selectedFontFamily =  e.target.style.fontFamily;
    work.tattooWords.style.fontFamily = font.selectedFontFamily;
    font.closefontlist();
  }
};

var font = new Font();
font.init();
