var started = false;
disableBrowserAction();

function disableBrowserAction(){
    chrome.browserAction.setIcon({path:"inactive.png"});
    //chrome.tabs.executeScript(null, {file: "togglecontentscript.js"})
}


function checkList(current_url){
  //alert(current_url);
  // we have origional key words such as zoom, blank etc.
  var key_word = ["uwaterloo","zoom", "chrome", "google"];
  var matched = -1;

  for(i = 0; i < key_word.length; i++){
    matched = current_url.indexOf(key_word[i]);
    if (matched != -1){
      break;
    }
  }
  if (matched == -1){
    //redirect to an internal page
    chrome.tabs.update({ url: 'chrome-extension://' + chrome.runtime.id + '/zoom.html' });
  }
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(started == true){
      checkList(tab.url);
  }
});

chrome.tabs.onReplaced.addListener(function(tabId, changeInfo, tab) {
    if(started == true){
      alert(tab.url);
  }
});


function enableBrowserAction(){
    chrome.browserAction.setIcon({path:"active.png"});
}

function updateState(){
    if(started==false){
        started=true;
        enableBrowserAction();
    }else{
        started=false;
        disableBrowserAction();
    }
}
