
window.onload = function(){


  document.getElementById('save').onclick =  function() {
    var to_be_add = document.getElementById("saveline").value;
    if (to_be_add == ""){
      alert("key words should not be empty");
    }
    else{
    // by passing an object you can define default values e.g.: []
    chrome.storage.local.get({key_words:[]}, function (result) {
        // the input argument is ALWAYS an object containing the queried keys
        // so we select the key we need
        var key_words = result.key_words;
        key_words.push(to_be_add);
        // set the new array value to the same key
        chrome.storage.local.set({key_words: key_words}, function () {
            // if you don't  want to define default values
            chrome.storage.local.get('key_words', function (result) {
              var x = document.getElementById("key_word_list");
              var option = document.createElement("option");
              option.text =(to_be_add);
              x.add(option);
            });
        });
    });
  }
}

  document.getElementById('delete').onclick = function(){
    
    chrome.storage.local.get("key_words",function(data){
      var temp = data.key_words;
      if (temp != undefined){
        var index = array.indexOf();
      }
    })
  }


  document.getElementById('reset').onclick = function(){
    chrome.storage.local.clear(function(){
      alert("all keywords has been cleared");
      location.reload();
    })
  }


  chrome.storage.local.get("key_words",function(data){
    if (data.key_words != undefined){
    for (i = 0; i < data.key_words.length; i++){
      var x = document.getElementById("key_word_list");
      var option = document.createElement("option");
      option.text = data.key_words[i];
      x.add(option);
    }
  }
  })


}
