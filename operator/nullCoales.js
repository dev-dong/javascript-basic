/**
 * null 병합 연산자
 * - ??
 * - ES2020
 * - 변수의 값이 null 이나 undefined 인 경우 대체값을 지정할 수 있다.
 * - 기본값을 제공하기 위해서 사용한다.
 */

const x = null;
const y = undefined;
const z = 0;

console.log(x ?? 'default'); // default
console.log(y ?? 'default'); // default
console.log(z ?? 'default'); // 0

// 논리 OR ||
console.log(x || 'default'); // default
console.log(y || 'default'); // default
console.log(z || 'default'); // default - false가 안나오고 의도치 않은 값이 나온다.

function greet(name) {
    const msg = name ?? 'Guest';
    console.log(`Hello, ${msg}`);
}
greet(); // Hello, Hello
greet('Lee'); // Hello, Lee

// API 호출을 보내고 응답을 받을 때 그 응답에서 어떤 필드가 있을 수도 있고 없을 경우
const user = {
    name: null,
    age: undefined,
    country: 'Korea'
}
const userName = user.name ?? 'Unknown';
const userAge = user.age ?? 'Unknown';
const userAddress = user.address ?? 'Unknown';
const userCountry = user.country ?? 'Unknown';

console.log({
    userName,
    userAge,
    userAddress,
    userCountry
});