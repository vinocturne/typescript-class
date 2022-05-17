//상속 (inheritance)
//다른 클래스를 가져다가 자신만의 함수들을 추가하여 사용 가능

class Parent {
    //protected는 외부에서 접근이 불가하지만 상속관계에서는 사용 가능
    constructor(protected _name: string, private _age: number) {}

    public print(): void {
        console.log(`name : ${this._name}, age: ${this._age} `);
    }
}

const p = new Parent("Mark", 39);
p.print();

class Child extends Parent {
    public gender = "male";
    //자식 생성자에서는 super를 먼저 호출해야 다른 메소드들 사용 가능
    constructor(age: number) {
        super("Mark Jr.", age);
    }
}

const c = new Child(5);
c.print();
