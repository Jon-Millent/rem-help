# rem-help
quickly add rem to your project

## Translation
<a href="https://github.com/Jon-Millent/rem-help/blob/master/zh.MD">中文</a>

## Install
`yarn add rem-help` & `npm install rem-help --save`

## Use
### import
```js
import RemHelp from 'rem-help'
let rem = new RemHelp()
rem.addRem()
...
```
### browser
```html
<script src="./rem-help.min.js"></script>
<script>
    let rem = new RemHelp()
    rem.addRem()
    ...
</script>
```

## Api
### config
```js
let rem = new RemHelp({
  eventType: 'resize', // type of monitoring events
  scale: 10, // scaling ratio
  maxWidth: 750, // maximum response width
  minWidth: 320, // minimum response width
  auto: true,  // whether to respond to the Resize event
  accuracy: 3, // how many decimal places are reserved
  onResize: function(){ // resize function
  }
})
```
### methods
#### `rem.addRem`
add rem to the browser
```
rem.addRem()
```
#### `rem.removeRem`
remove rem from the browser, also remove related monitoring events.
```
rem.removeRem()
```
## LICENSE
<a href="http://opensource.org/licenses/MIT">MIT</a>
