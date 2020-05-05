const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-09',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-02',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全>',
        date: '2006-03',
        price: 128.00,
        count: 1
      }
    ],
  },
  methods:{
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2)
    // },
    increment(index){
      this.books[index].count ++;
    },
    decrement(index){
      this.books[index].count --;
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      // 1.普通的for循环
    //   let totalPrice = 0;
    //   for(let i = 0; i<this.books.length;i++){
    //     totalPrice += this.books[i].price * this.books[i].count
    //   }
    //   return totalPrice
    // } 

      // 2.for (let i in this.books) i是索引
      // let totalPrice = 0;
      // for (let i in this.books){    
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // 3.for (let i of this.books)
      // let totalPrice = 0;
      // for (let item of this.books){
      //   totalPrice +=  item.price * item.count
      // }
      // return totalPrice

      return this.books.reduce(function(preValue, book){
        return preValue + book.price*book.count
      },0)
    }
    },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
  })

  // 高阶函数:reduce/filter/map

  const nums = [10,20,46,356,222,24,500]
  // -------箭头函数，更更简洁
  let total = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n);

  // ------更简洁的写法
  // let total = nums.filter(function(n){
  //   return n < 100
  // }).map(function(n){
  //   return n*2
  // }).reduce(function(prevalue,n){
  //   return prevalue + n
  // },0)

  //1. filter中的回调函数要求必须返回一个布尔值
  // 当返回true时，函数内部会自动将这次回调的n加入到新的数组中
  // 当返回false时，函数内部会过滤掉这次的n
  // let newNums = nums.filter(function(n){
  //   return n < 100
  // })
  // // console.log(newNums)

  // // 2.map函数的使用
  // let new2Nums = newNums.map(function(n){
  //   return n*2
  // })
  // // console.log(new2Nums)

  // // 3.reduce函数的使用
  // // 作用在于对数组中所有的内容进行汇总
  // let total = new2Nums.reduce(function(preValue,n){
  //   return preValue + n
  // },0)
  console.log(total)

  // 需求：1.筛选出所有小于100的数；2.把筛选出的数乘2；3.把新的数汇合