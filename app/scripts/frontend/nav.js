function Nav() {
  // navigation
  this.navbarBtn = document.getElementById("navbarBtn");
  this.navPage = document.getElementById("navPage");
  this.gotoHome = document.getElementById("gotoHome");
  this.gotoPlay = document.getElementById("gotoPlay");
  this.gotoLookbook = document.getElementById("gotoLookbook");
  this.gotoAbout = document.getElementById("gotoAbout");
  this.navFirstbar = document.getElementById("navFirstbar");
  this.navSecondbar = document.getElementById("navSecondbar");
  // navigation state
  this.navState = false;
}

Nav.prototype = {
  init: function() {
    nav.setListener();
  },
  setListener: function() {
    nav.navbarBtn.addEventListener("click", nav.handlenavPage);
    nav.gotoHome.addEventListener("click", function() {
      main.handlePages("homeSection");
      nav.handlenavPage();
    });
    nav.gotoPlay.addEventListener("click", function() {
      main.handlePages("playSection");
      nav.handlenavPage();
    });
    // nav.gotoLookbook.addEventListener("click", function() {
    //   main.handlePages("lookbookSection");
    //   nav.handlenavPage();
    // });
  },
  getnavState: function() {
    return nav.navState;
  },
  setnavState: function(state) {
    nav.navState = state;
  },
  handlenavPage: function() {
    var state = nav.getnavState();
    state = !state;
    if(state === false) {
      // close nav page
      nav.setnavbarBtnStyle("close");
      nav.closenavPage();
    }
    if(state === true) {
      // open nav page
      nav.setnavbarBtnStyle("open");
      nav.opennavPage();
    }
    nav.setnavState(state);
  },
  setnavbarBtnStyle: function(command) {
    if(command === "open") {
      nav.navFirstbar.style.backgroundColor = "#000";
      nav.navSecondbar.style.backgroundColor = "#000";
      nav.navFirstbar.style.top = "14.5px";
      nav.navFirstbar.style.transform = "rotateZ(45deg)";
      nav.navSecondbar.style.bottom = "14.5px";
      nav.navSecondbar.style.transform = "rotateZ(-45deg)";
    }
    if(command === "close") {
      nav.navFirstbar.style.backgroundColor = "#FFF";
      nav.navSecondbar.style.backgroundColor = "#FFF";
      nav.navFirstbar.style.top = "10px";
      nav.navFirstbar.style.transform = "rotateZ(0deg)";
      nav.navSecondbar.style.bottom = "10px";
      nav.navSecondbar.style.transform = "rotateZ(0deg)";
    }
  },
  opennavPage: function() {
    nav.navPage.style.display = "flex";
  },
  closenavPage: function() {
    nav.navPage.style.display = "none";
  }
};

var nav = new Nav();
nav.init();
