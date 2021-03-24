class Microsoft {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  occupation() {
    return this._name + ' is a philanthropist!';
  }
}
class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this._name = name;
    this._age = age;
  }
  studentAge() {
    return this._name + " is " + this._age;
  }
}

const henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
const elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
  Microsoft,
  Facebook,
};
