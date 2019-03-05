class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {


    public constructor() {
        super();
        this.createView();
    }

   // private percent: eui.Label = new eui.Label();
    private group: eui.Group;
    // private bar:eui.ProgressBar = new eui.ProgressBar();
    private bar: egret.Shape = new egret.Shape();


    private centerW = null
    private centerH = null

    
    private createView(): void {
        this.width = GameUtil.getStageWidth();
        this.height = GameUtil.getStageHeight();

        this.centerW = GameUtil.getCenterW(0)
        this.centerH = GameUtil.getCenterH(0)
        console.log(this.width)
        console.log(this.height)
        console.log(this.centerW)
        console.log(this.centerH)
        // // 背景色
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x273826, 1);+
        // bg.graphics.drawRect( 0, 0, this.width, this.height );
        // bg.graphics.endFill();
        // this.addChild( bg );

        // loading 图片
        let loadingPng = new eui.Image();
        loadingPng.source = 'load_bg_jpg';
        loadingPng.width = this.width
        loadingPng.height = this.height


        let loading = GameUtil.createMovieClipByName('loading', 'loading')
        loading.gotoAndPlay(0, - 1)
        loading.width = this.width
        loading.x = this.centerW
        loading.y = this.centerH


        this.bar.x = this.centerW - 200
        this.bar.y = this.centerH - 50

        // // 百分比
        // this.percent.textColor = 0xf19ec2;
        // this.percent.textAlign = 'center';
        // this.percent.x = this.centerW
        // this.percent.y = this.centerH

        // 添加组
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = this.width
        this.group.height = this.height;

        this.group.addChild(loadingPng);
        this.group.addChild(loading);
        this.group.addChild(this.bar);
        //this.group.addChild(this.percent);

        let vLayout: eui.VerticalLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.group.layout = vLayout;
    }


    public onProgress(current: number, total: number): void {
        let percent: number = Math.round(current / total * 100);
       // this.percent.text = `${percent}%`;
        // 进度条
        this.bar.graphics.beginFill(0xf19ec2, 1);
        this.bar.graphics.drawRect(50, 150, 3 * percent, 12);
        this.bar.graphics.endFill();
    }
}