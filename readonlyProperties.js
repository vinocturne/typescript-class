"use strict";
class Person6 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.name = "Mark";
        this.country = "Korea";
        //readonly는 생성자 내에서만 값을 바꿀 수 있고, 다른 곳에서는 변경이 불가능하다.
        this.country = "Korea";
    }
}
const p7 = new Person6("Mark", 39);
