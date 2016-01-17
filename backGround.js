var started = false;
var key_word = ["zone","setting","chrome"];
disableBrowserAction();

function get_key_words(){
  chrome.storage.local.get("key_words",function(data){
    if(data.key_words == undefined){
        key_word = ["zone","setting","chrome"];

    }
    else{
      key_word = data.key_words;
      key_word.push("zone","setting","chrome");
      //alert(key_word);
    }
  })
}

get_key_words();

chrome.storage.onChanged.addListener(function(){
  get_key_words();
})

function disableBrowserAction(){
    chrome.browserAction.setIcon({path:"inactive.png"});
    //chrome.tabs.executeScript(null, {file: "togglecontentscript.js"})
}


function checkList(current_url){

  var matched = -1;
  for(i = 0; i < key_word.length; i++){
    matched = current_url.indexOf(key_word[i]);
    if (matched != -1){
      break;
    }
  }
  if (matched == -1){
    //redirect to an internal page
    chrome.tabs.update({ url: 'chrome-extension://' + chrome.runtime.id + '/zone.html' });
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
