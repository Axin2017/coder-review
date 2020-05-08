# dom是什么
`dom`即文档对象(Document Object Model)

## 参考文档 
[dom](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)

[document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

## 常用属性

## 常用方法

### 获取元素
```
document.getElementsByClassName('actived')
// => HTMLCollection

document.getElementsByTagName('div')
// => HTMLCollection

document.getElementById('app')
// =>Element/null

document.querySelector('div.user-panel.main input[name="login"]')
// =>the first matched Element or null

document.querySelectorAll('div.user-panel.main input[name="login"]')
// NodeList
```

