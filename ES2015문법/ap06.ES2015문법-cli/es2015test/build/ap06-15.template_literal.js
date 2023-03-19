"use strict";

/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중(여러줄) 문자열 만들 때
  2. 변수 치환
*/

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = "".concat(string1, "\n\n\n\n").concat(string2);
console.log(greeting);
var student = {
  name: 'john kagga',
  city: 'kampala'
};
var message1 = 'hello ' + student.name + ' from ' + student.city;
console.log(message1);
var message2 = "hello ".concat(student.name, " from ").concat(student.city);
console.log(message2);