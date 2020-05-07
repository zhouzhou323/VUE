// 1.导入的{}中定义的对象
import {flag} from './aaa.js';
// 2.直接导入export定义的变量
import {num1} from './aaa.js'
// 3.导入export的function/class
import {mul, Person} from './aaa.js'
// 4.导入default,自己命名
import addr from './aaa.js'
// 5.导入全部
import * as mmm from './aaa'

if(flag){
  console.log('william is panda');
  console.log(sum(20,30))
}