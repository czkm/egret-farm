// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HttpRes = (function (_super) {
    __extends(HttpRes, _super);
    function HttpRes(call) {
        var _this = _super.call(this) || this;
        _this.callback = null;
        _this.datas = null;
        _this.httpUrl = "";
        _this.httpData = "";
        _this.callback = call;
        return _this;
    }
    HttpRes.prototype.setUrl = function (urls, type, s_type, data) {
        this.httpUrl = urls;
        this.httpData = data;
        this.httpType = type || "GET";
        this.httpStype = s_type || "application/x-www-form-urlencoded";
    };
    HttpRes.prototype.httpInit = function () {
        this.responseType = egret.HttpResponseType.TEXT;
        if (this.httpType == "GET") {
            this.open(this.httpUrl, egret.HttpMethod.GET);
        }
        else if (this.httpType == "POST") {
            this.open(this.httpUrl, egret.HttpMethod.POST);
        }
        else {
            this.open(this.httpUrl, egret.HttpMethod.GET);
        }
        this.setRequestHeader("Content-Type", this.httpStype);
        this.send(this.httpData);
        this.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        this.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        this.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    HttpRes.prototype.onGetComplete = function () {
        console.log("请求成功!");
        this.datas = this.response;
        if (this.callback != null) {
            this.callback();
        }
    };
    HttpRes.prototype.onGetIOError = function () {
        console.log("请求失败!");
    };
    HttpRes.prototype.onGetProgress = function () {
        console.log("请求之中!");
    };
    HttpRes.prototype.getDatas = function () {
        return this.datas;
    };
    return HttpRes;
}(egret.HttpRequest));
__reflect(HttpRes.prototype, "HttpRes");
