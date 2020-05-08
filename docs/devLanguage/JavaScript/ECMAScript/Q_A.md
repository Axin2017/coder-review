# Q&A

## 执行上下文/作用域链/闭包
+ 栈、词法环境、变量环境
+ 函数作用域，全局作用域，eval作用域。函数内有`[scope]`对象，指向父作用域。父作用域是定义的时候决定，而不是执行的时候决定。
for循环i变量值的问题
+ 闭包是返回一个函数引用父作用域。不会被垃圾回收，可用作私有变量，防止命名污染，计数器等

[理解JavaScript中的执行上下文和执行栈](https://juejin.im/post/5ba32171f265da0ab719a6d7)

[JavaScript闭包的底层运行机制](http://blog.leapoahead.com/2015/09/15/js-closure/)

## new的时候发生了什么？

## this指向
+ 作为对象调用时，指向该对象 obj.b(); // 指向obj
+ 作为函数调用, var b = obj.b; b(); // 指向全局window
+ 作为构造函数调用 var b = new Fun(); // this指向当前实例对象
+ 作为call与apply调用 obj.b.apply(object, []); // this指向当前的object
+ bind优先级最高，bind之后一定是指向bind传递的参数