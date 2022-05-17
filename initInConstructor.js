"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person4 {
    // name: string;
    // age: number;
    // public constructor(name: string, age: number) {
    // this.name = name;
    // this.age = age;
    // 기존의 방식대로 생성자를 선언하면 두 줄이상이 추가된다.
    //
    // }
    // parameter에 접근제어자를 표시해주면 변수를 선언하지않고, this.name을 추가하지 않더라도
    // 쉽게 생성자 설정이 완료된다. (*꼭 접근제어자가 붙어야 된다. 없을 경우 생성자 작업이 완료되지 않음.)
    // 변수를 선언하는 것을 생략하고 파라미터에서 선언 및 생성한다고 생각하면 편하다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
const p5 = new Person4("Mark", 39);
console.log(p5);
