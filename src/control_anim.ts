//浇水施肥等动画控制类
class control_anim extends eui.Component {
	public test_grop: eui.Group = null;;



	private image: eui.Image = null;


	private Option_Type: Number = null; //记录操作状态
	// public option_anim: eui.Component = null;

	private scale: egret.tween.TweenGroup;
	public constructor(Optype) {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.on_complete, this);
		this.skinName = "resource/myskins/anim.exml";
		this.Option_Type = Optype
		// console.log(Optype)
		// console.log(this.Option_Type)
	}



	//动画开始
	public start_anim() {
		this.scale.play(0);
	}

	//动画停止
	public end_anim() {
		this.scale.stop();
	}

	//动画图片更换
	public change_image(src_load: string) {
		this.image.source = src_load;
	}


	//点击监听
	private handle_animClick(OptinType, evt: egret.TouchEvent) {


		this.image.visible = false;
		console.log(evt.localX)//65
		console.log(evt.localY)//39

		console.log(OptinType)
		// console.log(evt

		//playX,playY是传入播放帧动画的坐标
		let playX = evt.localX + 60
		let playY = evt.localY + 20

		//判断操作

		this.Show_option_handle('water_0', '12', playX, playY)//this.Hiden_option_handle)



	}



	//皮肤加载成功监听
	private on_complete() {
		this.scale.addEventListener('itemComplete', this.onTweenItemComplete, this);
		this.start_anim();
		// this.image.name = "image TouchEvent";
		this.image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handle_animClick.bind(this, this.Option_Type), this)
	}

	//监听动画组某个动画播放完成
	private onTweenItemComplete(event: egret.Event) {
		const item = event.data as egret.tween.TweenItem;
		this.start_anim();
	}
	private Show_option_handle(name, Mcname, objectX, objectY) {//, callback: Function) {
		var data = RES.getRes(`${name}_json`);
		var txtr = RES.getRes(`${name}_png`);
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var Option_gif: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(`${Mcname}`));



		Option_gif.x = objectX //- 150
		Option_gif.y = objectY //- 150



		this.test_grop.addChild(Option_gif);
		Option_gif.gotoAndPlay(0, 1);
		// callback(this.test_grop)
		// this.test_grop.removeChild(Option_gif);
		//监听浇水等动作完成 隐藏

		Option_gif.addEventListener(egret.Event.COMPLETE, (e: egret.Event, test_grop) => {
			console.log(e.type);//1次
			// Option_gif.visible = false
			this.test_grop.removeChild(Option_gif)
		}, this);

	}


}