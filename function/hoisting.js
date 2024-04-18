/**
 * 함수 호이스팅
 * 함수의 선언부가 최상단으로 이동하는 것
 */
// 함수는 정의부분도 같이 올라가기 때문에 함수 선언 전에 호출해도 에러가 나지 않는다.
sayHello()

function sayHello() {
    console.log('Hello')
}

// 변수 호이스팅은 선언부만 올라가기 때문에 변수 선언 전에 호출하면 에러가 난다.
// sayHelloArrow()
let sayHelloArrow = () => {
    console.log('hello')
}
sayHelloArrow();

// 함수표현식이나 화살표 함수를 변수에 담을 때는 const를 사용하는게 좋다.
const sayHello2 = function() {
    console.log('Hello')
}

// 함수 호이스팅 호불호