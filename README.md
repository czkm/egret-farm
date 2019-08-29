# egret-farm
基于egret引擎开发的 h5农场游戏

仅个人学习使用

## 五蕴神农
本项目第一阶段已经基本开发完成，因为暂时没有和后台对接，所以均为前端展示，自己封装了一些http请求方法，可以使用。运行效果如下
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img1.png)
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img2.png)

本项目使用白鹭引擎（egret）开发 使用Typescript ，其中egret引擎已近对项目进行了封装 只需要修改部分的资源即可
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img3.png)
本项目用到的egret相关程序 
- egretwing为项目编辑文件，继承开发环境，主要在这里相关代码
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img4.png)
- TextureMerger 为项目制作帧动画和字体相关操作
- Egret Launcher egret引擎版本管理
- ResDepot egret项目采用的资源管理方式

项目结构如下
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img5.png)


创建加载页面  程序初始化loading页面
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img6.png)
程序主方法入口
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img7.png)
### src下主要文件
- common 全局组件
	- GameUtil 全局共用方法 封装获取舞台高度相关
	- GlobeEnum 全局枚举 设置土地，蔬菜，操作等相关状态
	- Https 封装异步请求方法
- control_anim 浇水施肥等动画控制类
- Farmland 农场土地类
- Farmstart 农场基类 
- LoadingUI 自定义loading
- Main 入口 通过new一个Farmstart来创建初始化场景界面


### resource下主要文件
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img8.png)
其中 assets和 eui_skins 下的目录为系统自带的egret相关事件的皮肤 可以给与保留或者删除

- myskins 自定义皮肤文件夹
	- anim 动画皮肤
	- farm_land 农场土地皮肤
	- farm_start 农场背景图


#### anim
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img9.png)
定义了一个浇水动画 
可以通过control_anim中的Show_option_handle方法中的change_image来调用图标的变化完成浇水，施肥收获等动作
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img10.png)

#### farm_land 
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img11.png)
定义土地状态 定义了浇水，施肥摇曳和蔬菜收获 2个动画
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img12.png)

其中蔬菜的品种和土地的状态通过Farmland类中的change_Landpic来改变土地状态，通过change_Caipic来改变土地上植株的变化，farm_land_area.text 来显示土地的相关面积
 
#### farm_start 
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img13.png)
该页面是整个项目的主要ui界面  大多为简单ui其中  有1个提示用户的动画
![image](https://github.com/czkm/egret-farm/blob/master/imgloader/img14.png)
相关初始化操作在Farmstart类中调用初始化方法完成

