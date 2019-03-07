var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,a){function o(t){try{s(i.next(t))}catch(e){a(e)}}function l(t){try{s(i["throw"](t))}catch(e){a(e)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(o,l)}s((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,a&&(o=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,a=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){s.label=n[1];break}if(6===n[0]&&s.label<o[1]){s.label=o[1],o=n;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(n);break}o[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(i){n=[6,i],a=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,a,o,l,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=e.sent(),[4,platform.login()];case 3:return e.sent(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("loading")];case 2:return n.sent(),t=new LoadingUI,this.stage.addChild(t),[4,this.loadTheme()];case 3:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 4:return n.sent(),this.stage.removeChild(t),[3,6];case 5:return e=n.sent(),console.error(e),[3,6];case 6:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var i=new eui.Theme("resource/default.thm.json",t.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=new Farmstart;this.addChild(t)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?i(r):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Farmland=function(t){function e(n,i,r){var a=t.call(this)||this;return a.farm_land_normal=null,a.farm_land_area=null,a.farm_land_cai=null,a.cai_anim=null,a.take=null,a.farm_tip_manage=null,a.farm_is_tip=null,a.farm_sc_tip=null,a.farm_sc_name=null,a.farm_sc_take=null,a.farm_sc_area=null,a.farm_null_tip=null,a.CreateLandId=null,a.ltype=null,a.ui_objs=new Array,a.func_calls=new Array,a.addEventListener(eui.UIEvent.COMPLETE,a.OnComplete,a),a.skinName="resource/myskins/farm_land.exml",a.CreateLandId=n,a.ltype=landType[r],a.farm_land_area.text=i+"㎡",a.change_Landpic(a.ltype),i||(e._self.tipclose_handle(),a.change_Landpic("land_0_png"),console.log("土地无面积")),a}return __extends(e,t),e.prototype.OnComplete=function(){e._self=this,this.ui_objs.push(this.farm_land_normal),this.func_calls.push(this.land_handle.bind(this,e._self)),this.ClickEvent_Listerner(this.ui_objs,this.func_calls)},e.prototype.ClickEvent_Listerner=function(t,e){var n=e.length;if(t.length==n)for(var i=0;n>i;i++)t[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,e[i],t[i])},e.prototype.land_handle=function(){var t=this;console.log("土地处理"),console.log(this.CreateLandId),this.farm_tip_manage.visible=!0,setTimeout(function(){t.farm_tip_manage.visible=!1},3e3)},e.prototype.start_cai_anim=function(){this.cai_anim.play(0)},e.prototype.end_cai_anim=function(){this.cai_anim.stop()},e.prototype.start_take_anim=function(){this.take.play(0)},e.prototype.end_take_anim=function(){this.take.stop()},e.prototype.change_Landpic=function(t){this.farm_land_normal.source=t},e.prototype.change_Caipic=function(t){this.farm_land_cai.source=t},e.prototype.tipclose_handle=function(){this.farm_is_tip.visible=!1,this.farm_null_tip.visible=!0,this.farm_land_area.visible=!1},e}(eui.Component);__reflect(Farmland.prototype,"Farmland");var Farmstart=function(t){function e(){var e=t.call(this)||this;return e.scroller=null,e.viewportGroup=null,e.farm_land_bg=null,e.farm_less_six=null,e.farm_land_animal=null,e.group2_label_1=null,e.group2_label_2=null,e.group2_label_3=null,e.group2_label_4=null,e.farm_group2_set=null,e.farm_area=null,e.farm_name=null,e.farm_land_group=null,e.farm_land_group2=null,e.https=null,e.alert_tip=null,e.alert_manage=null,e.farm_land_arrow=null,e.farm_set_group=null,e.farm_land_light=null,e.farm_land_dog=null,e.farm_chick0=null,e.farm_chick1=null,e.farm_chick2=null,e.farm_chick3=null,e.farm_chick4=null,e.landType=[],e.scType=[],e.optionType=[],e.landArea=[],e.Farmstart_ui_objs=new Array,e.Farmstart_func_calls=new Array,e.addEventListener(eui.UIEvent.COMPLETE,e.complete_load,e),e.skinName="resource/myskins/farm_start.exml",e}return __extends(e,t),e.prototype.complete_load=function(){console.log("页面加载完成回调"),this.alert_tip.addEventListener("itemComplete",this.onTweenItemComplete,this),this.start_tip_anim()},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.scroller.viewport=this.viewportGroup,this.scroller.bounces=!1,this.scroller.horizontalScrollBar.autoVisibility=!1,this.scroller.verticalScrollBar.autoVisibility=!1,this.scroller.viewport.scrollH=0,this.Farmstart_ui_objs.push(this.farm_set_group,this.alert_manage),this.Farmstart_func_calls.push(this.farm_test,this.user_tip_handle),this.ClickEvent_Listerner(this.Farmstart_ui_objs,this.Farmstart_func_calls);var e=new egret.HttpRequest;e.responseType=egret.HttpResponseType.TEXT;var n="http://172.16.0.67:8001/future/num";e.open(n,egret.HttpMethod.POST),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(),e.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this)},e.prototype.ClickEvent_Listerner=function(t,e){var n=e.length;if(t.length==n)for(var i=0;n>i;i++)t[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,e[i],t[i])},e.prototype.onPostComplete=function(t){var e=t.currentTarget,n=JSON.parse(e.response);this.farm_name.text=n.username+"农场",this.farm_area.text=n.total_area+"㎡",this.group2_label_1.text=n.word[0],this.group2_label_2.text=n.word[1],this.group2_label_3.text=n.word[2],this.group2_label_3.text=n.word[3];for(var i=0;i<n.num.length;i++){var r=n.num[i],a=n.num2[i],o=n.area[i],l=n.landType[i];console.log(OptionType[a]),console.log(ScType[r]),console.log(n.area[i]),this.scType.push(ScType[r]),this.optionType.push(OptionType[a]),this.landArea.push(o),this.landType.push(l)}this.initLand(this.farm_land_group,this.scType,this.optionType,this.landArea,this.landType),n.num.length>6&&(this.farm_group2_set.visible=!1,this.farm_land_group2.visible=!0,this.farm_less_six.visible=!1,this.initLand2(this.farm_land_group2,this.scType,this.optionType,this.landArea,this.landType)),this.CreateAnima()},e.prototype.initLand=function(t,e,n,i,r){console.log(e);var a=172,o=19,l=new Array(6);l[0]=new egret.Point(41,0),l[1]=new egret.Point(257.38,112),l[2]=new egret.Point(8.72,209),l[3]=new egret.Point(246.72,321),l[4]=new egret.Point(0,423),l[5]=new egret.Point(241.38,538);for(var s=0;s<l.length;s++){var p=new Farmland(s,i[s],r[s]),_=new control_anim(n[s],p);p.$x=l[s].x+50,p.$y=l[s].y,_.$x=l[s].x+a,_.$y=l[s].y+o,p.change_Caipic(e[s]),_.change_image(n[s]),t.addChild(p),t.addChild(_)}console.log("添加土地")},e.prototype.initLand2=function(t,e,n,i,r){console.log(e);var a=172,o=19,l=new Array(2);l[6]=new egret.Point(31.38,0),l[7]=new egret.Point(257.38,112),l[8]=new egret.Point(8.72,209),l[9]=new egret.Point(246.72,321),l[10]=new egret.Point(0,423),l[11]=new egret.Point(241.38,538);for(var s=6;s<l.length;s++){var p=new Farmland(s,i[s],r[s]),_=new control_anim(n[s],p);p.$x=l[s].x+50,p.y=l[s].y,_.x=l[s].x+a,_.y=l[s].y+o,p.change_Caipic(e[s]),_.change_image(n[s]),t.addChild(p),t.addChild(_),console.log(p.CreateLandId)}console.log("添加第二屏幕土地")},e.prototype.start_tip_anim=function(){this.alert_tip.play(0)},e.prototype.end_tip_anim=function(){this.alert_tip.stop()},e.prototype.onTweenItemComplete=function(t){t.data;this.start_tip_anim()},e.prototype.farmland_handle=function(t,e){console.log(t),console.log(e)},e.prototype.CreateAnima=function(){var t=GameUtil.createMovieClipByName("arrow","arrow");t.gotoAndPlay(0,-1),this.farm_land_arrow.addChild(t);var e=GameUtil.createMovieClipByName("farm_light","灯");e.gotoAndPlay(0,-1),this.farm_land_light.addChild(e);var n=GameUtil.createMovieClipByName("dog","绿狗子");n.gotoAndPlay(0,-1),this.farm_land_dog.addChild(n);var i=GameUtil.createMovieClipByName("animal","animal1"),r=GameUtil.createMovieClipByName("animal","animal1"),a=GameUtil.createMovieClipByName("animal","animal2"),o=GameUtil.createMovieClipByName("animal","animal3"),l=GameUtil.createMovieClipByName("animal","animal4");i.gotoAndPlay(0,-1),r.gotoAndPlay(0,-1),a.gotoAndPlay(0,-1),o.gotoAndPlay(0,-1),l.gotoAndPlay(0,-1),this.farm_chick0.addChild(i),this.farm_chick1.addChild(r),this.farm_chick2.addChild(a),this.farm_chick3.addChild(o),this.farm_chick4.addChild(l)},e.prototype.farm_test=function(){console.log(1)},e.prototype.user_tip_handle=function(){console.log("tip")},e.self=null,e}(eui.Component);__reflect(Farmstart.prototype,"Farmstart");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.bar=new egret.Shape,e.centerW=null,e.centerH=null,e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.width=GameUtil.getStageWidth(),this.height=GameUtil.getStageHeight(),this.centerW=GameUtil.getCenterW(0),this.centerH=GameUtil.getCenterH(0),console.log(this.width),console.log(this.height),console.log(this.centerW),console.log(this.centerH);var t=new eui.Image;t.source="load_bg_jpg",t.width=this.width,t.height=this.height;var e=GameUtil.createMovieClipByName("loading","loading");e.gotoAndPlay(0,-1),e.width=this.width,e.x=this.centerW,e.y=this.centerH,this.bar.x=this.centerW-200,this.bar.y=this.centerH-50,this.group=new eui.Group,this.addChild(this.group),this.group.layout=new eui.BasicLayout,this.group.width=this.width,this.group.height=this.height,this.group.addChild(t),this.group.addChild(e),this.group.addChild(this.bar);var n=new eui.VerticalLayout;n.horizontalAlign=egret.HorizontalAlign.CENTER,this.group.layout=n},e.prototype.onProgress=function(t,e){var n=Math.round(t/e*100);this.bar.graphics.beginFill(15834818,1),this.bar.graphics.drawRect(50,150,3*n,12),this.bar.graphics.endFill()},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var control_anim=function(t){function e(e,n){var i=t.call(this)||this;return i.test_grop=null,i.image=null,i.Option_Type=null,i.land_node=null,i.https=null,i.addEventListener(eui.UIEvent.COMPLETE,i.on_complete,i),i.skinName="resource/myskins/anim.exml",i.Option_Type=e,i.land_node=n,i}return __extends(e,t),e.prototype.on_complete=function(){e._self=this,this.scale.addEventListener("itemComplete",this.onTweenItemComplete,this),this.start_anim(),this.image.addEventListener(egret.TouchEvent.TOUCH_TAP,this.handle_animClick.bind(this,this.Option_Type),this)},e.prototype.onTweenItemComplete=function(t){t.data;this.start_anim()},e.prototype.handle_animClick=function(t,n){this.image.touchEnabled=!1,this.image.visible=!1,console.log(t);var i=n.localX+60,r=n.localY+20;if(console.log(this.Option_Type),"need_water_png"==this.Option_Type){var a="type=0&tt=666";e._self=this,this.https=new HttpRes(this.httpscallback.bind(e._self)),this.https.setUrl("http://172.16.0.67:8001/future/type/change","POST","application/x-www-form-urlencoded",a),this.https.httpInit(),this.Show_option_handle("User_option","water",i,r)}else if("need_fertilize_png"==this.Option_Type){console.log("施肥");var a="type=1&tt=666";e._self=this,this.https=new HttpRes(this.httpscallback.bind(e._self)),this.https.setUrl("http://172.16.0.67:8001/future/type/change","POST","application/x-www-form-urlencoded",a),this.https.httpInit(),this.Show_option_handle("User_option2","fertilize",i,r)}else if("need_weed_png"==this.Option_Type){console.log("除草");var a="type=2&tt=666";e._self=this,this.https=new HttpRes(this.httpscallback.bind(e._self)),this.https.setUrl("http://172.16.0.67:8001/future/type/change","POST","application/x-www-form-urlencoded",a),this.https.httpInit(),this.Show_option_handle("User_option2","weed",i,r)}else if("need_take_png"==this.Option_Type){console.log("收获");var a="type=3&tt=666";e._self=this,this.https=new HttpRes(this.httpscallback.bind(e._self)),this.https.setUrl("http://172.16.0.67:8001/future/type/change","POST","application/x-www-form-urlencoded",a),this.https.httpInit(),this.Show_option_handle("User_option2","take",i,r),this.land_node.start_take_anim(),this.land_node.tipclose_handle(),this.land_node.farm_land_area.visible=!1}},e.prototype.Show_option_handle=function(t,e,n,i){var r=this,a=RES.getRes(t+"_json"),o=RES.getRes(t+"_png"),l=new egret.MovieClipDataFactory(a,o),s=new egret.MovieClip(l.generateMovieClipData(""+e));s.x=n,s.y=i,this.test_grop.addChild(s),s.gotoAndPlay(0,1),s.addEventListener(egret.Event.COMPLETE,function(t,e){r.land_node.start_cai_anim(),console.log(t.type),s.visible=!1,r.test_grop.removeChild(s),r.image.visible=!0,r.image.touchEnabled=!0,r.change_image(r.Option_Type)},this)},e.prototype.start_anim=function(){this.scale.play(0)},e.prototype.end_anim=function(){this.scale.stop()},e.prototype.change_image=function(t){this.image.source=t},e.prototype.httpscallback=function(){var t=this,e=JSON.parse(this.https.getDatas());console.log(e),4==e.num2?(console.log("res无值"),this.Option_Type=OptionType[e.num2],setTimeout(function(){t.removeChild(t.test_grop),t.image.removeEventListener(egret.TouchEvent.TOUCH_TAP,t.handle_animClick.bind(t,t.Option_Type),t)},5e3)):e?(this.Option_Type=OptionType[e.num2],this.land_node.change_Landpic(landType[e.landType]),console.log(this.Option_Type)):console.log("err")},e}(eui.Component);__reflect(control_anim.prototype,"control_anim");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function r(t){e.call(i,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),n.call(i))}var o=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},o)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var l=t.split("/");l.pop();var s=l.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(s,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(i,generateJSON.paths[t])},o)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var GameUtil=function(){function t(){}return t.getStageHeight=function(){return egret.MainContext.instance.stage.stageHeight},t.getStageWidth=function(){return egret.MainContext.instance.stage.stageWidth},t.getCenterW=function(e){return(t.getStageWidth()-e)/2},t.getCenterH=function(e){return(t.getStageHeight()-e)/2},t.createBitmapByName=function(t,e){void 0===e&&(e="png");var n=new egret.Bitmap,i=RES.getRes(t+"_"+e);return n.texture=i,n},t.createMovieClipByName=function(t,e){var n=RES.getRes(t+"_json");console.log(n);var i=RES.getRes(t+"_png"),r=new egret.MovieClipDataFactory(n,i);return new egret.MovieClip(r.generateMovieClipData(e))},t}();__reflect(GameUtil.prototype,"GameUtil");var landType;!function(t){t[t.land_0_png=0]="land_0_png",t[t.land_1_png=1]="land_1_png",t[t.land_2_png=2]="land_2_png"}(landType||(landType={}));var ScType;!function(t){t[t.ZZ_0_png=0]="ZZ_0_png",t[t.NY_0_png=1]="NY_0_png",t[t.BC_0_png=2]="BC_0_png",t[t.BC_1_png=3]="BC_1_png",t[t.DG_0_png=4]="DG_0_png",t[t.DG_1_png=5]="DG_1_png",t[t.HC_0_png=6]="HC_0_png",t[t.HC_1_png=7]="HC_1_png",t[t.JC_0_png=8]="JC_0_png",t[t.JC_1_png=9]="JC_1_png",t[t.JD_0_png=10]="JD_0_png",t[t.JD_1_png=11]="JD_1_png",t[t.JM_0_png=12]="JM_0_png",t[t.JM_1_png=13]="JM_1_png",t[t.JX_0_png=14]="JX_0_png",t[t.JX_1_png=15]="JX_1_png",t[t.KX_0_png=16]="KX_0_png",t[t.KX_1_png=17]="KX_1_png",t[t.LB_0_png=18]="LB_0_png",t[t.LB_1_png=19]="LB_1_png",t[t.QC_0_png=20]="QC_0_png",t[t.QC_1_png=21]="QC_1_png",t[t.QK_0_png=22]="QK_0_png",t[t.QK_1_png=23]="QK_1_png",t[t.QZ_0_png=24]="QZ_0_png",t[t.QZ_1_png=25]="QZ_1_png",t[t.SC_0_png=26]="SC_0_png",t[t.SC_1_png=27]="SC_1_png",t[t.TD_0_png=28]="TD_0_png",t[t.TD_1_png=29]="TD_1_png",t[t.TH_0_png=30]="TH_0_png",t[t.TH_1_png=31]="TH_1_png",t[t.WJ_0_png=32]="WJ_0_png",t[t.WJ_1_png=33]="WJ_1_png",t[t.XH_0_png=34]="XH_0_png",t[t.XH_1_png=35]="XH_1_png"}(ScType||(ScType={}));var OptionType;!function(t){t[t.need_water_png=0]="need_water_png",t[t.need_fertilize_png=1]="need_fertilize_png",t[t.need_weed_png=2]="need_weed_png",t[t.need_take_png=3]="need_take_png"}(OptionType||(OptionType={}));var HttpRes=function(t){function e(e){var n=t.call(this)||this;return n.callback=null,n.datas=null,n.httpUrl="",n.httpData="",n.callback=e,n}return __extends(e,t),e.prototype.setUrl=function(t,e,n,i){this.httpUrl=t,this.httpData=i,this.httpType=e||"GET",this.httpStype=n||"application/x-www-form-urlencoded"},e.prototype.httpInit=function(){this.responseType=egret.HttpResponseType.TEXT,"GET"==this.httpType?this.open(this.httpUrl,egret.HttpMethod.GET):"POST"==this.httpType?this.open(this.httpUrl,egret.HttpMethod.POST):this.open(this.httpUrl,egret.HttpMethod.GET),this.setRequestHeader("Content-Type",this.httpStype),this.send(this.httpData),this.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this),this.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this),this.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this)},e.prototype.onGetComplete=function(){console.log("请求成功!"),this.datas=this.response,null!=this.callback&&this.callback()},e.prototype.onGetIOError=function(){console.log("请求失败!")},e.prototype.onGetProgress=function(){console.log("请求之中!")},e.prototype.getDatas=function(){return this.datas},e}(egret.HttpRequest);__reflect(HttpRes.prototype,"HttpRes");