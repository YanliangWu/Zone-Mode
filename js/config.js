
var action = '<td>' + 
'<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
'<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
'<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>' +
'</td>'

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' + action +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        var newElement = input.first().val();
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
        });
        
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
            
            // by passing an object you can define default values e.g.: []
            chrome.storage.local.get({keyWords:[]}, function (result) {
                var keyWords = result.keyWords;
                keyWords.push(newElement);
                // set the new array value to the same key
                chrome.storage.local.set({keyWords: keyWords}, function () {
                    console.log("Add new element to keywords: " + newElement);
                });
            });
        }
    });
    
    // Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
            removeItem($(this).text());
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
        $(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });

    // Delete row on delete button click
	$(document).on("click", ".delete", function(){
        var keyword = $(this).parents("td").siblings(".keyword:first")[0].innerHTML;
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
        removeItem(keyword);
    });
});

function removeItem(keyword){
    chrome.storage.local.get('keyWords', function (result) {
        var remainingKeyWords = result.keyWords; 
        var keywordIndex = remainingKeyWords.indexOf(keyword);
        if (keywordIndex > -1) {
            remainingKeyWords.splice(keywordIndex, 1);
            chrome.storage.local.set({keyWords: remainingKeyWords}, function () {
                console.log('Deleting ' + keyword + ' from keyword lists')
            })
        }
    });
}

$(document).ready(function(){
    // Document on load Set up everything first
    chrome.storage.local.get('keyWords', function (result) {
        console.log(result.keyWords);
        result.keyWords.forEach(function(keyword){
            var row = '<tr>' + '<td class = "keyword">' + keyword +'</td>' + action +'</tr>';
            $("table").append(row);
        });
      });
})