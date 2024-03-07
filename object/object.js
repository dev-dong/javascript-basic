/**
 * 데이터 타입
 * 객체 Object
 * 객체는 여러 속성을 가지고 있다.
 * - 속성 : key => value
 * - key는 문자열이나 심볼이어야 하고, value는 모든 데이터 타입이 올 수 있다.
 * */
// 자바스크립트가 속성 이름을 문자열로 표현하지 않아도 자동으로 문자열로 변경해준다.
const jerry = {
    name: 'Jerry',
    age: 10,
    job: 'Student'
}

// # 객체 생성 방법
// 1. {} : 빈 객체 생성
const emptyObject = {};

// 2. Object() 생성자 함수
const emptyObject2 = new Object();

const person = {
    name: 'DongHo',
    age: 20,
    address: {
        city: 'Seoul'
    }
};

// console.log(person.name)
// person.name = 'CodingMax';
// console.log(person.name)
// person['age'] = 20;
// console.log(person.age, person['age']);

// 객체 속성 접근, 없는 속성이면 undefined 반환
if (person.name) {
    console.log(person.name);
    console.log(person['name']);
}

if ('name' in person) {
    console.log(person.name);
    console.log(person['name']);
}

if ('address' in person) {
    console.log(person.address);
    console.log(person['address']);
}

// name 속성 삭제
// delete 키워드
delete person.name;

// 객체 속성 변경
console.log(person.name);
person.name = '이동호';
console.log(person.name);

// 객체 분해 또는 객체 구조 분해
// Object destructuring
const {name, age} = person;
console.log({name, age});

const dog = {
    name: 'Coco',
    age: 2
}

// 객체 속성 이름 변경
const {name: myDogName, e, age: myDogAge} = dog;
console.log({myDogName, myDogAge});

// 객체안의 객체 속성은 아래와 같이 받을 수 있다.
const {address: {city}} = person;
console.log(city);

// 객체 메서드
// 객체에 속성으로 함수를 넣을 수 있다.
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
}
console.log(calculator.add(20, 10));
console.log(calculator.sub(20, 10));
console.log(calculator['add'](20, 10));

function operator(op, a, b) {
    return calculator[op](a, b);
}

let op = 'add';
let code = '-';
if (code === '-') {
    op = 'sub';
}

// 동적으로 사용할 수 있다.
console.log(operator(op, 20, 10));

// this 키워드
// 현재 개체를 가라키는 포인트 변수
const person2 = {
    name: 'DongHo',
    age: 20,
    job: 'programmer',
    greeting: function (friend) {
        console.log(`Hi, ${friend}! I'm ${this.name}. ${this.age} years old.`);
    }
};
person2.greeting('Jim');

// Object 자주 사용하는 메서드
// Object.keys() : 객체의 속성 이름을 배열로 반환
// Object.values() : 객체의 속성 값을 배열로 반환
console.log(Object.keys(person2));
console.log(Object.values(person2));

for (const key of Object.keys(person2)) {
    console.log(person2[key]);
}

// person2가 가지고 있는 속성에 모든 키값들 마다 루프를 돌면서 키에 담는다.
for (const key in person2) {
    console.log(`${key} = ${person2[key]}`);
}

// person3가 상수인데 어떻게 값을 변경할 수 있을까?
// person3 객체를 선언하면 힙 메모리에 공간이 생긴다. 100번지라고 가정 했을 때, person3 값은 100번지이다.
// 새로운 속성을 추가하거나 변경하면 person3가 가리키고 있는 값인 100번지에 있는 값을 따라가서 이 값을 변경한다.
const person3 = {};
person3.name = 'DongHo';
person3.name = 'CodingMax';
delete person3.name;

// 객체 = 속성(값, 데이터) + 메서드(알고리즘)
// 프로그램 = 데이터 + 알고리즘
// {} : 빈 객체 생성
const person4 = {}; // 객체 타입이 아닌 객체의 값이다. 즉, 실제 메모리에 할당되고 있는 객체 인스턴스이다.
