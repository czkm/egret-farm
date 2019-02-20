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


    public landenum = []
    public landindex = []
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
        this.scroller.viewport.scrollH = 740;


        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://172.16.0.108:8080/test", egret.HttpMethod.POST);
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

        console.log(res)

        //1,2,1,3,1
        this.landindex = res.data
        for (var i = 0; i < res.data.length; i++) {
            let landi = res.data[i]
            console.log(landType[landi])
            this.landenum.push(landType[landi])

        }
        // }   
        // let landArr = [1, 1, 2]
        this.initLand(this.farm_land_group, this.landenum, this.landindex);
    }


    private complete_load() {
        // this.childrenCreated();
        //this.childrenCreated();

    }

    // //展示土地
    // private creatland(num): void {
    //     for (var landindex = 0; landindex < num; landindex++) {
    //         console.log(1)
    //         this.farm_land_group.$children[landindex].visible = true
    //     }


    // }

    //初始化6土地
    private initLand(parent: eui.Group, type, index) {
        // await this.landenum
        // await this.landindex
        console.log(type)
        console.log(index)



        let pos: egret.Point[] = new Array(6);
        pos[0] = new egret.Point(69, 0);
        pos[1] = new egret.Point(273, 96);
        pos[2] = new egret.Point(-8, 181);
        pos[3] = new egret.Point(189, 282);
        pos[4] = new egret.Point(76, 429);
        pos[5] = new egret.Point(266, 534);
        for (let i = 0; i < pos.length; i++) {
            let farmland: Farmland = new Farmland();
            farmland.x = pos[i].x;
            farmland.y = pos[i].y;

            // console.log(this.landindex[i])
            // console.log(this.landenum[i])
            console.log(type[i])

            farmland.change_Landpic(type[i])

         
              parent.addChild(farmland);
        }
      
        console.log("添加土地")
    }


}