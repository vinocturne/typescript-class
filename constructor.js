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
class Person2 {
    // default 생성자는 생성자가 선언되면 더 사용할 수 없다.
    constructor(age) {
        // strict 모드가 true이기 때문에 초기화하지 않은 변수에 대해서는 에러를 표시한다.
        // name: string;
        // age: number;
        // strict를 끄고 사용한다면 호출 시 초기화되지 않은 값에 대해서는 undefined가 표시된다.
        // 생성자를 만들지 않고도 아래와같이 기본적으로 초기화가 가능하다.
        // default 생성자
        this.name = "";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            //클래스의 생성자에서는 async를 쓸 수 없기 때문에
            //비동기호출이 필요한 생성자의 경우 이런 식으로 init을 따로 빼고,
            //해당 객체를 생성한 후 init()을 호출하여 초기화하는 방법을 사용한다.
            //이런 경우에 변수에 !를 사용하여 생성자가 없는 경우 발생하는 에러를 방지하고
            //초기화를 진행할 수 있다.
        });
    }
}
//아래와 같이 파타미터가 비어있는 Person2와 age가 주어진 Person2를 동시에 사용하고 싶다면
//오버로딩을 통해 생성자를 두 개 만들 수도 있고, 위와 같이 constructor 내의 age에 ?를 주고
//if문을 통해 아닐때의 값을 넣어주면 사용 가능.
const p2 = new Person2(39);
const p3 = new Person2();
// p2.age = 33;
//런타임상에서 age는 값이 들어오기 때문에 정상적으로 출력이되나
//코드를 작성할 때 클래스는 값이 들어오는지 확신할 수 없기 때문에 오류를 출력한다.
//외부에서 값이 들어올 것이 확실한 경우에는
//초기화를 하지 않더라도 해당 변수에 !를 통해 에러를 방지할 수 있다.
console.log(p2.age);
//?와 !은 차이점
//?의 경우 선택적으로 변수를 넣을 수 있다면
//!의 경우 해당 변수에 대한 값이 필연적으로 부여될 것이라는 명시적인 신호.
//?는 해당 변수를 넣지 않아도 아무런 문제가 없지만
//!의 경우 해당 값을 넣지 않거나 타입이 틀리면 깨져서 undefined가 호출.
//따라서 !는 주의해서 써야한다.
