let myAccount = {
  name: "Preben",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

addExpense(myAccount, 5);
// This will show that the change inside the function will be reflected
// in the object myAccount
console.log(myAccount);

let otherAccount = myAccount;

// changing otherAccount will also change myAccount
otherAccount.expenses = 1000;
console.log(myAccount);
