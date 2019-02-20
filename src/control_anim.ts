//浇水施肥等动画控制类
class control_anim extends eui.Component{

	private image: eui.Image = null;
	private scale: egret.tween.TweenGroup;
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.on_complete,this);
	}

	//动画开始
	public start_anim() {
		this.scale.play(0);
	}

	//动画停止
	public end_anim () {
		this.scale.stop();
	}

	//动画图片更换
	public change_image(src_load:string) {
		this.image.source = src_load;
	}

	//皮肤加载成功监听
	private on_complete() {
		this.scale.addEventListener('itemComplete', this.onTweenItemComplete, this);
		this.start_anim();
	}

	//监听动画组某个动画播放完成
	private onTweenItemComplete(event: egret.Event) {
		const item = event.data as egret.tween.TweenItem;
		this.start_anim();
	}
}