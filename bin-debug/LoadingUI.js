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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        // private bar:eui.ProgressBar = new eui.ProgressBar();
        _this.bar = new egret.Shape();
        _this.centerW = null;
        _this.centerH = null;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.width = GameUtil.getStageWidth();
        this.height = GameUtil.getStageHeight();
        this.centerW = GameUtil.getCenterW(0);
        this.centerH = GameUtil.getCenterH(0);
        console.log(this.width);
        console.log(this.height);
        console.log(this.centerW);
        console.log(this.centerH);
        // // 背景色
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x273826, 1);+
        // bg.graphics.drawRect( 0, 0, this.width, this.height );
        // bg.graphics.endFill();
        // this.addChild( bg );
        // loading 图片
        var loadingPng = new eui.Image();
        loadingPng.source = 'load_bg_jpg';
        loadingPng.width = this.width;
        loadingPng.height = this.height;
        var loading = GameUtil.createMovieClipByName('loading', 'loading');
        loading.gotoAndPlay(0, -1);
        loading.width = this.width;
        loading.x = this.centerW;
        loading.y = this.centerH;
        this.bar.x = this.centerW - 200;
        this.bar.y = this.centerH - 50;
        // // 百分比
        // this.percent.textColor = 0xf19ec2;
        // this.percent.textAlign = 'center';
        // this.percent.x = this.centerW
        // this.percent.y = this.centerH
        // 添加组
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = this.width;
        this.group.height = this.height;
        this.group.addChild(loadingPng);
        this.group.addChild(loading);
        this.group.addChild(this.bar);
        //this.group.addChild(this.percent);
        var vLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.group.layout = vLayout;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var percent = Math.round(current / total * 100);
        // this.percent.text = `${percent}%`;
        // 进度条
        this.bar.graphics.beginFill(0xf19ec2, 1);
        this.bar.graphics.drawRect(50, 150, 3 * percent, 12);
        this.bar.graphics.endFill();
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
