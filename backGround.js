var x = false;
disableBrowserAction();



function setInactive(){
    chrome.browserAction.setIcon({path:"inactive.png"});
    //chrome.tabs.executeScript(null, {file: "togglecontentscript.js"})
}



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(x == true && changeInfo.url != undefined){
      var current_url = changeInfo.url;

      // we have origional key words such as zoom, blank etc.
      var key_word = ["uwaterloo","zoom", "chrome"];

      var matched = -1;

      for(i = 0; i < key_word.length; i++){
        matched = current_url.indexOf(key_word[i]);
        if (matched != -1){
          break;
        }
      }
      if (matched == -1){
        alert("ZOOM!");
      }
  }
});

function setActive(){
    chrome.browserAction.setIcon({path:"active.png"});
}

function updateState(){
    if(x==false){
        x=true;
        setActive();
    }else{
        x=false;
        setInactive();
    }
}

chrome.browserAction.onClicked.addListener(updateState);
