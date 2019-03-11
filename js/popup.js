// Zone-Mode 0.8
function openSettingPage(){
    window.open("config.html");
}

function setActivationStatus(status){
  chrome.storage.local.set({"activated": status});
}

function setBadge(text, color){
  chrome.browserAction.setBadgeText({text: text});
  chrome.browserAction.setBadgeBackgroundColor({color: color});
}


/**
 * Activate/Deactivate plugin. 
 */
function activationToggle(){
  try {
    chrome.storage.local.get(['activated'], function(result) {
      if(result.activated === true){
        document.getElementById("startButton").innerHTML = 'Activate';
        setBadge('','#4688F1');
        setActivationStatus(false);
      } else{
        document.getElementById("startButton").innerHTML = 'Deactivate';
        setBadge('ON','#4688F1');
        setActivationStatus(true);
      }
    });
  }
  catch(err) {
    console.log('Activation States Toggling Error: ' + err);
  }
}

function updatePopupStatus(){
  try {
    chrome.storage.local.get(['activated'], function(result) {
      if(result.activated === true){
        document.getElementById("startButton").innerHTML = 'Deactivate';
      } else{
        document.getElementById("startButton").innerHTML = 'Activate';
      }
    });
  }
  catch(err) {
    console.log('Activation States Toggling Error: ' + err);
  }
}


document.addEventListener('DOMContentLoaded', updatePopupStatus);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('startButton').addEventListener('click', activationToggle);
  document.getElementById('settingButton').addEventListener('click', openSettingPage);
});

