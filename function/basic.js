/**
 * 함수
 * 모듈화의 기본 단위
 * 입력을 주면 출력을 반환한다.
 */

/*
function 함수이름(파라미터1, 파라미터2, ..., 파라미터n) {
    // 함수 정의문 => 함수 몸체
}
*/

function greet(name) {
    console.log(`Hello, ${name}`);
}

greet('World');

const result = sum(10, 20);
console.log({result});

// 코드 재사용과 모듈화
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const a = 10, b = 20;
const result1 = mul(sum(sub(div(b, a), a), b), mul(b, a));

// 똑같은 format 이다. -> 중복된 코드
function lowerContent() {
    const content = fetch('some api url');
    return content.toLowerCase();
}

function upperContent() {
    const content = fetch('some api url');
    return content.toUpperCase();
}

function words() {
    const content = fetch('some api url');
    return content.split(' ');
}

// 중복된 코드 개선
// 문제를 작은 단위로 나눠서 함수를 구현하는게 매우 중요하다.
function requestContentAPI() {
    return 'Hello! You are great!';
}

function toLowerContent(content) {
    return content.toLowerCase();
}

function toUpperContent(content) {
    return content.toUpperCase();
}

function toWord(content) {
    return content.split(' ');
}

const content = requestContentAPI();
console.log(toLowerContent(content));
console.log(toUpperContent(content));
console.log(toWord(content));

// 함수 분류
// 1. 반환값도 없고 파라미터도 없는 함수
// 재사용성이 가장 떨어지는 함수
function greet1() {
    console.log('Hello, World!');
}

// 2. 반환값만 있는 함수
function requestContentAPI1() {
    return 'Hello! You are great!';
}

// 3. 반환값도 있고 파라미터도 있는 함수
function toLowerContent1(content) {
    return content.toLowerCase();
}

function requestContentAPI2(apiUrl) {
    return fetch(apiUrl);
}

// 4. 파라미터만 있는 함수
function logResult(result) {
    console.log(result);
}

/**
 * 반환값만 있는 함수는 문제의 시작점으로 많이 쓰인다.
 * 반환값도 있고 파라미터도 있는 함수도 문제의 시작점으로 많이 쓰인다. 문제 해결의 출발점이다.
 * 파라미터만 있는 함수는 문제 해결의 종료점이 되는 경우가 많다. 로그를 출력하거나 파일을 저장한다.
 */