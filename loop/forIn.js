/**
 * 반복문
 * for in
 */
/**
 * for(const key in obj) {
 *  실행할 코드 블럭
 * }
 */

// Symbol은 for in문에서 제외된다. (열거가 불가능하다.)
const person = {
    name: 'Lee',
    age: 30,
    address: 'Seoul',
    greet: function () {
        console.log(`Hi! My name is ${this.name}.`);
    },
    [Symbol('id')]: '123123'
};

// name의 속성을 변경 - 열거가 불가능하다.
Object.defineProperty(person, 'name', {
    enumerable: false
})

// immutable const가 사용된 이유는 for loop가 실행될 때 매번 새로운 블럭 범위를 생성하기 때문이다.
for (const key in person) {
    console.log(`${key} = ${person[key]} `);
}

const numbers = [1, 2, 3, 4];
for (const key in numbers) {
    console.log(`${key} => ${numbers[key]}`);
}

const chars = 'abcd';
for (const key in chars) {
    console.log(`${key} => ${chars[key]}`);
}