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
    function control_anim() {
        var _this = _super.call(this) || this;
        _this.image = null;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.on_complete, _this);
        return _this;
    }
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
    //皮肤加载成功监听
    control_anim.prototype.on_complete = function () {
        this.scale.addEventListener('itemComplete', this.onTweenItemComplete, this);
        this.start_anim();
    };
    //监听动画组某个动画播放完成
    control_anim.prototype.onTweenItemComplete = function (event) {
        var item = event.data;
        this.start_anim();
    };
    return control_anim;
}(eui.Component));
__reflect(control_anim.prototype, "control_anim");
