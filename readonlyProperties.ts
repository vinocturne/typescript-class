class Person6 {
    public readonly name: string = "Mark";
    public readonly country: string = "Korea";

    public constructor(private _name: string, private _age: number) {
        //readonly는 생성자 내에서만 값을 바꿀 수 있고, 다른 곳에서는 변경이 불가능하다.
        this.country = "Korea";
    }

    // hello() {
    //     this.country = 'China';
    // }
}
const p7 = new Person6("Mark", 39);
