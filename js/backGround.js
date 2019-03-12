var destination = 'https://google.ca'; 

function analyzeUrl(current_url){
  chrome.storage.local.get(['activated', 'keyWords', 'redirectionUrl'], function(result){
    console.log(result.keyWords);
    var redirectionUrl = result.redirectionUrl;
    console.log(redirectionUrl);
    result.keyWords.forEach(function(keyword){
      if(current_url.includes(keyword) && result.activated){
        console.log('Url Pattern Matched, redirecting to destination')
        chrome.tabs.update({ url: redirectionUrl });
      }
    })
  });
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log("Tab updated: " + tab.url);
  analyzeUrl(tab.url)
});

function setBadge(text, color){
  chrome.browserAction.setBadgeText({text: text});
  chrome.browserAction.setBadgeBackgroundColor({color: color});
}

chrome.storage.local.get('activated', function(item){
  if(item.activated === undefined){
    console.log('Initial Setup: Setting activated to false, blockCount to 0');
    chrome.storage.local.set({'activated': false, "blocked": 0});
  } else if(item.activated){
    setBadge('ON','#4688F1')
  } else{
    setBadge('','#4688F1')
  }
});
