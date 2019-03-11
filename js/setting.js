document.addEventListener('DOMContentLoaded', updateKeywordsList)
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('save').addEventListener('click', addItem);
  document.getElementById('delete').addEventListener('click', deleteItem);
  document.getElementById('redirect').addEventListener('click', setRedirection);

  document.getElementById('reset').onclick = function(){
    chrome.storage.local.clear(function(){
      alert("all keywords has been cleared");
      location.reload();
    })
  }
});

function setRedirection(){
  var url = document.getElementById('redirection').value
  console.log(url);
  chrome.storage.local.set({'redirectionUrl': url}, function(){
    alert("Redirection set successfully");
  })
}

function deleteItem(){
  chrome.storage.local.get('keyWords', function (result) {
    var x = document.getElementById("key_word_list");
    var remainingKeyWords = result.keyWords; 
    remainingKeyWords.splice(x.selectedIndex, 1);
    console.log('selectindex = ' + x.selectedIndex + ' ' + remainingKeyWords); 
    chrome.storage.local.set({keyWords: remainingKeyWords}, function () {
      x.remove(x.selectedIndex);
    })
  });
}

function updateKeywordsList(){
  chrome.storage.local.get('keyWords', function (result) {
    var x = document.getElementById("key_word_list");
    result.keyWords.forEach(function(element){
      var option = document.createElement("option");
      option.text = (element);
      x.add(option);
    });
  });
}

function addItem(){
  var newElement = document.getElementById("saveline").value;
  if (newElement == ""){
    alert("Key words should not be empty");
  }
  else{
    // by passing an object you can define default values e.g.: []
    chrome.storage.local.get({keyWords:[]}, function (result) {
        // the input argument is ALWAYS an object containing the queried keys
        // so we select the key we need
        var keyWords = result.keyWords;
        keyWords.push(newElement);

        // set the new array value to the same key
        chrome.storage.local.set({keyWords: keyWords}, function () {
            // if you don't  want to define default values
            chrome.storage.local.get('keyWords', function (result) {
              var x = document.getElementById("key_word_list");
              var option = document.createElement("option");
              option.text =(newElement);
              x.add(option);
            });
        });
    });
  }
} 