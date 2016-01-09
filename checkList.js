var current_url = window.location.href;


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
  window.location.replace("zoom.html");
}
