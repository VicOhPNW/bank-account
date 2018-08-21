


//User interface
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var name = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());

    $(".amount").append(" $" + initialDeposit);

  });
});
