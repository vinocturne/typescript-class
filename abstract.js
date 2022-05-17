"use strict";
//abstract를 사용하려면 abstract class를 선언해야한다.
//기능이 완전하지 않기 때문에 new를 통해 새로운 객체를 생성할 수 없다.
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
class Person8 extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const z = new Person8();
z.setName("Z");
console.log(z);
