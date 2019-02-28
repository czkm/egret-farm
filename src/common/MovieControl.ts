class MovieControl {
	public Anim: egret.MovieClip;
	public Ress: MovieObjec;
	public constructor() {

	}

	//序列帧动画资源加载
	//[JsonArr:序列帧json路径资源数组 PicArr:序列帧图片资源路径数组]
	public MovieLoad(JsonArr:string[],PicArr:string[]): any {
		let returns:any;
		let json:string = "";
		let pics:string = "";
		if(JsonArr.length != PicArr.length) {
			if(JsonArr.length == 0 || PicArr.length == 0) {
				//长度不等退出
				return;
			}
		}
		//若加载的帧动画仅一个
		if(JsonArr.length == 1 && JsonArr.length == PicArr.length) {
			let mo: MovieObjec = new MovieObjec();
			json = JsonArr[0];
			pics = PicArr[0];
			mo.jsonData = RES.getRes(json);
			mo.pictureData = RES.getRes(pics);
			mo.mcFactory = new egret.MovieClipDataFactory(mo.jsonData ,mo.pictureData);
			returns = mo;
		}else {
			let movies: MovieObjec[];
			for(let i = 0; i < JsonArr.length; i++) {
				let temp = new MovieObjec();
				temp.jsonData = RES.getRes[JsonArr[i]];
				temp.pictureData = RES.getRes[PicArr[i]];
				temp.mcFactory = new egret.MovieClipDataFactory(temp.jsonData,temp.pictureData);
				movies.push(temp);
			}
			returns = movies;
		}
		this.Ress = returns;
		return returns;
	}

	//获取序列帧动画动作[mcFactory:动画工厂  act_name:动作名称]
	public GetMovie(mcFactory:egret.MovieClipDataFactory, act_name:string) {
		let action: egret.MovieClip;
		if(act_name == "" || mcFactory == null) {
			return;
		}
		action = new egret.MovieClip(mcFactory.generateMovieClipData(act_name));
		this.Anim = action;
		return action;
	}

	//动画完成监听[单次]
	//lis_obj:序列帧动画监听对象, callback:回调方法 call:回调方法区域
	public MovieListener_Once(lis_obj:egret.MovieClip, callback:Function, call) {
		lis_obj.addEventListener(egret.Event.COMPLETE,callback,call);
	}

	//动画完成监听[循环]
	//lis_obj:序列帧动画监听对象, callback:回调方法
	public MovieListener_Loop(lis_obj:egret.MovieClip, callback:Function, call) {
		lis_obj.addEventListener(egret.Event.LOOP_COMPLETE,callback,call);
	}

	//动画完成监听移除[单次]
	//lis_obj:序列帧动画监听对象, callback:回调方法
	public RemoveListener_Once(lis_obj:egret.MovieClip, callback:Function, call) {
		lis_obj.removeEventListener(egret.Event.COMPLETE,callback,call);
	}

	//动画完成监听[循环]
	//lis_obj:序列帧动画监听对象, callback:回调方法
	public RemoveListener_Loop(lis_obj:egret.MovieClip, callback:Function, call) {
		lis_obj.removeEventListener(egret.Event.LOOP_COMPLETE,callback,call);
	}

}

class MovieObjec {
	public jsonData:any;  //动画json数据
	public pictureData:any;  //动画图片数据
	public mcFactory:egret.MovieClipDataFactory;  //动画工厂
}