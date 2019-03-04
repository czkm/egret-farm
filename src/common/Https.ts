// TypeScript file

class HttpRes extends egret.HttpRequest
{   
    private callback:Function = null;
    public datas:any = null;
    private httpUrl:string = "";
    private httpData:any = "";
    private httpType:string;
    private httpStype:string;
    constructor(call:Function) {
        super();
        this.callback = call;
    }
    
    public setUrl(urls:string,type:string,s_type:string,data:any) {
        this.httpUrl = urls;
        this.httpData = data;
        this.httpType = type || "GET";
        this.httpStype = s_type || "application/x-www-form-urlencoded";
    }

    public httpInit () {
        this.responseType = egret.HttpResponseType.TEXT;
        if(this.httpType == "GET") {
            this.open(this.httpUrl,egret.HttpMethod.GET);
        }else if(this.httpType == "POST") {
            this.open(this.httpUrl,egret.HttpMethod.POST);
        }else {
            this.open(this.httpUrl,egret.HttpMethod.GET);
        }
        this.setRequestHeader("Content-Type",this.httpStype);
        this.send(this.httpData);
        this.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        this.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
        this.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
    }

    public onGetComplete () {
        console.log("请求成功!");
        this.datas = this.response;
        if(this.callback != null) {
            this.callback();
        }
    }

    private onGetIOError () {
        console.log("请求失败!");
    }

    private onGetProgress () {
        console.log("请求之中!");
    }

    public getDatas ():any {
        return this.datas;
    }

}