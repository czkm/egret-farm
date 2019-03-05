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
        //第二屏替换组 如果用户有第七块土地 则该组显示
        _this.farm_less_six = null;
        //农场动物组
        _this.farm_land_animal = null;
        //第二组农场展板
        _this.group2_label_1 = null;
        _this.group2_label_2 = null;
        _this.group2_label_3 = null;
        _this.group2_label_4 = null;
        //用户信息牌
        _this.farm_group2_set = null;
        _this.farm_area = null; //农场面积
        _this.farm_name = null; //农场名称
        //用户土地第一组
        _this.farm_land_group = null;
        //用户土地第二组
        _this.farm_land_group2 = null;
        //http请求实例
        _this.https = null;
        //----------动画组--------------
        //提示动画组
        _this.alert_tip = null;
        _this.alert_manage = null;
        //-----------movieclip-------------
        //牌子
        _this.farm_set_group = null;
        //灯
        _this.farm_land_light = null;
        //狗子
        _this.farm_land_dog = null;
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
    ;
    Farmstart.prototype.complete_load = function () {
        console.log("页面加载完成回调");
        this.alert_tip.addEventListener('itemComplete', this.onTweenItemComplete, this);
        this.start_tip_anim();
    };
    Farmstart.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = false;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 0; //屏幕初始化位置
        //-----------点击监听方法组---------------------
        this.Farmstart_ui_objs.push(this.farm_set_group, this.alert_manage);
        this.Farmstart_func_calls.push(this.farm_test, this.user_tip_handle);
        this.ClickEvent_Listerner(this.Farmstart_ui_objs, this.Farmstart_func_calls);
        //------------向服务器请求用户数据------------
        // let data = 'type=0&tt=666'
        // Farmstart.self = this
        // this.https = new HttpRes(this.httpscallback.bind(Farmstart.self));
        // this.https.setUrl("http://172.16.0.67:8001/future/num", "POST", "application/x-www-form-urlencoded", data);
        // this.https.httpInit();
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        var url = 'http://172.16.0.67:8001/future/num';
        //let url = 'https://www.easy-mock.com/mock/5c6cb28f241b092e864e1528/getdata'
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        // request.addEventListener(egret.Event.COMPLETE, this.onPostComplete.bind( this,null, this.test), this);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
    };
    // //请求回调
    // private httpscallback() {
    //     let res = JSON.parse(Farmstart.self.https.getDatas())
    //     console.log(res);
    // }
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
        this.farm_name.text = res.username + "\u519C\u573A";
        this.farm_area.text = res.total_area + "\u33A1";
        //第二块板赋值
        this.group2_label_1.text = res.word[0];
        this.group2_label_2.text = res.word[1];
        this.group2_label_3.text = res.word[2];
        this.group2_label_3.text = res.word[3];
        for (var i = 0; i < res.num.length; i++) {
            var scindex = res.num[i];
            var optionindex = res.num2[i];
            var Area = res.area[i];
            var ltype = res.landType[i];
            console.log(OptionType[optionindex]);
            console.log(ScType[scindex]);
            console.log(res.area[i]);
            this.scType.push(ScType[scindex]);
            this.optionType.push(OptionType[optionindex]);
            this.landArea.push(Area);
            this.landType.push(ltype);
        }
        this.initLand(this.farm_land_group, this.scType, this.optionType, this.landArea, this.landType);
        //      用户土地超过6
        if (res.num.length > 6) {
            this.farm_group2_set.visible = false;
            //更改土地状态
            this.farm_land_group2.visible = true;
            this.farm_less_six.visible = false;
            this.initLand2(this.farm_land_group2, this.scType, this.optionType, this.landArea, this.landType);
        }
        //创建动画
        this.CreateAnima();
    };
    //初始化6土地
    Farmstart.prototype.initLand = function (parent, scType, Optype, landArea, landType) {
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
            var farmland = new Farmland(i, landArea[i], landType[i]);
            //创建操作状态,传入类节点
            var anim_1 = new control_anim(Optype[i], farmland);
            // console.log(Optype[2])
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
            //监听点击事件
            // farmland.addEventListener(egret.TouchEvent.TOUCH_TAP, this.farmland_handle.bind(this, i), this)
        }
        console.log("添加土地");
    };
    Farmstart.prototype.initLand2 = function (parent, scType, Optype, landArea, landType) {
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
            var farmland = new Farmland(i, landArea[i], landType[i]);
            //创建操作状态
            var anim_2 = new control_anim(Optype[i], farmland);
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
    //动画开始
    Farmstart.prototype.start_tip_anim = function () {
        this.alert_tip.play(0);
    };
    //动画停止
    Farmstart.prototype.end_tip_anim = function () {
        this.alert_tip.stop();
    };
    //监听动画组某个动画播放完成
    Farmstart.prototype.onTweenItemComplete = function (event) {
        var item = event.data;
        this.start_tip_anim();
    };
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
        // 创建狗动画
        var dog = GameUtil.createMovieClipByName('dog', '绿狗子');
        dog.gotoAndPlay(0, -1);
        this.farm_land_dog.addChild(dog);
    };
    //测试
    Farmstart.prototype.farm_test = function () {
        console.log(1);
    };
    //
    Farmstart.prototype.user_tip_handle = function () {
        console.log('tip');
    };
    Farmstart.self = null;
    return Farmstart;
}(eui.Component));
__reflect(Farmstart.prototype, "Farmstart");
