// TypeScript file

/**
 * Farmland extends eui.Component
 */


// enum landType{"luobo_0_png","luobo_1-png","bocai_0_png","bocai_1_png"};
// enum ScType { "need_water_png", "need_fertilize_png", "need_weed_png" };
//土地类


class Farmland extends eui.Component {
    //土地默认
    public farm_land_normal: eui.Image = null;;


    //土地图片
    public farm_land_seed: eui.Image = null;
    //可扩地图片
    public not_land: eui.Image = null;
    //长菜图片
    public cai: eui.Image = null;
    //施肥操作需求等动画
    public need_anim: control_anim = null;
    //ui对象组
    private ui_objs: eui.UIComponent[] = new Array();
    //回调方法组
    private func_calls: Function[] = new Array();
    //----静态成员----//


    //施肥等操作资源路径组
    public static need_srcs: string[] = new Array();
    //计数标记【只是做例子用不一定非这样】
    public static indexs: number = 0;
    constructor() {
        super()
        this.addEventListener(eui.UIEvent.COMPLETE, this.OnComplete, this);
        this.skinName = "resource/myskins/farm_land.exml";
        Farmland.need_srcs.push(ScType[0], ScType[1], ScType[2]);


    }

    private OnComplete() {

        //创建动画
        this.need_anim = new control_anim();
        this.need_anim.skinName = "resource/myskins/anim.exml";
        this.need_anim.x = 120;
        this.need_anim.y = 40;
        this.need_anim.start_anim();
        this.addChild(this.need_anim);

        this.ui_objs.push(this.farm_land_seed, this.not_land, this.cai, this.need_anim);
        this.func_calls.push(this.land_handle, this.not_land_handle, this.cai_handle, this.anim_handle);
        this.ClickEvent_Listerner(this.ui_objs, this.func_calls);
    }

    //点击注册事件方法[ui_objs:响应对象组 callbacks:回调方法组]
    private ClickEvent_Listerner(ui_objs: eui.UIComponent[], callbacks: Function[]) {
        let leng: number = callbacks.length;
        if (ui_objs.length != leng) { return; }
        for (let i = 0; i < leng; i++) {
            ui_objs[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, callbacks[i], ui_objs[i]);
        }
    }

    //土地处理
    private land_handle() {
        console.log("土地处理");
    }

    //可扩地处理
    private not_land_handle() {
        console.log("可扩地处理");
        //在事件监听的回调函数中this指向当前回调的对象
        this.visible = false;
    }

    //菜处理
    private cai_handle() {
        console.log("菜菜处理");
        this.visible = false;
    }

    //资源图片更换
    public change_picture(src: string, ui_obj: eui.Image) {
        ui_obj.source = src;
    }
    //土地图片变化
    public change_Landpic(land_src: string) {
        this.farm_land_normal.source = land_src;
    }


    //施肥等动画处理
    private anim_handle(event: egret.Event) {
        console.log(event)
        let curr: control_anim = event.currentTarget;
        Farmland.indexs += 1;
        if (Farmland.indexs >= 3) {
            Farmland.indexs = 0;
        }
        curr.change_image(Farmland.need_srcs[Farmland.indexs]);
        console.log("动画处理");
    }
}