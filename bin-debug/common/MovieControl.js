var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MovieControl = (function () {
    function MovieControl() {
    }
    //序列帧动画资源加载
    //[JsonArr:序列帧json路径资源数组 PicArr:序列帧图片资源路径数组]
    MovieControl.prototype.MovieLoad = function (JsonArr, PicArr) {
        var returns;
        var json = "";
        var pics = "";
        if (JsonArr.length != PicArr.length) {
            if (JsonArr.length == 0 || PicArr.length == 0) {
                //长度不等退出
                return;
            }
        }
        //若加载的帧动画仅一个
        if (JsonArr.length == 1 && JsonArr.length == PicArr.length) {
            var mo = new MovieObjec();
            json = JsonArr[0];
            pics = PicArr[0];
            mo.jsonData = RES.getRes(json);
            mo.pictureData = RES.getRes(pics);
            mo.mcFactory = new egret.MovieClipDataFactory(mo.jsonData, mo.pictureData);
            returns = mo;
        }
        else {
            var movies = void 0;
            for (var i = 0; i < JsonArr.length; i++) {
                var temp = new MovieObjec();
                temp.jsonData = RES.getRes[JsonArr[i]];
                temp.pictureData = RES.getRes[PicArr[i]];
                temp.mcFactory = new egret.MovieClipDataFactory(temp.jsonData, temp.pictureData);
                movies.push(temp);
            }
            returns = movies;
        }
        this.Ress = returns;
        return returns;
    };
    //获取序列帧动画动作[mcFactory:动画工厂  act_name:动作名称]
    MovieControl.prototype.GetMovie = function (mcFactory, act_name) {
        var action;
        if (act_name == "" || mcFactory == null) {
            return;
        }
        action = new egret.MovieClip(mcFactory.generateMovieClipData(act_name));
        this.Anim = action;
        return action;
    };
    //动画完成监听[单次]
    //lis_obj:序列帧动画监听对象, callback:回调方法 call:回调方法区域
    MovieControl.prototype.MovieListener_Once = function (lis_obj, callback, call) {
        lis_obj.addEventListener(egret.Event.COMPLETE, callback, call);
    };
    //动画完成监听[循环]
    //lis_obj:序列帧动画监听对象, callback:回调方法
    MovieControl.prototype.MovieListener_Loop = function (lis_obj, callback, call) {
        lis_obj.addEventListener(egret.Event.LOOP_COMPLETE, callback, call);
    };
    //动画完成监听移除[单次]
    //lis_obj:序列帧动画监听对象, callback:回调方法
    MovieControl.prototype.RemoveListener_Once = function (lis_obj, callback, call) {
        lis_obj.removeEventListener(egret.Event.COMPLETE, callback, call);
    };
    //动画完成监听[循环]
    //lis_obj:序列帧动画监听对象, callback:回调方法
    MovieControl.prototype.RemoveListener_Loop = function (lis_obj, callback, call) {
        lis_obj.removeEventListener(egret.Event.LOOP_COMPLETE, callback, call);
    };
    return MovieControl;
}());
__reflect(MovieControl.prototype, "MovieControl");
var MovieObjec = (function () {
    function MovieObjec() {
    }
    return MovieObjec;
}());
__reflect(MovieObjec.prototype, "MovieObjec");
