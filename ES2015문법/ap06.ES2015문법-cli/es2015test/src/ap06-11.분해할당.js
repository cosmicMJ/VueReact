/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
*/
debugger;
const points = [28, 30, 40];
const x1 = point[0];
const y1 = point[1];
const z1 = point[2];
console.log(x1, y2, z1);

//배열분해할당
const [x2, y2, z2] = points;
console.log(x2, y2, z2);

//두번째 값 무시하기
const [x3, z3] = points;
console.log(x3, z3);

const [x4, y4] = points;
console.log(x4, y4);
 
const car = {
  type: 't',
  color: 's',
  model: '2023',
};
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

console.log(type, color, model, gear); //t,s, 2023, undifine
