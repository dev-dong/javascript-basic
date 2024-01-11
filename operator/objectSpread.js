/**
 * Spread 연산자
 * - 객체의 Spread 연산자
 * - ...을 사용하여 객체를 복사할 수 있다.
 */
const person = {name: 'Lee', age: 20};
const clone = {...person};
console.log(clone); // { name: 'Lee', age: 20 }

// 객체를 병합
const info = {
    address: '서울특별시'
};

const person2 = {
    ...person,
    ...info
}
console.log(person2); // { name: 'Lee', age: 20, address: '서울특별시' }

// 동일한 이름의 속성을 가지고 있으면 마지막에 병합된 객체의 속성으로 덮어쓴다.
const person3 = {
    age: 10
}
console.log({...person, ...person3}); // age가 10으로 덮어씌워진다.

// 새로운 속성 추가하기
console.log({...person, address: '서울특별시'}); // { name: 'Lee', age: 20, address: '서울특별시' }
const p1 = {
    sayHello: function () {
        console.log('hello');
    }
}

const p2 = {
    sayHello() {
        console.log('안녕하세요.');
    }
}

const person4 = {
    name: 'Lee',
    ...p1,
    ...p2
}
console.log(person4);
person4.sayHello(); // 속성과 마찬가지로 어떤 메서드의 이름이 동일할 때 마지막에 병합된 객체의 메서드가 호출된다.

const item = {
    name: '게임기',
    type: '핸드폰',
    info: {
        price: 10000
    },
    [Symbol('id')]: '1234-xx'
}
const copyItem = {...item}; // primitive type은 복사되지만, 참조 타입은 포인터 주소만 복사된다.
copyItem.name = '과일';
copyItem.info.price = 20000;
console.log(copyItem); // primitive type의 값을 변경하면 원본 객체에는 영향을 안준다. 하지만 참조형은 원본 객체에 영향을 준다. (얕은 복사)
console.log(item);

// 객체의 나머지 연산자
const {name, ...rest} = item; // name을 제외한 나머지 속성들을 rest에 할당한다.
console.log(rest);

const copiedItem = {...item};
console.log(copiedItem) // Symbol은 복사되지 않는다. Symbol은 열거 불가능한 속성이기 때문이다.
