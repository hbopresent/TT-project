function Main() {
  // main page section
  this.homeSection = document.getElementById("homeSection");
  this.playSection = document.getElementById("playSection");
  this.aboutSection = document.getElementById("aboutSection");
  this.lookbookSection = document.getElementById("lookbookSection");
  // lookbook carousel
  this.lookbookCarousel = document.getElementById("lookbookCarousel");
  // guide button
  this.guideToAbout = document.getElementById("guideToAbout");
  this.guideToPlay = document.getElementById("guideToPlay");
  this.guideToPlay2 = document.getElementById("guideToPlay2");
  // brand logo
  this.brandlogo = document.getElementById("brandlogo");
  // location
  // default: home
  // others: play / cart / font / lookbook / nav
  this.location = "homeSection";
  this.locationAry = ["homeSection", "playSection", "lookbookSection",
                      "aboutSection", "cartSection", , "navPage", "fontlistSection"];
}

Main.prototype = {
  init: function() {
    main.setListener();
  },
  setListener: function() {
    main.brandlogo.addEventListener("click", function() {
      main.handlePages("homeSection");
    });
    main.guideToPlay.addEventListener("click", function() {
      main.handlePages("playSection");
    });
    main.guideToPlay2.addEventListener("click", function() {
      main.handlePages("playSection");
    });
  },
  getNowLocation: function() {
    var nowLocation = main.location;
    return nowLocation;
  },
  setNowLocation: function(setThePage) {
    main.location = setThePage;
  },
  closePage: function(closeThePage) {
    switch(closeThePage) {
      case "homeSection":
        main.homeSection.style.display = "none";
        break;
      case "playSection":
        main.playSection.style.display = "none";
        break;
      case "lookbookSection":
        main.lookbookSection.style.display = "none";
        break;
    }
  },
  handlePages: function(gotoThePage) {
    var nowLocation = main.getNowLocation();

    if(nowLocation == gotoThePage) {}
    else {
      main.directPage(gotoThePage);
      main.closePage(nowLocation);
      main.setNowLocation(gotoThePage);
    }
  },
  directPage: function(gotoThePage) {
    switch(gotoThePage) {
      case "homeSection":
        main.homeSection.style.display = "block";
        break;
      case "playSection":
        main.playSection.style.display = "block";
        break;
      case "lookbookSection":
        main.lookbookSection.style.display = "block";
        break;
    }
  }
};
var main = new Main();
main.init();
