/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중(여러줄) 문자열 만들 때
  2. 변수 치환
*/

const string1 = '안녕하세요';
const string2 = '반갑습니다';

const greeting = `${string1}



${string2}`;
console.log(greeting);

const student = {
  name: 'john kagga',
  city: 'kampala',
};

const message1 = 'hello ' + student.name + ' from ' + student.city;
console.log(message1);

const message2 = `hello ${student.name} from ${student.city}`;
console.log(message2);
