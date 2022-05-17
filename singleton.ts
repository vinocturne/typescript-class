//어플리케이션이 실행되는 중간에 클래스로부터 하나의 오브젝트만 생성해서 사용하는 패턴

// class ClassName {
//     constructor() {

//     }
// }

// const x = new ClassName();
// const y = new ClassName();
//두 개의 다른 오브젝트 생성.
//싱글톤은 new를통해 ClassName을 생성하지 않는다.

class ClassName {
    private static instance: ClassName | null = null;
    public static getInstance(): ClassName {
        //매개체의 역할을 하는 메소드
        //ClassName으로부터 만든 object가 있으면 해당 값을 return.
        //없다면 만들어서 return.
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    private constructor() {}
}

const x = ClassName.getInstance();
const y = ClassName.getInstance();

//다른 매개체로 생성된 object를 요청하여 단일 객체 패턴을 만들 수 있음.
console.log(x);
console.log(y);
console.log(x === y);
