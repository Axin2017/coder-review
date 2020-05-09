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

## typeof的原理，typeof null === ?
在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。曾有一个 ECMAScript 的修复提案（通过选择性加入的方式），但被拒绝了。该提案会导致 typeof null === 'null'。
js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息：

1：整数
110：布尔
100：字符串
010：浮点数
000：对象

但是，对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的：

null：所有机器码均为0
undefined：用 −2^30 整数来表示

所以在用 typeof 来判断变量类型的时候，我们需要注意，最好是用 typeof 来判断基本数据类型（包括symbol），避免对 null 的判断。
