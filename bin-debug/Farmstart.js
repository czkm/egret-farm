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
        _this.landenum = [];
        _this.landindex = [];
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
        this.scroller.viewport.scrollH = 740;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://172.16.0.108:8080/test", egret.HttpMethod.POST);
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
        console.log(res);
        //1,2,1,3,1
        this.landindex = res.data;
        for (var i = 0; i < res.data.length; i++) {
            var landi = res.data[i];
            console.log(landType[landi]);
            this.landenum.push(landType[landi]);
        }
        // }   
        // let landArr = [1, 1, 2]
        this.initLand(this.farm_land_group, this.landenum, this.landindex);
    };
    Farmstart.prototype.complete_load = function () {
        // this.childrenCreated();
        //this.childrenCreated();
    };
    // //展示土地
    // private creatland(num): void {
    //     for (var landindex = 0; landindex < num; landindex++) {
    //         console.log(1)
    //         this.farm_land_group.$children[landindex].visible = true
    //     }
    // }
    //初始化6土地
    Farmstart.prototype.initLand = function (parent, type, index) {
        // await this.landenum
        // await this.landindex
        console.log(type);
        console.log(index);
        var pos = new Array(6);
        pos[0] = new egret.Point(69, 0);
        pos[1] = new egret.Point(273, 96);
        pos[2] = new egret.Point(-8, 181);
        pos[3] = new egret.Point(189, 282);
        pos[4] = new egret.Point(76, 429);
        pos[5] = new egret.Point(266, 534);
        for (var i = 0; i < pos.length; i++) {
            var farmland = new Farmland();
            farmland.x = pos[i].x;
            farmland.y = pos[i].y;
            // console.log(this.landindex[i])
            // console.log(this.landenum[i])
            console.log(type[i]);
            farmland.change_Landpic(type[i]);
            parent.addChild(farmland);
        }
        console.log("添加土地");
    };
    return Farmstart;
}(eui.Component));
__reflect(Farmstart.prototype, "Farmstart");
