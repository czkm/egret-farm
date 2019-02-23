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
    public land_0: eui.Component;
    public land_1: eui.Component;
    public land_2: eui.Component;
    public land_3: eui.Component;
    public land_4: eui.Component;
    public land_5: eui.Component;


    public landType = []//土地状态数组
    public optionType = [] //操作状态数组

    constructor() {
        super()
        this.addEventListener(eui.UIEvent.COMPLETE, this.complete_load, this);
        this.skinName = "resource/myskins/farm_start.exml";
    }

    protected childrenCreated(): void {
        super.childrenCreated();

        // this.manager.touchThrough = true;
        // this.manager.addEventListener(egret.TouchEvent.TOUCH_TAP, this.arrowEvent, this);

        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = false;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.verticalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 0;


        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://172.16.0.67:8001/future/num", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(`1`);
        // request.addEventListener(egret.Event.COMPLETE, this.onPostComplete.bind( this,null, this.test), this);
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);


    }
    public test() {
        console.log('00000000')

    }
    //加载完成回调
    private onPostComplete(evt: egret.Event) {
        let request = <egret.HttpRequest>evt.currentTarget;

        // console.log(request)
        let res = JSON.parse(request.response);

        console.log(res.num)
        console.log(res.num2)
        //console.log(res.data)

        //1,2,1,3,1


        for (var i = 0; i < res.num.length; i++) {
            let landindex = res.num[i]
            let optionindex = res.num2[i]

            console.log(OptionType[optionindex])
            console.log(landType[landindex])

            this.landType.push(landType[landindex])
            this.optionType.push(OptionType[optionindex])
        }

        this.initLand(this.farm_land_group, this.landType, this.optionType);
        // this.initanim(this.farm_land_group, this.optionType)
    }


    private complete_load() {
        // this.childrenCreated();
        //this.childrenCreated();
        console.log("页面加载完成回调")
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.globe_handle, this);




    }
    //监听全局
    private globe_handle(evt: egret.TouchEvent) {
        console.log(evt)
    }


    //初始化6土地
    private initLand(parent: eui.Group, landtype, Optype) {
        // await this.landenum
        // await this.landindex
        console.log(landtype)

        let Xoff = 110
        let Yoff = 110

        let pos: egret.Point[] = new Array(6);
        pos[0] = new egret.Point(69, 0);
        pos[1] = new egret.Point(273, 96);
        pos[2] = new egret.Point(-8, 181);
        pos[3] = new egret.Point(189, 282);
        pos[4] = new egret.Point(76, 429);
        pos[5] = new egret.Point(266, 534);
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
            console.log(landtype[i])
            //通过枚举更改土地状态,操作状态
            // farmland.change_Landpic(landtype[i])
            anim.change_image(Optype[i])


            parent.addChild(farmland);
            parent.addChild(anim);






            console.log(farmland.CreateLandId)



        }

        console.log("添加土地")
    }




}