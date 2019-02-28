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
        _this.scroller = null;
        _this.viewportGroup = null;
        _this.farm_land_bg = null; //背景主图
        //农场牌
        _this.farm_land_set = null;
        _this.farm_area = null; //农场面积
        _this.farm_name = null; //农场名称
        //用户土地第一页
        _this.farm_land_group = null;
        _this.land_0 = null;
        _this.land_1 = null;
        _this.land_2 = null;
        _this.land_3 = null;
        _this.land_4 = null;
        _this.land_5 = null;
        //用户土地第二页
        _this.farm_land_group2 = null;
        //牌子
        _this.farm_set_group = null;
        //灯
        _this.farm_land_light = null;
        //---------------土地固定图标 用户操作组-----------------------------
        _this.landType = []; //土地状态数组
        _this.scType = []; //蔬菜状态数组
        _this.optionType = []; //操作状态数组
        _this.landArea = []; //土地面积数组
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
        // this.manager.touchThrough = true;
        // this.manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.arrowEvent, this);
        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = false;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 0; //屏幕初始化位置
        //this.scroller.viewport.
        this.Farmstart_ui_objs.push(this.farm_set_group);
        this.Farmstart_func_calls.push(this.farm_test);
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
        // console.log(res.num)
        // console.log(res.num2)
        // console.log(res.area)
        // console.log(res.username)
        // console.log(res.total_area)
        this.farm_name.text = res.username + "\u519C\u573A";
        this.farm_area.text = res.total_area + "\u33A1";
        for (var i = 0; i < res.num.length; i++) {
            var scindex = res.num[i];
            var optionindex = res.num2[i];
            var Area = res.area[i];
            console.log(OptionType[optionindex]);
            console.log(ScType[scindex]);
            console.log(res.area[i]);
            // this.landType.push(landType[landindex])
            this.scType.push(ScType[scindex]);
            this.optionType.push(OptionType[optionindex]);
            this.landArea.push(Area);
        }
        this.initLand(this.farm_land_group, this.scType, this.optionType, this.landArea);
        //超过6条
        if (res.num.length > 6) {
            //更改土地状态
            this.farm_land_group2.visible = true;
            this.initLand2(this.farm_land_group2, this.scType, this.optionType, this.landArea);
        }
        //创建动画
        this.CreateAnima();
    };
    Farmstart.prototype.complete_load = function () {
        console.log("页面加载完成回调");
    };
    //初始化6土地
    Farmstart.prototype.initLand = function (parent, scType, Optype, landArea) {
        // await this.landenum
        // await this.landindex
        console.log(scType);
        //Xoff,Yoff是提示用户图标的偏移
        var Xoff = 172;
        var Yoff = 19;
        var pos = new Array(6);
        pos[0] = new egret.Point(41, 0);
        pos[1] = new egret.Point(257.38, 112);
        pos[2] = new egret.Point(8.72, 209);
        pos[3] = new egret.Point(246.72, 321);
        pos[4] = new egret.Point(0, 423);
        pos[5] = new egret.Point(241.38, 538);
        for (var i = 0; i < pos.length; i++) {
            //创建农场土地
            var farmland = new Farmland(i, landArea[i]);
            //创建操作状态
            var anim_1 = new control_anim(Optype[i]);
            //设立坐标组
            farmland.$x = pos[i].x + 50;
            farmland.$y = pos[i].y;
            anim_1.$x = pos[i].x + Xoff;
            anim_1.$y = pos[i].y + Yoff;
            // console.log(scType[i])
            //通过枚举更改土地状态,操作状态 的资源图片
            // farmland.change_Landpic(landtype[i])
            farmland.change_Caipic(scType[i]);
            anim_1.change_image(Optype[i]);
            parent.addChild(farmland);
            parent.addChild(anim_1);
            console.log(farmland.CreateLandId);
            //监听点击事件
            // farmland.addEventListener(egret.TouchEvent.TOUCH_TAP, this.farmland_handle.bind(this, i), this)
            // anim.addEventListener(egret.TouchEvent.TOUCH_TAP, this.option_handle, this)
        }
        console.log("添加土地");
    };
    Farmstart.prototype.initLand2 = function (parent, scType, Optype, landArea) {
        console.log(scType);
        //Xoff,Yoff是提示用户图标的偏移
        var Xoff = 172;
        var Yoff = 19;
        var pos = new Array(2);
        pos[6] = new egret.Point(31.38, 0);
        pos[7] = new egret.Point(257.38, 112);
        pos[8] = new egret.Point(8.72, 209);
        pos[9] = new egret.Point(246.72, 321);
        pos[10] = new egret.Point(0, 423);
        pos[11] = new egret.Point(241.38, 538);
        for (var i = 6; i < pos.length; i++) {
            //创建农场土地
            var farmland = new Farmland(i, landArea[i]);
            //创建操作状态
            var anim_2 = new control_anim(Optype[i]);
            //设立坐标组
            farmland.$x = pos[i].x + 50;
            farmland.y = pos[i].y;
            anim_2.x = pos[i].x + Xoff;
            anim_2.y = pos[i].y + Yoff;
            // console.log(scType[i])
            //通过枚举更改土地状态,操作状态 的资源图片
            // farmland.change_Landpic(landtype[i])
            farmland.change_Caipic(scType[i]);
            anim_2.change_image(Optype[i]);
            parent.addChild(farmland);
            parent.addChild(anim_2);
            console.log(farmland.CreateLandId);
        }
        console.log("添加第二屏幕土地");
    };
    //-----------------操作回调方法----------
    // public land_change_handle(farm_land_group, farm_land_group2) {
    //     console.log('切换')
    //     console.log(this.farm_land_group.visible)
    //     console.log(this.farm_land_group2.visible)
    //     this.farm_land_group.visible = !this.farm_land_group.visible
    //     this.farm_land_group2.visible = !this.farm_land_group2.visible
    // };
    //更换姓名
    //土地点击监听
    Farmstart.prototype.farmland_handle = function (id, evt) {
        console.log(id);
        console.log(evt);
    };
    ;
    //创建动画集合
    Farmstart.prototype.CreateAnima = function () {
        //创建灯动画
        var light = GameUtil.createMovieClipByName('farm_light', '灯');
        light.gotoAndPlay(0, -1);
        this.farm_land_light.addChild(light);
    };
    //测试
    Farmstart.prototype.farm_test = function () {
        console.log(1);
    };
    return Farmstart;
}(eui.Component));
__reflect(Farmstart.prototype, "Farmstart");
