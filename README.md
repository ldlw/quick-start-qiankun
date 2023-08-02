## 微前端乾坤

### 项目描述
主应用和子应用统一技术栈, 使用vue2+webpack+qiankun-vue2搭建, 基座应用和微应用vuex数据同步

### 文件结构
```shell
.
├── main-app 主应用基座
├── sub-app-a 子应用A模块
├── sub-app-b 子应用B模块
```

### 开始

进入对应工程安装根单个工程依赖
```
npm i
```

一键安装所有主子应用的依赖
```
npm run subinstall
```

一键启动所有所有应用
```
npm run dev
```

一键打包所有所有应用
```
npm run build
```