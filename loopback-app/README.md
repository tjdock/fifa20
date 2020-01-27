## 一.项目设置

### 1.安装 CLI

`npm install -g @loopback/cli`

`lb4 -v`

### 2.创建项目

`lb4 app`<br>
[?] Project name: getting-started<br>
[?] Project description: Getting started tutorial<br>
[?] Project root directory: (getting-started)<br>
[?] Application class name: StarterApplication<br>
[?] Select project build settings: Enable tslint, Enable prettier, Enable loopbackBuild, Enable repositories, Enable services

### 3.启动项目

`npm i nodemon --save-dev`

创建 nodemon.json<br>
package.json 中<br>

<pre>
"scripts": {
    "dev": "nodemon",
}
</pre>

`npm run dev`<br>
index.js 可以修改端口

### 4.swagger 测试

<pre>
{
  "where][age][lte":23,
  "where][league.id":2012,
  "where][club.id":111774,
  "where][name][like":"Ya",
  "fields][name":true,
  "order":"name desc",
  "limit": 10,
  "skip": 0
}
</pre>

## 二.常用 CLI

### 1.创建 Model

`lb4 model`<br>

? Model class name: Dic<br>
? Please select the model base class: Entity<br>
? Allow additional (free-form) properties? No<br>

? Enter the property name: DicID<br>
? Property type: number<br>
? Is id the ID property? Yes<br>
? Is it required?: No<br>
? Default value [leave blank for none]:<br>
<b>注意：ID 为主键的话，required 为 false</b><br>

? Enter the property name: DicValue<br>
? Property type: string<br>
? Is it required?: Yes<br>
? Default value [leave blank for none]:<br>

### 2.创建 datasource

`lb4 datasource`<br>

? Datasource name: db<br>
? Select the connector for db: In-memory db (supported by StrongLoop)<br>
? window.localStorage key to use for persistence (browser only):<br>
? Full path to file for persistence (server only): ./data/db.json<br>
<b>在根目录创建 data 文件夹，里面创建 db.json 文件</b>

### 3.创建 repository

`lb4 repository`<br>

? Please select the datasource DbDatasource<br>
? Select the model(s) you want to generate a repository Dic<br>
? Please select the repository base class DefaultCrudRepository (Legacy juggler bridge)<br>

### 4.创建 controller

`lb4 controller`<br>

? Controller class name: Dic<br>
? What kind of controller would you like to generate? REST Controller with CRUD functions<br>
? What is the name of the model to use with this CRUD repository? Dic<br>
? What is the name of your CRUD repository? DicRepository<br>
? What is the type of your ID? number<br>
? What is the base HTTP path name of the CRUD operations? /dics<br>

## 三.验证

[详细说明](https://loopback.io/doc/en/lb4/Authentication-Tutorial.html)

### 安装

`npm install --save bcryptjs jsonwebtoken @loopback/authentication`

`npm install --save-dev @types/bcryptjs @types/jsonwebtoken`

## 四.其他说明

### 1.CRUD

patch，put，post 区别
patch 只是局部更新，
put 是整个更新，
post 是添加新内容

### 2.调用 api

[参考 1](https://loopback.io/doc/en/lb4/todo-tutorial-geocoding-service.html)

[参考 2](https://loopback.io/doc/en/lb3/REST-connector.html)
