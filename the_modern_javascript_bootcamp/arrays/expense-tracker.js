const account = {
  name: 'Preben Hesvik',
  expenses: []
};

let addExpense = function(account, expense, sum) {
  account.expenses.push([expense, sum]);
};

let accountSummary = function(account) {
  let values = account.expenses.map(item => item[1]);
  let sumValues = values.reduce((a, b) => a + b, 0);
  return `${account.name} has ${sumValues} in expenses`;
};

addExpense(account, 'Groceries', 100);
addExpense(account, 'Udemy Courses', 25);
console.log(account);

let summary = accountSummary(account);
console.log(summary);

console.log('-------------------------------------------------');

// Second way of doing it
const myAccount = {
  name: 'Preben Hesvik',
  expenses: [],

  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },

  getAccountSummary: function() {
    let totalExpenses = 0;
    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    return `${this.name} has $${totalExpenses} in expenses`;
  }
};

myAccount.addExpense((description = 'Coffeeshop'), (amount = 55));
console.log(myAccount);
console.log(myAccount.getAccountSummary());

console.log('----------------------------------------------------');
// Third way of doing it

const myAccount2 = {
  name: 'Preben Hesvik',
  income: [],
  expenses: [],
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let income = this.income.map(item => item.amount);
    let totalIncome = income.reduce((a, b) => a + b, 0);
    let expenses = this.expenses.map(item => item.amount);
    let totalExpenses = expenses.reduce((a, b) => a + b, 0);
    let balance = totalIncome - totalExpenses;
    return `${this.name} has a balance of $${balance}, $${totalIncome} in income. $${totalExpenses} in expenses`;
  }
};

myAccount2.addIncome((description = 'Python project'), (amount = 175));
myAccount2.addExpense((description = 'New hiking shoes'), (amount = 55));
console.log(myAccount2);
console.log(myAccount2.getAccountSummary());
