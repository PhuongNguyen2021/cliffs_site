$(document).ready(function() {
    $("td").click(function () {//user select a table data cell
        var content = $(this).text(); //get content of cell
        // var cliff = $(this).closest('table').find('th').eq($(this).index()).text();

        var columnIndex = $(this).index();
        var cliff = $("th":eq(columnIndex)).text();


        if (content != "Not Available") {//check if content does not contain a particular string}
        $(this).toggleClass("highlight");

            if($(this).hasClass("highlight")) { //check if selected cell has class
                $('#displaySelected').css("visibility", "visible"); //make display box visible
                $('#displaySelected').css("margin-top", "2em"); //add spaces above display box
                $('#result').append("<p>" + content + " at " + cliff + "</p>"); //add child element with contents of cell

            } else {//if selected cell don't have class
                $('#result p:contains('+content+')').remove(); //remove child element

                if($('#result').has('p').length == false) { //check if there are any child elements within parents
                    $('#displaySelected').css("visibility", "hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top","0"); //remove space above display box
                }


            }

        }
    });
});


