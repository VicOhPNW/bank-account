function UserInfo(name, initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;
}


function BankAccount(initialDeposit,deposit, withdraw) {
  this.initialDeposit = initialDeposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
}

BankAccount.prototype.balance = function() {
  if(this.deposit){
    return this.initialDeposit + this.deposit;
  }else{
  return this.initialDeposit - this.withdraw;
}
}

BankAccount.prototype.addDeposit = function() {
  return this.initialDeposit + this.deposit;
}

BankAccount.prototype.subWithdraw = function() {
  return this.initialDeposit + this.withdraw;
}




//User interface
$(document).ready(function(){
  var currentBalGlobal = 0;
  $("#input").submit(function(event){
    event.preventDefault();

    var name = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());
    var newUserInfo = new UserInfo(name, initialDeposit);
    var deposit = parseInt($("#deposit").val());
    var withdraw = parseInt(-$("#withdraw").val());

    var newBankAccount = new BankAccount(initialDeposit,deposit, withdraw);

    $(".amount").append(" $" + newBankAccount.addDeposit());

    var name = $("#name").val("");
    var initialDeposit = parseInt($("#initialDeposit").val(""));
    var deposit = parseInt($("#deposit").val(""));
    var withdraw = parseInt($("#withdraw").val(""));
    $("ul#userName").append("<li><span class='clickable'>" + newUserInfo.name + "</span></li>");

    $(".clickable").last().click(function(){
      $(".showName").show();
      $(".name1").text(newUserInfo.name);
      $(".balance1").text(newUserInfo.initialDeposit);
      $(".newBalance1").text(newBankAccount.addDeposit());
      $(".newBalance1").text(newBankAccount.subWithdraw());
    });

  });
});
