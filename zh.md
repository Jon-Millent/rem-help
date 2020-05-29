# rem-help
`version 1.0.0` 快速将rem添加到您的项目

## 多语言
<a href="https://github.com/Jon-Millent/rem-help/blob/master/README.md">EN</a>

## 安装
`yarn add rem-help` & `npm install rem-help --save`

## 使用
### import
```js
import RemHelp from 'rem-help'
let rem = new RemHelp()
rem.addRem()
...
```
### 浏览器
```html
<script src="./rem-help.min.js"></script>
<script>
    let rem = new RemHelp()
    rem.addRem()
    ...
</script>
```

## Api
### 配置
```js
let rem = new RemHelp({
  eventType: 'resize', // 响应浏览器窗口事件类型
  scale: 10, // 缩放比例（比如浏览器750px，则 1 rem = 750 / scale）
  maxWidth: 750, // 最大缩放比例
  minWidth: 320, // 最小缩放比例
  auto: true,  // 是否自动响应窗口事件
  accuracy: 3, // rem保留小数点，默认3位
  onResize: function(){ // resize 回调函数
  }
})
```
### 方法
#### `rem.addRem`
添加rem
```
rem.addRem()
```
#### `rem.removeRem`
移除rem，并移除相关监听事件。
```
rem.removeRem()
```
## LICENSE
<a href="http://opensource.org/licenses/MIT">MIT</a>
