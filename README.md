# DoIonicAngular
> angular + ionic + cordova 多tabs学习demo
> 本项目不包含"node_modules"目录，还请安装完nodeJS后自行复制目录进工程

# 环境配置
```ruby
brew -v
npm -v    (可以不用安装nodejs里面有)
node -v   (可以直接去nodejs官网下载pkg包安装)
npm install -g cordova ionic (安装cordova 和 ionic)
```

# 创建 Ionic 工程
### 一、创建 ionic 项目

生成名字为 DoIonicAngular 的空项目

```ruby
ionic start DoIonicAngular blank
```

生成名字为 DoIonicAngular 的带有选项卡的项目

```ruby
 ionic start DoIonicAngular tabs 
```

生成名字为 DoIonicAngular 的带有侧边菜单的项目

```ruby
ionic start DoIonicAngular sidemenu
```

完成以上步骤后，会有如下提示： 
> - Go to your newly created project: cd ./ionic-test-App
> - Run ionic serve within the app directory to see your app
> - Build features and components: https://ion.link/scaffolding-docs
> - Run your app on a hardware or virtual device: https://ion.link/running-docs


### 2. 创建 iOS 应用

```ruby
$ cd DoIonicAngular
$ ionic cordova platform add ios
$ ionic cordova build ios
$ ionic cordova emulate ios
```

若是在执行`ionic cordova emulate ios`时遇到问题，可以要先执行下面的命令，安装native插件
```ruby
npm i -g native-run
```

### 3. 创建安卓应用

```ruby
$ cd DoIonicAngular
$ ionic cordova platform add android
$ ionic cordova build android
$ ionic cordova emulate android
```


以上，第一个 Angular + Ionic 的demo就配置完成了；


