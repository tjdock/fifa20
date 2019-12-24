1.安装 CLI

> npm install -g @loopback/cli
>
> lb4 -v

2.创建项目

> lb4 app
> [?] Project name: getting-started
> [?] Project description: Getting started tutorial
> [?] Project root directory: (getting-started)
> [?] Application class name: StarterApplication
> [?] Select project build settings: Enable tslint, Enable prettier, Enable loopbackBuild, Enable repositories, Enable services

3.启动项目

> npm i nodemon --save-dev
> 创建 nodemon.json
> package.json 中
> "scripts": {

    "dev": "nodemon",

}

> npm run dev
> index.js 可以修改端口

4.swagger 测试

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

********\*\********* 创建 Model ********\*\*********

> lb4 model
> ? Model class name: Dic
> ? Please select the model base class: Entity
> ? Allow additional (free-form) properties? No

? Enter the property name: DicID
? Property type: number
? Is id the ID property? Yes
? Is it required?: No
? Default value [leave blank for none]:
注意：ID 为主键的话，required 为 false

? Enter the property name: DicType
? Property type: string
? Is it required?: Yes
? Default value [leave blank for none]:

? Enter the property name: DicValue
? Property type: string
? Is it required?: Yes
? Default value [leave blank for none]:

********\*\********* 创建 datasource ********\*\*********

> lb4 datasource
> ? Datasource name: db
> ? Select the connector for db: In-memory db (supported by StrongLoop)
> ? window.localStorage key to use for persistence (browser only):
> ? Full path to file for persistence (server only): ./data/db.json
> 在根目录创建 data 文件夹，里面创建 db.json 文件

********\*\********* 创建 repository ********\*\*********

> lb4 repository
> ? Please select the datasource DbDatasource
> ? Select the model(s) you want to generate a repository Dic
> ? Please select the repository base class DefaultCrudRepository (Legacy juggler bridge)

********\*\********* 创建 controller ********\*\*********

> lb4 controller
> ? Controller class name: Dic
> ? What kind of controller would you like to generate? REST Controller with CRUD functions
> ? What is the name of the model to use with this CRUD repository? Dic
> ? What is the name of your CRUD repository? DicRepository
> ? What is the type of your ID? number
> ? What is the base HTTP path name of the CRUD operations? /dics

patch，put，post 区别
patch 只是局部更新，
put 是整个更新，
post 是添加新内容

//调用 API 参考
https://loopback.io/doc/en/lb4/todo-tutorial-geocoding-service.html
https://loopback.io/doc/en/lb3/REST-connector.html
