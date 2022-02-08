let myAccount = {
  name: "Preben",
  expenses: 0,
  income: 0
};

let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

let reset_account = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account) {
  account.balance = account.income - account.expenses;
  return `Account for ${account.name} has $${account.balance}. $${account.income} in income. $${account.expenses} in expenses`;
};

addIncome(myAccount, 10);
addExpense(myAccount, 5);
console.log(getAccountSummary(myAccount));
reset_account(myAccount);
console.log(getAccountSummary(myAccount));
addIncome(myAccount, 10);
addExpense(myAccount, 5);
console.log(getAccountSummary(myAccount));
console.log(myAccount);
