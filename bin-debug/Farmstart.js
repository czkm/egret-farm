// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * farm_start extends eui.compa
 */
var Farmstart = (function (_super) {
    __extends(Farmstart, _super);
    function Farmstart() {
        var _this = _super.call(this) || this;
        _this.land_0 = null;
        _this.land_1 = null;
        _this.land_2 = null;
        _this.land_3 = null;
        _this.land_4 = null;
        _this.land_5 = null;
        _this.LandArry = []; //土地数组
        _this.landType = []; //土地状态数组
        _this.scType = []; //蔬菜状态数组
        _this.optionType = []; //操作状态数组
        //-----------方法调用，监听------------
        //ui对象组
        _this.Farmstart_ui_objs = new Array();
        //回调方法组
        _this.Farmstart_func_calls = new Array();
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete_load, _this);
        _this.skinName = "resource/myskins/farm_start.exml";
        return _this;
    }
    Farmstart.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 触摸穿透
        this.farm_user_manage.touchThrough = true;
        this.user_arrow.touchThrough = true;
        this.user_bottom.touchThrough = true;
        // this.manager.touchThrough = true;
        // this.manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.arrowEvent, this);
        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = false;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 0; //屏幕初始化位置
        //this.scroller.viewport.
        this.Farmstart_ui_objs.push(this.farm_option_mine, this.farm_option_active, this.farm_option_take, this.farm_option_expand, this.farm_option_left, this.farm_option_right);
        this.Farmstart_func_calls.push(this.mine_handle, this.active_handle, this.take_handle, this.expand_handle, this.left_handle, this.right_handle);
        this.ClickEvent_Listerner(this.Farmstart_ui_objs, this.Farmstart_func_calls);
        //------------向服务器请求用户数据------------
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://172.16.0.67:8001/future/num", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send("1");
        // request.addEventListener(egret.Event.COMPLETE, this.onPostComplete.bind( this,null, this.test), this);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
    };
    //点击注册事件方法[ui_objs:响应对象组 callbacks:回调方法组]
    Farmstart.prototype.ClickEvent_Listerner = function (ui_objs, callbacks) {
        var leng = callbacks.length;
        if (ui_objs.length != leng) {
            return;
        }
        for (var i = 0; i < leng; i++) {
            ui_objs[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, callbacks[i], ui_objs[i]);
        }
    };
    //请求加载完成回调
    Farmstart.prototype.onPostComplete = function (evt) {
        var request = evt.currentTarget;
        // console.log(request)
        var res = JSON.parse(request.response);
        console.log(res.num);
        console.log(res.num2);
        //console.log(res.data)
        //1,2,1,3,1
        for (var i = 0; i < res.num.length; i++) {
            var scindex = res.num[i];
            var optionindex = res.num2[i];
            console.log(OptionType[optionindex]);
            console.log(ScType[scindex]);
            // this.landType.push(landType[landindex])
            this.scType.push(ScType[scindex]);
            this.optionType.push(OptionType[optionindex]);
        }
        this.LandArry.push(this.land_0, this.land_1);
        this.initLand(this.farm_land_group, this.scType, this.optionType);
        console.log(this.LandArry);
    };
    Farmstart.prototype.complete_load = function () {
        console.log("页面加载完成回调");
    };
    //初始化6土地
    Farmstart.prototype.initLand = function (parent, scType, Optype) {
        // await this.landenum
        // await this.landindex
        console.log(scType);
        //Xoff,Yoff是提示用户图标的偏移
        var Xoff = 120;
        var Yoff = 110;
        var pos = new Array(6);
        pos[0] = new egret.Point(113.21, -127.94);
        pos[1] = new egret.Point(337.74, -9.45);
        pos[2] = new egret.Point(95.98, 114.37);
        pos[3] = new egret.Point(339.89, 234.73);
        pos[4] = new egret.Point(76.51, 360);
        pos[5] = new egret.Point(323.18, 482.07);
        for (var i = 0; i < pos.length; i++) {
            //创建农场土地
            var farmland = new Farmland(i);
            //创建操作状态
            var anim_1 = new control_anim(1);
            //设立坐标组
            farmland.x = pos[i].x;
            farmland.y = pos[i].y;
            anim_1.x = pos[i].x + Xoff;
            anim_1.y = pos[i].y + Yoff;
            // console.log(scType[i])
            //通过枚举更改土地状态,操作状态 的资源图片
            // farmland.change_Landpic(landtype[i])
            farmland.change_Caipic(scType[i]);
            anim_1.change_image(Optype[i]);
            parent.addChild(farmland);
            parent.addChild(anim_1);
            console.log(farmland.CreateLandId);
            //监听点击事件
            farmland.addEventListener(egret.TouchEvent.TOUCH_TAP, this.farmland_handle.bind(this, i), this);
            anim_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.option_handle, this);
        }
        console.log("添加土地");
    };
    //-----------------操作回调方法----------
    //点击我的操作
    Farmstart.prototype.mine_handle = function () {
        console.log('我的');
    };
    //点击动态
    Farmstart.prototype.active_handle = function () {
        console.log('动态');
    };
    //点击收获
    Farmstart.prototype.take_handle = function () {
        console.log('收获');
    };
    //点击扩地
    Farmstart.prototype.expand_handle = function () {
        console.log('扩地');
    };
    //点击左边
    Farmstart.prototype.left_handle = function () {
        console.log('左左');
    };
    //点击右边
    Farmstart.prototype.right_handle = function () {
        console.log('右右');
    };
    //土地点击监听
    Farmstart.prototype.farmland_handle = function (id, evt) {
        console.log(id);
        console.log(evt);
    };
    //点击操作监听
    Farmstart.prototype.option_handle = function (evt) {
        console.log(evt);
    };
    //点击扩地
    Farmstart.prototype.pack_handle = function () {
        console.log('我的包裹');
    };
    //点击左边
    Farmstart.prototype.camera_handle = function () {
        console.log('照相机');
    };
    //点击右边
    Farmstart.prototype.pic_handle = function () {
        console.log('我的相册');
    };
    return Farmstart;
}(eui.Component));
__reflect(Farmstart.prototype, "Farmstart");
