"use strict";
class Person {
    constructor(name) {
        this.name = name; //Person 클래스 내에 해당 속성이 없다면 사용이 불가능.
    }
}
const p1 = new Person("Mark");
console.log(p1);
//typescript 내에서는 클래스 또한 하나의 타입으로 적용이 가능하다.
