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
        _this.landType = []; //土地状态数组
        _this.optionType = []; //操作状态数组
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete_load, _this);
        _this.skinName = "resource/myskins/farm_start.exml";
        return _this;
    }
    Farmstart.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.manager.touchThrough = true;
        // this.manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.arrowEvent, this);
        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = false;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 0;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://172.16.0.67:8001/future/num", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send("1");
        // request.addEventListener(egret.Event.COMPLETE, this.onPostComplete.bind( this,null, this.test), this);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
    };
    Farmstart.prototype.test = function () {
        console.log('00000000');
    };
    //加载完成回调
    Farmstart.prototype.onPostComplete = function (evt) {
        var request = evt.currentTarget;
        // console.log(request)
        var res = JSON.parse(request.response);
        console.log(res.num);
        console.log(res.num2);
        //console.log(res.data)
        //1,2,1,3,1
        for (var i = 0; i < res.num.length; i++) {
            var landindex = res.num[i];
            var optionindex = res.num2[i];
            console.log(OptionType[optionindex]);
            console.log(landType[landindex]);
            this.landType.push(landType[landindex]);
            this.optionType.push(OptionType[optionindex]);
        }
        this.initLand(this.farm_land_group, this.landType, this.optionType);
        // this.initanim(this.farm_land_group, this.optionType)
    };
    Farmstart.prototype.complete_load = function () {
        // this.childrenCreated();
        //this.childrenCreated();
        console.log("页面加载完成回调");
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.globe_handle, this);
    };
    //监听全局
    Farmstart.prototype.globe_handle = function (evt) {
        console.log(evt);
    };
    //初始化6土地
    Farmstart.prototype.initLand = function (parent, landtype, Optype) {
        // await this.landenum
        // await this.landindex
        console.log(landtype);
        var Xoff = 110;
        var Yoff = 110;
        var pos = new Array(6);
        pos[0] = new egret.Point(69, 0);
        pos[1] = new egret.Point(273, 96);
        pos[2] = new egret.Point(-8, 181);
        pos[3] = new egret.Point(189, 282);
        pos[4] = new egret.Point(76, 429);
        pos[5] = new egret.Point(266, 534);
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
            console.log(landtype[i]);
            //通过枚举更改土地状态,操作状态
            // farmland.change_Landpic(landtype[i])
            anim_1.change_image(Optype[i]);
            parent.addChild(farmland);
            parent.addChild(anim_1);
            console.log(farmland.CreateLandId);
        }
        console.log("添加土地");
    };
    return Farmstart;
}(eui.Component));
__reflect(Farmstart.prototype, "Farmstart");
