let name = 'william';
let age = '30'
let flag = true

function sum(num1, num2){
  return num1 + num2
}

if(flag){
  console.log(sum(20,30))
}
// 2.导出方式一
export {
  flag, sum
}
// 2.导出方式二
export var num1 = 1000;
// 3.导出函数/类
export function mul(num1,num2){
  return num1*num2
}

export class Person{
  run(){
    console.log('runnnig')
  }
}

const address ='on ning garden '
export default address