/**
 * 함수의 값 전달
 */
// 값전달(값복사), 참조전달(얕은복사)
// primitive type: 값복사, object type: 얕은복사 이 내용은 함수 파라미터에도 동일하게 적용된다.
function increase(n) {
    n += 1;
}

let myNumber = 1;
increase(myNumber);
console.log(myNumber); // 1

// 배열은 객체이기 때문에 함수에 전달하면 참조값만 전달돼서 얕은 복사가 된다.
function addElement(arr) {
    arr.push(4);
}

const myArr = [1, 2, 3];
addElement(myArr);
console.log(myArr); // [ 1, 2, 3, 4 ]

// myArr2가 a, b, c로 변경되지 않는다.
// myArr2의 주소값이 100이라고 하면 addElement2 함수에서 arr의 주소값이 100이 되고 arr에 새로운 배열이 할당되면 arr의 주소값이 200이 된다.
// myArr2의 주소값은 여전히 100이기 때문에 a, b, c로 변경되지 않는다.
// 함수 내부에서 arr에 새로운 배열을 할당하면 함수 내부에서만 새로운 배열이 생성되고 함수 외부에서는 영향을 주지 않는다.
function addElement2(arr) {
    arr = ['a', 'b', 'c'];
}
const myArr2 = [1, 2, 3];
addElement2(myArr2);
console.log(myArr2); // [ 1, 2, 3 ]
