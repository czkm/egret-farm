// TypeScript file

// 工具类

class GameUtil {
    
    // 获取舞台高度
    public static getStageHeight(): number {
        return egret.MainContext.instance.stage.stageHeight
    }

    
    // 获取舞台宽度
    public static getStageWidth(): number {
        return egret.MainContext.instance.stage.stageWidth
    }

    // 获取宽度居中
    public static getCenterW(w: number): number {
        return (GameUtil.getStageWidth() - w) / 2
    }

    // 获取高度居中
    public static getCenterH(h: number): number {
        return (GameUtil.getStageHeight() - h) / 2
    }
    

    
    // 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    public static createBitmapByName(name: string, type: string = 'png') {
        let result = new egret.Bitmap()
        let texture: egret.Texture = RES.getRes(name + '_' + type)
        result.texture = texture
        return result
    }

    
    // 根据name关键字创建一个MovieClip对象。name属性请参考resources/resource.json配置文件的内容。
    public static createMovieClipByName(name:string,MCname:string): egret.MovieClip {

        let data_stay: any = RES.getRes(name + "_json")
        console.log(data_stay)
        let texture_stay: egret.Texture = RES.getRes(name + "_png")
        let mcFactory_stay: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data_stay, texture_stay)
        return new egret.MovieClip(mcFactory_stay.generateMovieClipData(MCname))
    }

}