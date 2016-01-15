window.onload = function(){
  document.getElementById('save').onclick =  function() {
    var value = document.getElementById("saveline").value;
    chrome.storage.local.set({"whitelist_1" : value}, function(){
      alert("successfully saved");
    });
  }
  document.getElementById('load').onclick = function(){
    chrome.storage.local.get("whitelist_1",function(data){
      console.log(data.whitelist_1);
    })
  }
}

// by passing an object you can define default values e.g.: []
chrome.storage.local.get([]}, function (result) {
    // the input argument is ALWAYS an object containing the queried keys
    // so we select the key we need
    var userKeyIds = result.userKeyIds;
    userKeyIds.push({keyPairId: keyPairId, HasBeenUploadedYet: false});
    // set the new array value to the same key
    chrome.storage.local.set({userKeyIds: userKeyIds}, function () {
        // you can use strings instead of objects
        // if you don't  want to define default values
        chrome.storage.local.get('userKeyIds', function (result) {
            console.log(result.userKeyIds)
        });
    });
});
