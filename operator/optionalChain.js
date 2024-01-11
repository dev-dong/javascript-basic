/**
 * Optional chaining 연산자
 * - ES2020
 * - 변수값이나 객체 속성 등이 null이나 undefined 일 때, 안전하게 접근해서 사용하는 것을 도와주는 연산자
 * - ?. 연산자를 사용
 */

const user = {
    name: 'Lee',
    info: {
        age: undefined,
        country: 'Korea'
    }
}

console.log(user.name); // Lee
console.log(user.info?.age); // undefined
console.log(user.info?.country); // Korea
console.log(user.address?.city); // 옵셔널 체이닝 연산자를 하니까 안전하게 오류가 발생하지 않고 undefined 출력됨

// Optional
// 값이 있거나 없을 수 있을 때를 표현할 때 사용하는 용어
// Optional<T>
// ?.
console.log(user.address?.city?.peopleCount); // undefined

const address = user.getAddress?.(); // getAddress가 있는지 없는지 모른다. 그럴때는 Optional chaining을 사용한다.
console.log(address); // undefined

// Optional chaining 연산자와 null 병합 연산자를 가장 많이 사용
const city = user.address?.city ?? 'Seoul'; // user.address?.city가 undefined이면 'Seoul'을 반환
console.log({city});

if (user.address && user.address.city) {
    console.log(user.address.city);
} else {
    console.log('Seoul');
}
