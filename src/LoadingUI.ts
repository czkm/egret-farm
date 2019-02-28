class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {


    public constructor() {
        super();
        this.createView();
    }

    private percent: eui.Label = new eui.Label();
    private group: eui.Group;
    // private bar:eui.ProgressBar = new eui.ProgressBar();
    private bar: egret.Shape = new egret.Shape();

    private createView(): void {
        this.width = GameUtil.getStageWidth();
        this.height = GameUtil.getStageHeight();

        // // 背景色
        // let bg:egret.Shape = new egret.Shape();
        // bg.graphics.beginFill( 0x273826, 1);+
        // bg.graphics.drawRect( 0, 0, this.width, this.height );
        // bg.graphics.endFill();
        // this.addChild( bg );

        // loading 图片
        let loadingPng = new eui.Image();
        loadingPng.source = 'bg_jpg';
        loadingPng.width = this.width
        // 百分比
        this.percent.textColor = 0xF7DB91;
        this.percent.textAlign = 'center';
        this.percent.y = 580;

        // 添加组
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = this.width
        this.group.height = this.height;
        // this.group.x = GameUtil.getCenterW(400);
        // this.group.y = GameUtil.getCenterH(600);
        // this.group.x = GameUtil.getCenterW(400);
        // this.group.y = GameUtil.getCenterH(600);
        // this.bar.x = GameUtil.getCenterW
        this.group.addChild(loadingPng);
        this.group.addChild(this.bar);
        this.group.addChild(this.percent);

        let vLayout: eui.VerticalLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.group.layout = vLayout;
    }


    public onProgress(current: number, total: number): void {
        let percent: number = Math.round(current / total * 100);
        this.percent.text = `${percent}%`;
        // 进度条
        this.bar.graphics.beginFill(0x4C947A, 1);
        this.bar.graphics.drawRect(50, 150, 3 * percent, 12);
        this.bar.graphics.endFill();
    }
}