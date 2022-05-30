globalObj = 'sun';

const student = {
  name: 'Ada',
  major: 'Mathematics',
  callHi: function () {
    function sayHi() {
      console.log('hi' + ' ' + this.name);
    }
    sayHi.call(this);
  },
};

student.callHi();
