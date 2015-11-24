$(document).ready(function () {
$(".deleteButton").click( function(){
  $(this).parents("tr").remove();
});
$(".check").on('click', function(){
  $(this).parent("td").next('td').css('text-decoration', 'line-through');
});
});
