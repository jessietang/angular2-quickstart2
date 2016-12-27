# angular2-quickstart2
angular2 typescript environment configuration

package.json 标记本项目所需的 npm 依赖包。
tsconfig.json 定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码。
typings.json为那些 TypeScript 编译器无法识别的库提供了额外的定义文件。
systemjs.config.js 为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。
它还包括文档中后面的例子需要用到的包。

主要功能：
1.AngularJS2数据显示
1).通过插值表达式显示组件的属性
2).使用 ngFor 显示数组属性
3).通过ngIf进行条件显示

2.AngularJS2用户输入
1).绑定到用户输入事件
2).通过 $event 对象取得用户输入
3).从一个模板引用变量中获得用户输入
4).按键事件过滤 ( 通过 keyup.enter)
5).blur( 失去焦点 ) 事件
