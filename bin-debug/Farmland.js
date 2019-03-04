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
 * Farmland extends eui.Component
 */
var Farmland = (function (_super) {
    __extends(Farmland, _super);
    function Farmland(CLid, landArea) {
        var _this = _super.call(this) || this;
        //土地默认
        _this.farm_land_normal = null;
        _this.need_anim = null;
        //土地面积
        _this.farm_land_area = null;
        _this.farm_land_cai = null;
        //蔬菜动画组
        _this.cai_anim = null;
        //收货组
        _this.take = null;
        //土地详情管理组
        _this.farm_tip_manage = null;
        _this.farm_sc_tip = null;
        _this.farm_sc_name = null;
        _this.farm_sc_take = null;
        _this.farm_sc_area = null;
        //创建时传入土地id
        _this.CreateLandId = null;
        //ui对象组
        _this.ui_objs = new Array();
        //回调方法组
        _this.func_calls = new Array();
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.OnComplete, _this);
        _this.skinName = "resource/myskins/farm_land.exml";
        //土地id
        _this.CreateLandId = CLid;
        //土地面积
        _this.farm_land_area.text = landArea + "\u33A1";
        return _this;
    }
    ;
    Farmland.prototype.OnComplete = function () {
        Farmland._self = this;
        this.ui_objs.push(this.farm_land_normal);
        this.func_calls.push(this.land_handle.bind(this, Farmland._self));
        this.ClickEvent_Listerner(this.ui_objs, this.func_calls);
        // this.farm_land_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.land_anim.bind,this)
    };
    //点击注册事件方法[ui_objs:响应对象组 callbacks:回调方法组]
    Farmland.prototype.ClickEvent_Listerner = function (ui_objs, callbacks) {
        var leng = callbacks.length;
        if (ui_objs.length != leng) {
            return;
        }
        for (var i = 0; i < leng; i++) {
            ui_objs[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, callbacks[i], ui_objs[i]);
        }
    };
    //土地处理
    Farmland.prototype.land_handle = function () {
        var _this = this;
        console.log("土地处理");
        console.log(this.CreateLandId);
        this.start_cai_anim();
        this.farm_tip_manage.visible = true;
        setTimeout(function () {
            _this.farm_tip_manage.visible = false;
        }, 3000);
    };
    //蔬菜动画开始
    Farmland.prototype.start_cai_anim = function () {
        this.cai_anim.play(0);
    };
    //蔬菜动画停止
    Farmland.prototype.end_cai_anim = function () {
        this.cai_anim.stop();
    };
    //外部调用收获动画
    Farmland.prototype.start_take_anim = function () {
        this.take.play(0);
    };
    Farmland.prototype.end_take_anim = function () {
        this.take.stop();
    };
    //土地图片变化
    Farmland.prototype.change_Landpic = function (land_src) {
        this.farm_land_normal.source = land_src;
    };
    Farmland.prototype.change_Caipic = function (Cai_src) {
        this.farm_land_cai.source = Cai_src;
    };
    //----静态成员----//
    //施肥等操作资源路径组
    Farmland.need_srcs = new Array();
    //计数标记【只是做例子用不一定非这样】
    Farmland.indexs = 0;
    return Farmland;
}(eui.Component));
__reflect(Farmland.prototype, "Farmland");
