1.安装CLI
>npm install -g @loopback/cli
>
>lb4 -v

2.创建项目
>lb4 app
[?] Project name: getting-started
[?] Project description: Getting started tutorial
[?] Project root directory: (getting-started)
[?] Application class name: StarterApplication
[?] Select project build settings: Enable tslint, Enable prettier, Enable loopbackBuild, Enable repositories, Enable services

3.启动项目
>npm i nodemon --save-dev
创建nodemon.json
package.json中
"scripts": {
    "dev": "nodemon",
}
>npm run dev
index.js可以修改端口
