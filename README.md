# rem-help
`version 1.0.1` quickly add rem to your project

## Translation
<a href="https://github.com/Jon-Millent/rem-help/blob/master/zh.md">中文</a>

## Install

`yarn add rem-help` & `npm install rem-help --save`

`or`

```html
@version x.x.x
<script src="https://cdn.jsdelivr.net/npm/rem-help@x.x.x/rem-help.min.js"></script>
```
```html
@latest
<script src="https://cdn.jsdelivr.net/npm/rem-help@1.0.1/rem-help.min.js"></script>
```

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
  onResize: function(event, remNumber){ // resize function
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
