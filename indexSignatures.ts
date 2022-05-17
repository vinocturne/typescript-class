//class => object
//{mark: 'male', jade: 'male'}
//{chloe: 'female', alex: 'male', anna: 'female'}

class Students {
    // key에 학생 이름을 넣고, value에 성별을 넣으려면
    // 아래와 같은 방식으로하면 한 명 밖에 넣지 못한다.
    // property가 동적이면 사용할 수 없는 구문
    // mark: string = 'male';
    // 이럴 때 인덱스 시그니쳐를 사용한다.
    // [index: string]: string;
    // 여기서 더 정확히 하려면 아래와 같이 해당 값이 둘 중 하나로 들어와야한다고 union type으로 설정해주는 것이 좋다.
    [index: string]: "male" | "female";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);
