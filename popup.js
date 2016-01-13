// Zoom-Mode 0.8

function openStarterPage(){
    window.open("setting.html");
}

// Timer Session
function Starting () {
  var time;
  time = document.getElementById("custom-time").value;
  time = time * 60 * 1000;
  //setTimeout(function () {document.getElementById("demo").innerHTML = "ZOOM-MODE Working" ;}, 0)
  chrome.runtime.sendMessage(1);
}

// Starting function, set the switch from 0 to 1.
document.addEventListener('DOMContentLoaded', function () {
    update = chrome.extension.getBackgroundPage().updateState;
    document.getElementById('startButton').addEventListener('click', function() {
      update();
      if(chrome.extension.getBackgroundPage().started == true){
        document.getElementById("working_status").innerHTML = "ZOOM-MODE Working" ;
      }
      else{
        document.getElementById("working_status").innerHTML = "ZOOM-MODE Not Working" ;
      }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('settingButton').addEventListener('click', openStarterPage);
});

document.addEventListener('DOMContentLoaded', function () {
    if(chrome.extension.getBackgroundPage().started == true){
      document.getElementById("working_status").innerHTML = "ZOOM-MODE Working" ;
    }
    else{
      document.getElementById("working_status").innerHTML = "ZOOM-MODE Not Working" ;
    }
});
