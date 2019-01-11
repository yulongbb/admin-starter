## :tada:大数据管理后台模板:tada:

### :mega:介绍

大数据管理后台模板是由[Angular](https://angular.cn/)框架开发，以TypeScript作为主要开发语言，基于[ngx-admin](http://akveo.com/ngx-admin/)项目改进的一个管理后台基础起步模板。

该项目旨在节约开发者项目前端基础页面搭建时间:hourglass:。

### :pushpin:功能列表

1. 登录
2. 概览页
3. :ok_woman:用户信息页（用户信息概览，:bell:用户通知）
4. :ok_woman:用户设置（基础信息设置、账户设置、:bell:通知设置）
5. :blue_book:开发手册
6. 注销

### :computer:运行环境

#### 环境要求

| 软件  | 版本 | 描述 |
| ------------- | ------------- | ------------- |
| 系统  |    windows   |   操作系统   |
| Git  | 2.13.2.windows.1  |代码版本控制  |
| Node | v8.11.4  | Node.js安装包  |
| NPM | 5.6.0  | npm包管理器  |
| CLI   |  6.1.5  | angular项目脚手架  |
| VS Code   |  1.14.2  | 前端代码编辑器  |

#### :arrow_forward:运行步骤

- 安装node.js和npm
  
  [node.js下载地址](https://nodejs.org/)
  
  查看node.js版本: `node -v`
  
  查看npm版本: `npm -v`
  
- 安装angular cli

  `npm install -g @angular/cli`
  
- 克隆项目到本地运行

  - 下载安装git
  
    [git下载地址](https://git-scm.com/downloads)
  
    查看git版本: `git --version`
  
  - 克隆项目
  
    `git clone https://github.com/yulongbb/admin-starter.git`
    
  - 运行项目
    
    - 安装项目依赖的npm包： `npm install`
    
    -在默认端口4200运行项目并自动打开浏览器： `ng s -o`

### :point_right:基础操作

#### 添加示例导航

在`app/pages/page-menu.ts`文件中添加示例导航

```
 {
   title: '示例模块一',
   icon: 'nb-locked',
   children: [
     {
       title: '示例功能一',
       link: '/pages/example',
     },
   ],
 },
```
    
#### 新建示例页面

在`app/pages/example`下添加示例页面

`ng generate component pages/example`

#### 添加路由导航链接

在`app/pages/pages-routing.component.ts`文件添加示例路由

```
 {
    path: 'example',
    component: ExampleComponent,
 },
```
:100: :nail_care:

### :books:学习资源文档

[Angular官方中文文档](https://angular.cn/docs)

[ngx-admin参考文档](https://akveo.github.io/nebular/docs/getting-started/what-is-nebular)

