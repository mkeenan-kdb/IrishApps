function scaleContent() {
  var newWidth = document.body.offsetWidth;
  var screenWidth = screen.width;
  if(screenWidth == newWidth){
    return;
  }else{
    pageWidth = newWidth;
    document.querySelector("#appContainer").style.marginTop = document.querySelector(".web-title").offsetHeight + 20 + "px";
  };
}

(function(){
  //document.getElementById('inputText').addEventListener('keyup', processText);
 console.log("page loaded!")
 document.querySelector("#appContainer").style.marginTop = document.querySelector(".web-title").offsetHeight + 20 + "px";
 window.onresize = scaleContent;
})();
