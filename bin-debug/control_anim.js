//浇水施肥等动画控制类
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
var control_anim = (function (_super) {
    __extends(control_anim, _super);
    function control_anim(Optype, land_node) {
        var _this = _super.call(this) || this;
        //动画播放group
        _this.test_grop = null;
        _this.image = null;
        _this.Option_Type = null; //记录操作状态
        //父节点
        _this.land_node = null;
        //请求实例
        _this.https = null;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.on_complete, _this);
        _this.skinName = "resource/myskins/anim.exml";
        //操作状态
        _this.Option_Type = Optype;
        //传入节点
        _this.land_node = land_node;
        return _this;
    }
    ;
    //皮肤加载成功监听
    control_anim.prototype.on_complete = function () {
        control_anim._self = this;
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
    //点击监听
    control_anim.prototype.handle_animClick = function (OptinType, evt) {
        //	图标隐藏
        this.image.touchEnabled = false;
        this.image.visible = false;
        console.log(OptinType);
        // console.log(evt
        //playX,playY是传入播放帧动画的坐标
        var playX = evt.localX + 60;
        var playY = evt.localY + 20;
        //判断操作
        console.log(this.Option_Type);
        //需要浇水
        if (this.Option_Type == 'need_water_png') {
            //Farmland.start_shake_anim()
            this.land_node.option_type_complete.text = '浇水成功';
            var data = 'type=0&tt=666';
            control_anim._self = this;
            this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
            this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
            this.https.httpInit();
            this.Show_option_handle('User_option', 'water', playX, playY); //this.Hiden_option_handle)
        }
        else if (this.Option_Type == 'need_fertilize_png') {
            this.land_node.option_type_complete.text = '施肥成功';
            console.log('施肥');
            var data = "type=1&tt=666";
            control_anim._self = this;
            this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
            this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
            this.https.httpInit();
            this.Show_option_handle('User_option2', 'fertilize', playX, playY); //this.Hiden_option_handle)
        }
        else if (this.Option_Type == 'need_weed_png') {
            this.land_node.option_type_complete.text = '除草成功';
            console.log('除草');
            var data = 'type=2&tt=666';
            control_anim._self = this;
            this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
            this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
            this.https.httpInit();
            this.Show_option_handle('User_option2', 'weed', playX, playY); //this.Hiden_option_handle)
        }
        else if (this.Option_Type == 'need_take_png') {
            console.log('收获');
            this.land_node.option_type_complete.text = '收获成功';
            var data = 'type=3&tt=666';
            control_anim._self = this;
            this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
            this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
            this.https.httpInit();
            this.Show_option_handle('User_option2', 'take', playX, playY); //this.Hiden_option_handle)
            //收获动画
            this.land_node.start_take_anim();
            //收获动画后清空土地数据
            this.land_node.tipclose_handle();
            this.land_node.farm_land_area.visible = false;
        }
    };
    //播放浇水动画
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
        //监听动画播放完成
        Option_gif.addEventListener(egret.Event.COMPLETE, function (e, test_grop) {
            //播放摇曳动画
            _this.land_node.start_cai_anim();
            //完成标识
            _this.land_node.Option_Complete();
            setTimeout(function () {
                _this.land_node.farm_option_complete.visible = false;
            }, 1500);
            console.log(e.type); //1次
            Option_gif.visible = false;
            _this.test_grop.removeChild(Option_gif);
            _this.image.visible = true;
            _this.image.touchEnabled = true;
            _this.change_image(_this.Option_Type);
        }, this);
        //this.image.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handle_animClick.bind(this, this.Option_Type), this)
    };
    //-----------------动画操作组-----------------
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
    //------------------------callback------------------
    control_anim.prototype.httpscallback = function () {
        var _this = this;
        var res = JSON.parse(this.https.getDatas());
        console.log(res);
        //接下来无值
        if (res.num2 == 4) {
            console.log("res无值");
            this.Option_Type = OptionType[res.num2];
            //移除监听和组
            setTimeout(function () {
                _this.removeChild(_this.test_grop);
                _this.image.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.handle_animClick.bind(_this, _this.Option_Type), _this);
            }, 5000);
        }
        else if (res) {
            this.Option_Type = OptionType[res.num2];
            //土地颜色变深
            this.land_node.change_Landpic(landType[res.landType]);
            //记录状态值
            console.log(this.Option_Type);
        }
        else {
            console.log('err');
        }
    };
    return control_anim;
}(eui.Component));
__reflect(control_anim.prototype, "control_anim");
