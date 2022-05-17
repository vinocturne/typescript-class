"use strict";
//상속 (inheritance)
//다른 클래스를 가져다가 자신만의 함수들을 추가하여 사용 가능
class Parent {
    //protected는 외부에서 접근이 불가하지만 상속관계에서는 사용 가능
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`name : ${this._name}, age: ${this._age} `);
    }
}
const p = new Parent("Mark", 39);
p.print();
class Child extends Parent {
    constructor(age) {
        super("Mark Jr.", age);
        this.gender = "male";
    }
}
const c = new Child(5);
c.print();
