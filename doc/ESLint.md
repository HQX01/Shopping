ESLint



默认检查js文件

npm install eslint --save-dev





.bin/eslint.cmd：内部通过nodejs执行eslint运行包

@eslint包用来规范eslint配置文件

eslint开头的包是eslint运行包，包含eslint代码



 eslint配置文件

可以单独配置.estlintrc.js，也可以在package.json中配置

npx eslint --init初始化eslint配置文件



使用eslint检查代码

npx eslint + 文件路径



eslint配置文件

js>yaml>json

```
"env": {
	"browser":true,
	"commonjs":true,
	"es2021":true
}

声明可以使用的环境变量，如
浏览器中的window/document等
nodejs中的__dirname等
es2021中的WeakRef等
```



![Screen Shot 2022-11-09 at 15.28.22](/Users/qianxihe/Documents/笔记/eslint/Screen Shot 2022-11-09 at 15.28.22.png)



![Screen Shot 2022-11-09 at 15.31.11](/Users/qianxihe/Documents/笔记/eslint/Screen Shot 2022-11-09 at 15.31.11.png)





```
"extends": ["eslint:recommanded"]
推荐使用的eslint检查规范
配置使用内置规范或第三方规范
```







```
"parserOptions":{
	"ecmaVersion":"latest"
}
指定js版本
```







```
"rules":{
}
自定义规则
0表示不使用
1表示警告(warning)
2表示错误(error)
```





eslint检查语法的规范——函数，将代码传入函数检查





内置规范包：eslint-all/eslint-recommended

标准规范包：eslint-config-standard

第三方规范包：google/airbnb/facebook



airbnb

npx install-peerdeps --dev eslint-config-airbnb-base





![Screen Shot 2022-11-09 at 17.26.55](/Users/qianxihe/Documents/笔记/eslint/Screen Shot 2022-11-09 at 17.26.55.png)





























































