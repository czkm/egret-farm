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
//浇水施肥等动画控制类
var control_anim = (function (_super) {
    __extends(control_anim, _super);
    function control_anim(Optype) {
        var _this = _super.call(this) || this;
        _this.test_grop = null;
        _this.image = null;
        _this.Option_Type = null; //记录操作状态
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.on_complete, _this);
        _this.skinName = "resource/myskins/anim.exml";
        _this.Option_Type = Optype;
        return _this;
        // console.log(Optype)
        // console.log(this.Option_Type)
    }
    ;
    //动画开始
    control_anim.prototype.start_anim = function () {
        this.scale.play(0);
    };
    //动画停止
    control_anim.prototype.end_anim = function () {
        this.scale.stop();
    };
    //动画图片更换
    control_anim.prototype.change_image = function (src_load) {
        this.image.source = src_load;
    };
    //点击监听
    control_anim.prototype.handle_animClick = function (OptinType, evt) {
        this.image.visible = false;
        console.log(evt.localX); //65
        console.log(evt.localY); //39
        console.log(OptinType);
        // console.log(evt
        //playX,playY是传入播放帧动画的坐标
        var playX = evt.localX + 60;
        var playY = evt.localY + 20;
        //判断操作
        this.Show_option_handle('water_0', '12', playX, playY); //this.Hiden_option_handle)
    };
    //皮肤加载成功监听
    control_anim.prototype.on_complete = function () {
        this.scale.addEventListener('itemComplete', this.onTweenItemComplete, this);
        this.start_anim();
        // this.image.name = "image TouchEvent";
        this.image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handle_animClick.bind(this, this.Option_Type), this);
    };
    //监听动画组某个动画播放完成
    control_anim.prototype.onTweenItemComplete = function (event) {
        var item = event.data;
        this.start_anim();
    };
    control_anim.prototype.Show_option_handle = function (name, Mcname, objectX, objectY) {
        var _this = this;
        var data = RES.getRes(name + "_json");
        var txtr = RES.getRes(name + "_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var Option_gif = new egret.MovieClip(mcFactory.generateMovieClipData("" + Mcname));
        Option_gif.x = objectX; //- 150
        Option_gif.y = objectY; //- 150
        this.test_grop.addChild(Option_gif);
        Option_gif.gotoAndPlay(0, 1);
        // callback(this.test_grop)
        // this.test_grop.removeChild(Option_gif);
        //监听浇水等动作完成 隐藏
        Option_gif.addEventListener(egret.Event.COMPLETE, function (e, test_grop) {
            console.log(e.type); //1次
            // Option_gif.visible = false
            _this.test_grop.removeChild(Option_gif);
        }, this);
    };
    return control_anim;
}(eui.Component));
__reflect(control_anim.prototype, "control_anim");
