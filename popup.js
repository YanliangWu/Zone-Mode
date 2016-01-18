// Zone-Mode 0.8

function openStarterPage(){
    window.open("setting.html");
}

// Timer Session
function Starting () {
  var time;
  time = document.getElementById("custom-time").value;
  time = time * 60 * 1000;
}


// Starting function, set the switch from 0 to 1.
document.addEventListener('DOMContentLoaded', function () {
    update = chrome.extension.getBackgroundPage().updateState;
    t_mode = chrome.extension.getBackgroundPage().timer_mode;
    document.getElementById('startButton').addEventListener('click', function() {
      update();
      if(chrome.extension.getBackgroundPage().started == true){
        document.getElementById("startButton").innerHTML = "Pause";
        document.getElementById("working_status").innerHTML = "Currently in Zone";
      }
      else{
        document.getElementById("startButton").innerHTML = "Start";
        document.getElementById("working_status").innerHTML = "Currently out of Zone";
        
      }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('settingButton').addEventListener('click', openStarterPage);
});

document.addEventListener('DOMContentLoaded', function () {
    if(chrome.extension.getBackgroundPage().started == true){
      document.getElementById("startButton").innerHTML = "Pause";
      document.getElementById("working_status").innerHTML = "Currently in Zone" ;
    }
    else{
      document.getElementById("working_status").innerHTML = "Zone-MODE Not Working" ;
    }
});
