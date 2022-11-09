$(document).ready(function(){
$("#form1").click(function(){

// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "../insert.php",
data: dataString,
cache: false,
success: function(result){
alert(result);

});
}
return false;
});
});
