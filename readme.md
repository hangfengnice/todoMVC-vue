# 使用Vue完成TodoMVC

- 项目地址在[TodoMVC](http://todomvc.com)
- 初始模版[todomvc-app-template](https://github.com/tastejs/todomvc-app-template)
  - 下面是初始模版初始状态截图
![to](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)

## 用到了插件[browsersync](https://browsersync.io/#install)

## Getting started

- `npm install`
- 配置package.json

```javascript
{
  "private": true,
  "scripts": {
    "start": "browser-sync start --server  --files \"*.html, js/*.js, css/*.css\""
  },
  "dependencies": {
    "browser-sync": "^2.26.7",
    "todomvc-app-css": "^2.0.0",
    "todomvc-common": "^1.0.0"
  }
}
```

- npm start

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/80x15.png" /></a>  
This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://sindresorhus.com" property="cc:attributionName" rel="cc:attributionURL">TasteJS</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US">Creative Commons Attribution 4.0 International License</a>.
