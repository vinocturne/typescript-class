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
//접근제어자 (AccessModifiers)
// 타입스크립트는 기본적으로 외부에서 접근이 가능.
// 접근제어자를 설정하지 않을 경우 default는 public
// public은 명시적으로 표시할 수도 있다.
// 접근제어자는 변수, 생성자, 함수 모두에 적용 가능.
class Person3 {
    //private 설정시 클래스 외부에서 호출 불가능
    // private _age!: number;
    constructor(age) {
        this.name = "Jane";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
const p4 = new Person3(39);
console.log(p4.age); //public으로 설정했을때 클래스 외부에서 모든 변수 및 함수로 접근이 가능
//private 설정
console.log(p4.age); //Error, private으로 설정했다면 클래스 내부에서만 호출이 가능하기 때문에 외부에서 불러낼 수 없다.
//이전에는 private을 _(underbar)를 통해 표시했지만
//타입스크립트에서는 언어 레벨에서 지정이 가능하기 때문에 안정성이 더 높다.
//하지만 오랜 습관 때문에 private 설정이 되어있는 변수 함수 생성자에 대해서는 _를 붙이는 경우가 많다.
