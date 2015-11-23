$(document).ready(function () {
$(".deleteButton").click( function(){
  $(this).parents("tr").remove();
});
$(".check").on('click', function(){
  $(this).parents("tr").wrap("<strike>");
});
});
