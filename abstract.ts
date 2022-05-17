//abstract를 사용하려면 abstract class를 선언해야한다.
//기능이 완전하지 않기 때문에 new를 통해 새로운 객체를 생성할 수 없다.

abstract class AbstractPerson {
    protected _name: string = "Mark";

    abstract setName(name: string): void;
}

class Person8 extends AbstractPerson {
    //추상화 단계이기 때문에 꼭 상속을 받은 뒤 abstract로 설정했던 메소드에대해 구현을 완료해야 사용이 가능.
    setName(name: string): void {
        this._name = name;
    }
}

const z = new Person8();
z.setName("Z");

console.log(z);
