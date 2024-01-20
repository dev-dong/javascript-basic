/**
 * 반복문
 * for of
 */
/**
 * for (const value of iterable) {
 *  // 실행할 코드 블럭
 * }
 */

const chars = ['a', 'b', 'c', 'd'];

// iterable한 객체가 있을 때 객체의 속성 값을 순차적으로 나열해서 반복시킨다.
for (const value of chars) {
    console.log(value);
}

const message = 'Hello';

// 루프가 실행될 때마다 새로운 블럭을 생성하기 때문에 const를 사용한다.
for (const value of message) {
    console.log(value);
}

// iterable
// Symbol.iterator 속성으로 구현한 객체
const myIterable = {
    [Symbol.iterator]: function () {
        let count = 0;
        return {
            next: function () {
                if (count < 10) {
                    return {done: false, value: count++};
                } else {
                    return {done: true};
                }
            }
        }
    }
}


for (const value of myIterable) {
    console.log(value);
}