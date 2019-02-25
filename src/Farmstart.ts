// TypeScript file

/**
 * farm_start extends eui.compa
 */

class Farmstart extends eui.Component {
    public scroller: eui.Scroller;
    public viewportGroup: eui.Group;
    public farm_land_bg: eui.Image;
    public farm_zl: eui.Image;
    public farm_house: eui.Image;
    public farm_man: eui.Image;
    public farm_dog1: eui.Image;
    public farm_dog2: eui.Image;
    public farm_land_group: eui.Group;
    public land_0: eui.Component=null;
    public land_1: eui.Component=null;
    public land_2: eui.Component=null;
    public land_3: eui.Component=null;
    public land_4: eui.Component=null;
    public land_5: eui.Component=null;


    //---------------土地固定图标 用户操作组-----------------------------

    public farm_user_manage: eui.Group;
    public farm_option_mine: eui.Image;
    public farm_option_active: eui.Image;
    public farm_option_take: eui.Image;
    public farm_option_expand: eui.Image;

    //箭头组
    public user_arrow: eui.Group;
    public farm_option_right: eui.Image;
    public farm_option_left: eui.Image;

    //底部操作组
    public user_bottom: eui.Group;
    public user_option_bg: eui.Image;
    public user_pack: eui.Image;
    public user_camera: eui.Image;
    public user_pic: eui.Image;



    public LandArry = []//土地数组
    public landType = []//土地状态数组
    public scType = []//蔬菜状态数组
    public optionType = [] //操作状态数组

    //-----------方法调用，监听------------
    //ui对象组
    private Farmstart_ui_objs: eui.UIComponent[] = new Array();
    //回调方法组
    private Farmstart_func_calls: Function[] = new Array();



    constructor() {
        super()
        this.addEventListener(eui.UIEvent.COMPLETE, this.complete_load, this);
        this.skinName = "resource/myskins/farm_start.exml";
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        // 触摸穿透
        this.farm_user_manage.touchThrough = true
        this.user_arrow.touchThrough = true
        this.user_bottom.touchThrough = true

        // this.manager.touchThrough = true;
        // this.manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.arrowEvent, this);

        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = false;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 0;   //屏幕初始化位置
        //this.scroller.viewport.



        this.Farmstart_ui_objs.push(this.farm_option_mine, this.farm_option_active, this.farm_option_take, this.farm_option_expand, this.farm_option_left, this.farm_option_right, );
        this.Farmstart_func_calls.push(this.mine_handle, this.active_handle, this.take_handle, this.expand_handle, this.left_handle, this.right_handle);
        this.ClickEvent_Listerner(this.Farmstart_ui_objs, this.Farmstart_func_calls);

        //------------向服务器请求用户数据------------
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://172.16.0.67:8001/future/num", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(`1`);
        // request.addEventListener(egret.Event.COMPLETE, this.onPostComplete.bind( this,null, this.test), this);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);


    }



    //点击注册事件方法[ui_objs:响应对象组 callbacks:回调方法组]
    private ClickEvent_Listerner(ui_objs: eui.UIComponent[], callbacks: Function[]) {
        let leng: number = callbacks.length;
        if (ui_objs.length != leng) { return; }
        for (let i = 0; i < leng; i++) {
            ui_objs[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, callbacks[i], ui_objs[i]);
        }
    }

    //请求加载完成回调
    private onPostComplete(evt: egret.Event) {
        let request = <egret.HttpRequest>evt.currentTarget;

        // console.log(request)
        let res = JSON.parse(request.response);

        console.log(res.num)
        console.log(res.num2)
        //console.log(res.data)

        //1,2,1,3,1


        for (var i = 0; i < res.num.length; i++) {
            let scindex = res.num[i]
            let optionindex = res.num2[i]

            console.log(OptionType[optionindex])
            console.log(ScType[scindex])

            // this.landType.push(landType[landindex])
            this.scType.push(ScType[scindex])
            this.optionType.push(OptionType[optionindex])
        }
        this.LandArry.push(this.land_0,this.land_1)
        this.initLand(this.farm_land_group, this.scType, this.optionType);
        console.log(this.LandArry)
    }


    private complete_load() {

        console.log("页面加载完成回调")

    }



    //初始化6土地
    private initLand(parent: eui.Group, scType, Optype) {
        // await this.landenum
        // await this.landindex
        console.log(scType)



        //Xoff,Yoff是提示用户图标的偏移
        let Xoff = 120
        let Yoff = 110




        let pos: egret.Point[] = new Array(6);
        pos[0] = new egret.Point(113.21, -127.94);
        pos[1] = new egret.Point(337.74, -9.45);
        pos[2] = new egret.Point(95.98, 114.37);
        pos[3] = new egret.Point(339.89, 234.73);
        pos[4] = new egret.Point(76.51, 360);
        pos[5] = new egret.Point(323.18, 482.07);
        for (let i = 0; i < pos.length; i++) {
            //创建农场土地
            let farmland: Farmland = new Farmland(i);
            //创建操作状态
            let anim = new control_anim(1)

            //设立坐标组
            farmland.x = pos[i].x;
            farmland.y = pos[i].y;

            anim.x = pos[i].x + Xoff;
            anim.y = pos[i].y + Yoff;
            // console.log(scType[i])
            //通过枚举更改土地状态,操作状态 的资源图片

            // farmland.change_Landpic(landtype[i])
            farmland.change_Caipic(scType[i])
            anim.change_image(Optype[i])

            parent.addChild(farmland);
            parent.addChild(anim);
            console.log(farmland.CreateLandId)

            //监听点击事件
            farmland.addEventListener(egret.TouchEvent.TOUCH_TAP, this.farmland_handle.bind(this, i), this)
            anim.addEventListener(egret.TouchEvent.TOUCH_TAP, this.option_handle, this)
        }

        console.log("添加土地")
    }
    //-----------------操作回调方法----------


    //点击我的操作
    public mine_handle() {
        console.log('我的')
    }
    //点击动态
    public active_handle() {
        console.log('动态')

    }
    //点击收获
    public take_handle() {
        console.log('收获')

    }
    //点击扩地
    public expand_handle() {
        console.log('扩地')

    }
    //点击左边
    public left_handle() {
        console.log('左左')

    }
    //点击右边
    public right_handle() {
        console.log('右右')

    }
    //土地点击监听
    public farmland_handle(id, evt: egret.TouchEvent) {
        console.log(id)
        console.log(evt)


    }
    //点击操作监听
    public option_handle(evt: egret.TouchEvent) {
        console.log(evt)

    }

    //点击扩地
    public pack_handle() {
        console.log('我的包裹')

    }
    //点击左边
    public camera_handle() {
        console.log('照相机')

    }
    //点击右边
    public pic_handle() {
        console.log('我的相册')

    }
}