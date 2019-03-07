window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/myskins/anim.exml'] = window.anim = (function (_super) {
	__extends(anim, _super);
	function anim() {
		_super.call(this);
		this.skinParts = ["scale","image","test_grop"];
		
		this.height = 138;
		this.width = 98;
		this.scale_i();
		this.elementsContent = [this.test_grop_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [20.6],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [35],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [13.5],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [26.5],[],this._Object2,"y");
	}
	var _proto = anim.prototype;

	_proto.scale_i = function () {
		var t = new egret.tween.TweenGroup();
		this.scale = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "backIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quadInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.test_grop_i = function () {
		var t = new eui.Group();
		this.test_grop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 2;
		t.height = 136;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 98;
		t.x = 0;
		t.y = 2;
		t.elementsContent = [this.image_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.height = 85;
		t.source = "need_water_png";
		t.width = 70;
		t.x = 14;
		t.y = 27.65;
		return t;
	};
	return anim;
})(eui.Skin);generateEUI.paths['resource/myskins/farm_land.exml'] = window.farm_land = (function (_super) {
	__extends(farm_land, _super);
	function farm_land() {
		_super.call(this);
		this.skinParts = ["cai_anim","take","farm_land_area","farm_land_normal","farm_land_cai","farm_sc_tip","farm_sc_name","farm_sc_take","farm_sc_area","farm_is_tip","farm_null_tip","farm_tip_manage","farm_option_bg","option_type_complete","farm_option_complete"];
		
		this.height = 268;
		this.width = 340;
		this.cai_anim_i();
		this.take_i();
		this.elementsContent = [this.farm_land_area_i(),this.farm_land_normal_i(),this.farm_land_cai_i(),this.farm_tip_manage_i(),this.farm_option_complete_i()];
		
		eui.Binding.$bindProperties(this, ["farm_land_cai"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [0.88],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [219.12],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0.96],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [219.04],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [1.11],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [218.89],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [219],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["farm_land_cai"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [202],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [188],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [168],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [148],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [173],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [128],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, [0.85],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [108],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, [0.65],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [88],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [68],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, [0.35],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [48],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [28],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [8],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.farm_land_area,"text");
	}
	var _proto = farm_land.prototype;

	_proto.cai_anim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.cai_anim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.take_i = function () {
		var t = new egret.tween.TweenGroup();
		this.take = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i(),this._To16_i(),this._To17_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.ease = "elasticIn";
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto.farm_land_area_i = function () {
		var t = new eui.Label();
		this.farm_land_area = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.rotation = 29.28;
		t.width = 81.47;
		t.x = 31.19;
		t.y = 209;
		return t;
	};
	_proto.farm_land_normal_i = function () {
		var t = new eui.Image();
		this.farm_land_normal = t;
		t.anchorOffsetX = 1.32;
		t.anchorOffsetY = 0.23;
		t.bottom = 0;
		t.height = 185;
		t.left = 0;
		t.right = 0;
		t.source = "land_1_png";
		t.touchEnabled = true;
		return t;
	};
	_proto.farm_land_cai_i = function () {
		var t = new eui.Image();
		this.farm_land_cai = t;
		t.anchorOffsetX = 155;
		t.anchorOffsetY = 219;
		t.height = 220;
		t.pixelHitTest = true;
		t.source = "DG_1_png";
		t.touchEnabled = false;
		t.width = 310.49;
		t.x = 170;
		t.y = 219;
		return t;
	};
	_proto.farm_tip_manage_i = function () {
		var t = new eui.Group();
		this.farm_tip_manage = t;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.visible = false;
		t.x = 40;
		t.y = -0.38;
		t.elementsContent = [this.farm_sc_tip_i(),this.farm_is_tip_i(),this.farm_null_tip_i()];
		return t;
	};
	_proto.farm_sc_tip_i = function () {
		var t = new eui.Image();
		this.farm_sc_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 114.76;
		t.source = "land_tip_png";
		t.width = 260.12;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.farm_is_tip_i = function () {
		var t = new eui.Group();
		this.farm_is_tip = t;
		t.x = 35.5;
		t.y = 11.38;
		t.elementsContent = [this.farm_sc_name_i(),this.farm_sc_take_i(),this.farm_sc_area_i()];
		return t;
	};
	_proto.farm_sc_name_i = function () {
		var t = new eui.Label();
		this.farm_sc_name = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "KaiTi";
		t.multiline = false;
		t.size = 30;
		t.text = "萝卜";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 28.5;
		t.y = 0;
		return t;
	};
	_proto.farm_sc_take_i = function () {
		var t = new eui.Label();
		this.farm_sc_take = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "KaiTi";
		t.multiline = false;
		t.size = 20;
		t.text = "还有1小时收获";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 157;
		t.x = 0;
		t.y = 36;
		return t;
	};
	_proto.farm_sc_area_i = function () {
		var t = new eui.Label();
		this.farm_sc_area = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 21.49;
		t.multiline = false;
		t.rotation = 0.34;
		t.size = 20;
		t.text = "99+㎡";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 133.99;
		t.x = 11.07;
		t.y = 66;
		return t;
	};
	_proto.farm_null_tip_i = function () {
		var t = new eui.Label();
		this.farm_null_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.size = 22;
		t.text = "当前这块地可没有蔬菜哦！快去蔬菜包选菜吧！";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 199;
		t.x = 13.5;
		t.y = 15.38;
		return t;
	};
	_proto.farm_option_complete_i = function () {
		var t = new eui.Group();
		this.farm_option_complete = t;
		t.anchorOffsetX = -1.97;
		t.anchorOffsetY = 0.73;
		t.height = 90;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 243;
		t.x = 41.03;
		t.y = -42.27;
		t.elementsContent = [this.farm_option_bg_i(),this.option_type_complete_i()];
		return t;
	};
	_proto.farm_option_bg_i = function () {
		var t = new eui.Image();
		this.farm_option_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "tip_board_png";
		t.width = 237.03;
		t.x = 3;
		t.y = -2;
		return t;
	};
	_proto.option_type_complete_i = function () {
		var t = new eui.Label();
		this.option_type_complete = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.text = "{data}成功";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.width = 192;
		t.x = 26;
		t.y = 26;
		return t;
	};
	return farm_land;
})(eui.Skin);generateEUI.paths['resource/myskins/farm_start.exml'] = window.farm_start = (function (_super) {
	__extends(farm_start, _super);
	function farm_start() {
		_super.call(this);
		this.skinParts = ["alert_tip","farm_land_bg","farm_group2_set","farm_land_arrow","farm_land_dog","farm_land_light","alert_bg","alert_icon","alert_manage","farm_land_set","farm_area","farm_name","farm_set_group","farm_land1","farm_land2","farm_land3","farm_land4","farm_land5","farm_land6","farm_land_position","farm_land_group","farm_land0","farm_land7","farm_land8","farm_land9","farm_land10","farm_land11","farm_land_position2","farm_normal","group2_label_1","group2_label_2","group2_label_3","group2_label_4","farm_less_six","farm_land_group2","farm_chick0","farm_chick1","farm_chick2","farm_chick3","farm_chick4","farm_animal","farm_land_animal","viewportGroup","scroller","farm_seed_tip","farm_seed_manage"];
		
		this.height = 1500;
		this.width = 2250;
		this.alert_tip_i();
		this.elementsContent = [this.scroller_i(),this.farm_seed_manage_i()];
		
		eui.Binding.$bindProperties(this, ["alert_icon"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.95],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [0.77],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.77],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [39.87],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [39.92],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [12],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [39.72],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [39.73],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [25.59],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [0.73],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.73],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [39.75],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [39.97],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.farm_area,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.group2_label_1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.group2_label_2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.group2_label_3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.group2_label_4,"text");
	}
	var _proto = farm_start.prototype;

	_proto.alert_tip_i = function () {
		var t = new egret.tween.TweenGroup();
		this.alert_tip = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.viewport = this.viewportGroup_i();
		return t;
	};
	_proto.viewportGroup_i = function () {
		var t = new eui.Group();
		this.viewportGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.width = 750;
		t.y = 176;
		t.elementsContent = [this.farm_land_bg_i(),this.farm_group2_set_i(),this.farm_land_arrow_i(),this.farm_land_dog_i(),this.farm_land_light_i(),this.alert_manage_i(),this.farm_set_group_i(),this.farm_land_group_i(),this.farm_land_group2_i(),this.farm_land_animal_i()];
		return t;
	};
	_proto.farm_land_bg_i = function () {
		var t = new eui.Image();
		this.farm_land_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1500.31;
		t.source = "farm_land_bg_jpg";
		t.width = 2250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.farm_group2_set_i = function () {
		var t = new eui.Image();
		this.farm_group2_set = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 228.05;
		t.source = "farm_name2_png";
		t.width = 123.34;
		t.x = 794.64;
		t.y = 312.83;
		return t;
	};
	_proto.farm_land_arrow_i = function () {
		var t = new eui.Group();
		this.farm_land_arrow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.82;
		t.width = 90.92;
		t.x = 833.33;
		t.y = 225.77;
		return t;
	};
	_proto.farm_land_dog_i = function () {
		var t = new eui.Group();
		this.farm_land_dog = t;
		t.anchorOffsetX = 26.87;
		t.anchorOffsetY = 26.06;
		t.height = 52.62;
		t.width = 50.15;
		t.x = 658.28;
		t.y = 498.44;
		return t;
	};
	_proto.farm_land_light_i = function () {
		var t = new eui.Group();
		this.farm_land_light = t;
		t.height = 200;
		t.rotation = 3.07;
		t.width = 200;
		t.x = 922.99;
		t.y = -77.09;
		return t;
	};
	_proto.alert_manage_i = function () {
		var t = new eui.Group();
		this.alert_manage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78.79;
		t.width = 78.79;
		t.x = 274;
		t.y = 142.69;
		t.elementsContent = [this.alert_bg_i(),this.alert_icon_i()];
		return t;
	};
	_proto.alert_bg_i = function () {
		var t = new eui.Image();
		this.alert_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78.79;
		t.source = "alert_bg_png";
		t.width = 78.79;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.alert_icon_i = function () {
		var t = new eui.Image();
		this.alert_icon = t;
		t.anchorOffsetX = 10.5;
		t.anchorOffsetY = 24;
		t.height = 46.67;
		t.source = "alert_tip_png";
		t.width = 19.71;
		t.x = 40.03;
		t.y = 40.05;
		return t;
	};
	_proto.farm_set_group_i = function () {
		var t = new eui.Group();
		this.farm_set_group = t;
		t.x = 21.56;
		t.y = 294.85;
		t.elementsContent = [this.farm_land_set_i(),this.farm_area_i(),this.farm_name_i()];
		return t;
	};
	_proto.farm_land_set_i = function () {
		var t = new eui.Image();
		this.farm_land_set = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 202.99;
		t.source = "farm_name_png";
		t.touchEnabled = true;
		t.width = 146.3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.farm_area_i = function () {
		var t = new eui.Label();
		this.farm_area = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.92;
		t.rotation = 353.29;
		t.touchEnabled = false;
		t.width = 86.71;
		t.x = 19.43;
		t.y = 88.22;
		return t;
	};
	_proto.farm_name_i = function () {
		var t = new eui.Label();
		this.farm_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.height = 34.97;
		t.multiline = false;
		t.rotation = 353.97;
		t.scaleX = 1;
		t.size = 20;
		t.text = "尤溪尤溪农场";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 125.82;
		t.x = 9.05;
		t.y = 44.8;
		return t;
	};
	_proto.farm_land_group_i = function () {
		var t = new eui.Group();
		this.farm_land_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 878;
		t.width = 700;
		t.x = 0;
		t.y = 456;
		t.elementsContent = [this.farm_land_position_i()];
		return t;
	};
	_proto.farm_land_position_i = function () {
		var t = new eui.Group();
		this.farm_land_position = t;
		t.anchorOffsetY = 0;
		t.height = 906;
		t.visible = false;
		t.x = 49.28;
		t.y = -30;
		t.elementsContent = [this.farm_land1_i(),this.farm_land2_i(),this.farm_land3_i(),this.farm_land4_i(),this.farm_land5_i(),this.farm_land6_i(),this._control_anim1_i()];
		return t;
	};
	_proto.farm_land1_i = function () {
		var t = new eui.Component();
		this.farm_land1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 41;
		t.y = 1;
		return t;
	};
	_proto.farm_land2_i = function () {
		var t = new eui.Component();
		this.farm_land2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 257.38;
		t.y = 112;
		return t;
	};
	_proto.farm_land3_i = function () {
		var t = new eui.Component();
		this.farm_land3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 8.72;
		t.y = 209;
		return t;
	};
	_proto.farm_land4_i = function () {
		var t = new eui.Component();
		this.farm_land4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 246.72;
		t.y = 321;
		return t;
	};
	_proto.farm_land5_i = function () {
		var t = new eui.Component();
		this.farm_land5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 0;
		t.y = 423;
		return t;
	};
	_proto.farm_land6_i = function () {
		var t = new eui.Component();
		this.farm_land6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 241.38;
		t.y = 538;
		return t;
	};
	_proto._control_anim1_i = function () {
		var t = new control_anim();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.skinName = "anim";
		t.width = 98;
		t.x = 163;
		t.y = 20;
		return t;
	};
	_proto.farm_land_group2_i = function () {
		var t = new eui.Group();
		this.farm_land_group2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 878;
		t.width = 700;
		t.x = 764.09;
		t.elementsContent = [this.farm_land_position2_i(),this.farm_less_six_i()];
		return t;
	};
	_proto.farm_land_position2_i = function () {
		var t = new eui.Group();
		this.farm_land_position2 = t;
		t.visible = false;
		t.x = 45.28;
		t.y = 2;
		t.elementsContent = [this.farm_land0_i(),this.farm_land7_i(),this.farm_land8_i(),this.farm_land9_i(),this.farm_land10_i(),this.farm_land11_i()];
		return t;
	};
	_proto.farm_land0_i = function () {
		var t = new eui.Component();
		this.farm_land0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 31.38;
		t.y = 0;
		return t;
	};
	_proto.farm_land7_i = function () {
		var t = new eui.Component();
		this.farm_land7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 257.38;
		t.y = 112;
		return t;
	};
	_proto.farm_land8_i = function () {
		var t = new eui.Component();
		this.farm_land8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 8.72;
		t.y = 209;
		return t;
	};
	_proto.farm_land9_i = function () {
		var t = new eui.Component();
		this.farm_land9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 246.72;
		t.y = 321;
		return t;
	};
	_proto.farm_land10_i = function () {
		var t = new eui.Component();
		this.farm_land10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 0;
		t.y = 423;
		return t;
	};
	_proto.farm_land11_i = function () {
		var t = new eui.Component();
		this.farm_land11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.skinName = "farm_land";
		t.width = 340;
		t.x = 241.38;
		t.y = 538;
		return t;
	};
	_proto.farm_less_six_i = function () {
		var t = new eui.Group();
		this.farm_less_six = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.x = 51.79;
		t.y = 93.97;
		t.elementsContent = [this.farm_normal_i(),this.group2_label_1_i(),this.group2_label_2_i(),this.group2_label_3_i(),this.group2_label_4_i()];
		return t;
	};
	_proto.farm_normal_i = function () {
		var t = new eui.Image();
		this.farm_normal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 766;
		t.source = "land_group2_png";
		t.width = 555.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group2_label_1_i = function () {
		var t = new eui.Label();
		this.group2_label_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 70;
		t.italic = true;
		t.rotation = 335.24;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "justify";
		t.width = 66.86;
		t.x = 475.11;
		t.y = 162.12;
		return t;
	};
	_proto.group2_label_2_i = function () {
		var t = new eui.Label();
		this.group2_label_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 70;
		t.italic = true;
		t.rotation = 333.34;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 66.86;
		t.x = 475.11;
		t.y = 327.25;
		return t;
	};
	_proto.group2_label_3_i = function () {
		var t = new eui.Label();
		this.group2_label_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 70;
		t.italic = true;
		t.rotation = 335.24;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 66.86;
		t.x = 475.11;
		t.y = 485.94;
		return t;
	};
	_proto.group2_label_4_i = function () {
		var t = new eui.Label();
		this.group2_label_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 70;
		t.italic = true;
		t.rotation = 335.24;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 66.86;
		t.x = 475.11;
		t.y = 648.47;
		return t;
	};
	_proto.farm_land_animal_i = function () {
		var t = new eui.Group();
		this.farm_land_animal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 698.48;
		t.width = 539.39;
		t.x = 1572.3;
		t.y = 634.73;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.farm_animal_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.rotation = 360;
		t.source = "farm_animal6_png";
		t.width = 76.48;
		t.x = 289.19;
		t.y = 455.66;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.rotation = 360;
		t.source = "farm_animal6_png";
		t.width = 76.48;
		t.x = 345.62;
		t.y = 472.58;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.48;
		t.source = "farm_animal7_png";
		t.width = 75.1;
		t.x = 435.09;
		t.y = 373.18;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.48;
		t.source = "farm_animal7_png";
		t.width = 75.1;
		t.x = 507.21;
		t.y = 375.58;
		return t;
	};
	_proto.farm_animal_i = function () {
		var t = new eui.Group();
		this.farm_animal = t;
		t.x = -22.52;
		t.y = 54.56;
		t.elementsContent = [this.farm_chick0_i(),this.farm_chick1_i(),this.farm_chick2_i(),this.farm_chick3_i(),this.farm_chick4_i()];
		return t;
	};
	_proto.farm_chick0_i = function () {
		var t = new eui.Group();
		this.farm_chick0 = t;
		t.anchorOffsetX = 45.62;
		t.anchorOffsetY = 43.18;
		t.height = 86.36;
		t.width = 91.25;
		t.x = 131.99;
		t.y = 157.93;
		return t;
	};
	_proto.farm_chick1_i = function () {
		var t = new eui.Group();
		this.farm_chick1 = t;
		t.anchorOffsetX = 45.62;
		t.anchorOffsetY = 43.18;
		t.height = 86.36;
		t.width = 91.25;
		t.x = 153.87;
		t.y = 600.74;
		return t;
	};
	_proto.farm_chick2_i = function () {
		var t = new eui.Group();
		this.farm_chick2 = t;
		t.anchorOffsetX = 45.62;
		t.anchorOffsetY = 43.18;
		t.height = 86.36;
		t.width = 91.25;
		t.x = 342.56;
		t.y = 410.18;
		return t;
	};
	_proto.farm_chick3_i = function () {
		var t = new eui.Group();
		this.farm_chick3 = t;
		t.anchorOffsetX = 45.62;
		t.anchorOffsetY = 43.18;
		t.height = 86.36;
		t.width = 91.25;
		t.x = 413.18;
		t.y = 167.71;
		return t;
	};
	_proto.farm_chick4_i = function () {
		var t = new eui.Group();
		this.farm_chick4 = t;
		t.anchorOffsetX = 45.62;
		t.anchorOffsetY = 43.18;
		t.height = 86.36;
		t.width = 91.25;
		t.x = 292.21;
		t.y = 275.44;
		return t;
	};
	_proto.farm_seed_manage_i = function () {
		var t = new eui.Group();
		this.farm_seed_manage = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 148.79;
		t.y = 529.73;
		t.elementsContent = [this._Image5_i(),this.farm_seed_tip_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "land_tip_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.farm_seed_tip_i = function () {
		var t = new eui.Label();
		this.farm_seed_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.text = "播种成功线下24小时内为您播种";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 322;
		t.x = 27.74;
		t.y = 40;
		return t;
	};
	return farm_start;
})(eui.Skin);