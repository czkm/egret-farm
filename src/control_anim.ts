//浇水施肥等动画控制类

class control_anim extends eui.Component {

	//动画播放group
	public test_grop: eui.Group = null;;

	static _self

	private image: eui.Image = null;

	private Option_Type = null; //记录操作状态

	//父节点
	public land_node: Farmland = null;

	private scale: egret.tween.TweenGroup;

	//请求实例
	private https: HttpRes = null;


	public constructor(Optype, land_node) {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.on_complete, this);
		this.skinName = "resource/myskins/anim.exml";
		//操作状态
		this.Option_Type = Optype
		//传入节点
		this.land_node = land_node;

	}
	//皮肤加载成功监听
	private on_complete() {
		control_anim._self = this

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


	//点击监听
	private handle_animClick(OptinType, evt: egret.TouchEvent) {
		//	图标隐藏
		this.image.touchEnabled = false

		this.image.visible = false;



		console.log(OptinType)
		// console.log(evt

		//playX,playY是传入播放帧动画的坐标
		let playX = evt.localX + 60
		let playY = evt.localY + 20

		//判断操作

		console.log(this.Option_Type)

		//播放摇曳动画
		this.land_node.start_cai_anim();


		//需要浇水
		if (this.Option_Type == 'need_water_png') {
			//Farmland.start_shake_anim()


			let data = 'type=0&tt=666'
			control_anim._self = this
			this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
			this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
			this.https.httpInit();


			this.Show_option_handle('User_option', 'water', playX, playY)//this.Hiden_option_handle)



		} else if (this.Option_Type == 'need_fertilize_png') {
			console.log('施肥')
			let data = `type=1&tt=666`
			control_anim._self = this

			this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
			this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
			this.https.httpInit();


			this.Show_option_handle('User_option2', 'fertilize', playX, playY)//this.Hiden_option_handle)

		} else if (this.Option_Type == 'need_weed_png') {

			console.log('除草')
			let data = 'type=2&tt=666'
			control_anim._self = this

			this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
			this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
			this.https.httpInit();


			this.Show_option_handle('User_option2', 'weed', playX, playY)//this.Hiden_option_handle)

		} else if (this.Option_Type == 'need_take_png') {
			console.log('收获')

			let data = 'type=3&tt=666'
			control_anim._self = this

			this.https = new HttpRes(this.httpscallback.bind(control_anim._self));
			this.https.setUrl("http://172.16.0.67:8001/future/type/change", "POST", "application/x-www-form-urlencoded", data);
			this.https.httpInit();


			this.Show_option_handle('User_option2', 'take', playX, playY)//this.Hiden_option_handle)

			//收获动画
			this.land_node.start_take_anim();

			//收获动画后清空土地数据
			this.land_node.tipclose_handle()
			this.land_node.farm_land_area.visible = false




		}

	}






	//播放浇水动画

	private Show_option_handle(name, Mcname, objectX, objectY) {//, callback: Function) {

		var data = RES.getRes(`${name}_json`);
		var txtr = RES.getRes(`${name}_png`);
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var Option_gif: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(`${Mcname}`));

		Option_gif.x = objectX //- 150
		Option_gif.y = objectY //- 150


		this.test_grop.addChild(Option_gif);
		Option_gif.gotoAndPlay(0, 1);

		//监听动画播放完成
		Option_gif.addEventListener(egret.Event.COMPLETE, (e: egret.Event, test_grop) => {
			this.land_node.start_cai_anim();

			console.log(e.type);//1次
			Option_gif.visible = false
			this.test_grop.removeChild(Option_gif)


			this.image.visible = true
			this.image.touchEnabled = true
			this.change_image(this.Option_Type)


		}, this);

		//this.image.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handle_animClick.bind(this, this.Option_Type), this)

	}


	//-----------------动画操作组-----------------
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
	//------------------------callback------------------
	private httpscallback(this) {

		let res = JSON.parse(this.https.getDatas())

		console.log(res)
		//接下来无值
		if (res.num2 == 4) {
			console.log("res无值")
			this.Option_Type = OptionType[res.num2]
			//移除监听和组
			setTimeout(() => {
				this.removeChild(this.test_grop)
				this.image.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handle_animClick.bind(this, this.Option_Type), this)

			}, 5000)
		}
		else if (res) {

			this.Option_Type = OptionType[res.num2]

			//土地颜色变深
			this.land_node.change_Landpic(landType[res.landType])
			//记录状态值
			console.log(this.Option_Type)
		}
		else {
			console.log('err')
		}

	}
}