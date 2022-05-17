"use strict";
class Person5 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    //get set을 생성하면 해당 클래스 내의 변수가 private이라도 접근이 가능/
    get name() {
        //get 하는 과정에서 데이터의 변환 가능
        console.log("get");
        //get은 return값이 필요.
        return this._name;
    }
    set name(n) {
        console.log("set");
        this._name = n;
    }
}
const p6 = new Person5("Mark", 39);
console.log(p6.name); //get
p6.name = "Jane"; //set
console.log(p6.name); //get
//클래스 내의 property를 가져오고 설정하는 것을 전문으로 하는 함수 getter, setter
