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
   

    // //长菜图片

    // public farm_land_cai: eui.Image = null;
    //蔬菜动画组
    private cai_anim: egret.tween.TweenGroup;

    // //施肥操作需求等动画
    // public need_anim: control_anim = null;


    //创建时传入土地id
    public CreateLandId: Number = null

    //ui对象组
    private ui_objs: eui.UIComponent[] = new Array();
    //回调方法组
    private func_calls: Function[] = new Array();
    //----静态成员----//



    //施肥等操作资源路径组
    public static need_srcs: string[] = new Array();
    //计数标记【只是做例子用不一定非这样】
    public static indexs: number = 0;
    constructor(CLid: Number) {
        super()
        this.addEventListener(eui.UIEvent.COMPLETE, this.OnComplete, this);
        this.skinName = "resource/myskins/farm_land.exml";
        // Farmland.need_srcs.push(ScType[0], ScType[1], ScType[2]);

        this.CreateLandId = CLid
    }

    private OnComplete() {

        //创建动画
        // this.need_anim = new control_anim();
        // this.need_anim.skinName = "resource/myskins/anim.exml";
        // this.need_anim.x = 120;
        // this.need_anim.y = 40;
        // this.need_anim.start_anim();
        // this.addChild(this.need_anim);
        // this.start_anim()

        this.ui_objs.push(this.farm_land_normal, );
        this.func_calls.push(this.land_handle.bind(this,this,this));
        this.ClickEvent_Listerner(this.ui_objs, this.func_calls);
        // this.farm_land_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.land_anim.bind,this)

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
    private land_handle(this) {
        console.log("土地处理");
        this.start_anim()
    }
    // //播放土地动画
    // private land_anim(){
    //      this.start_anim()
    // }
    //蔬菜动画开始
    public start_anim() {
        this.cai_anim.play(0);
    }

    //蔬菜动画停止
    public end_anim() {
        this.cai_anim.stop();
    }


    // //可扩地处理
    // private not_land_handle() {
    //     console.log("可扩地处理");
    //     //在事件监听的回调函数中this指向当前回调的对象
    //     this.visible = false;
    // }

    // //菜处理
    // private cai_handle() {
    //     console.log("菜菜处理");
    //     this.visible = false;
    // }

    //资源图片更换
    // public change_picture(src: string, ui_obj: eui.Image) {
    //     ui_obj.source = src;
    // }
    //土地图片变化
    public change_Landpic(land_src: string) {
        this.farm_land_normal.source = land_src;

    }


}