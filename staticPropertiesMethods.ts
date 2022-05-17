class Person7 {
    //보통 클래스 내 외부에서 사용하고 싶은 상수를 스태틱으로 지정하여 사용하는 방법이 있음
    public static CITY = "Seoul";
    //단 스태틱은 클래스와 같더라도 아래와같이 Person7.CITY로 '클래스명.프로퍼티명'으로 호출이 가능하다.
    public hello() {
        console.log("hello", Person7.CITY);
    }
    //static이라는 키워드가 붙으면 object에서는 이 함수를 메소드로 생각하지 않음
    public static hello2() {
        console.log("hello static");
    }
}

// 지금까지는 아래와 같이 객체를 생성하여 변수명.프로퍼티 를 통해 접근을 했다면
const p8 = new Person7();
p8.hello();
// 아예 클래스 자체에 접근해서 사용하는 방식도 있다.
// static은 변수의 경우 변경이되면 다른 객체에 영향이 미치기 때문에 변경 시 주의가 필요.
Person7.hello2();
Person7.CITY;
