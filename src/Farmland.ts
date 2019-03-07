// TypeScript file

/**
 * Farmland extends eui.Component
 */




class Farmland extends eui.Component {

    static _self

    //土地默认
    public farm_land_normal: eui.Image = null;;
    //土地面积
    public farm_land_area: eui.Label = null;
    //蔬菜
    public farm_land_cai: eui.Image = null;


    //蔬菜动画组
    public cai_anim: egret.tween.TweenGroup = null;
    //收获动画组
    public take: egret.tween.TweenGroup = null;


    //土地详情管理组
    public farm_tip_manage: eui.Group = null;

    public farm_is_tip: eui.Group = null;

    public farm_sc_tip: eui.Image = null;
    public farm_sc_name: eui.Label = null;
    public farm_sc_take: eui.Label = null;
    public farm_sc_area: eui.Label = null;


    //用户土地无菜时显示
    public farm_null_tip: eui.Label = null;
    public option_type_complete: eui.Label = null;


    //土地操作完成
    public farm_option_complete: eui.Group = null;



    //创建时传入土地id
    public CreateLandId: Number = null

    //创建时传入土地状态
    public ltype: string = null

    //ui对象组
    private ui_objs: eui.UIComponent[] = new Array();
    //回调方法组
    private func_calls: Function[] = new Array();


    constructor(CLid: Number, landArea, type) {
        super()
        this.addEventListener(eui.UIEvent.COMPLETE, this.OnComplete, this);
        this.skinName = "resource/myskins/farm_land.exml";


        //土地id
        this.CreateLandId = CLid

        this.ltype = landType[type]

        //土地面积
        this.farm_land_area.text = `${landArea}㎡`

        this.change_Landpic(this.ltype)

        if (!landArea) {
            Farmland._self.tipclose_handle()

            this.change_Landpic('land_0_png')
            this.farm_null_tip.text = '此块土地还未开垦'
            console.log("土地无面积")
        }
    }

    private OnComplete() {
        Farmland._self = this
        this.ui_objs.push(this.farm_land_normal);
        this.func_calls.push(this.land_handle.bind(this, Farmland._self));
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
        console.log(this.CreateLandId)

        this.farm_tip_manage.visible = true
        setTimeout(() => {
            this.farm_tip_manage.visible = false
        }, 2000)

    }

    //蔬菜动画开始
    public start_cai_anim() {
        this.cai_anim.play(0);
    }

    //蔬菜动画停止
    public end_cai_anim() {
        this.cai_anim.stop();
    }



    //收获动画
    public start_take_anim() {
        this.take.play(0);
    }
    public end_take_anim() {
        this.take.stop();
    }



    //土地图片变化
    public change_Landpic(land_src: string) {
        this.farm_land_normal.source = land_src;

    }

    //蔬菜图片变化
    public change_Caipic(Cai_src: string) {
        this.farm_land_cai.source = Cai_src;

    }
    public Option_Complete() {
        this.farm_option_complete.visible = true
    }

    //控制提示显示
    public tipclose_handle() {
        this.farm_is_tip.visible = false
        this.farm_null_tip.visible = true
        // this.farm_land_normal.touchEnabled = false
        this.farm_land_area.visible = false
    }

    // //控制用户无土地是显示
    //  public null_tip_handle() {
    //     this.farm_is_tip.visible = false
    //     this.farm_null_tip.visible = true
    //     // this.farm_land_normal.touchEnabled = false
    //     this.farm_land_area.visible = false
    // }


}