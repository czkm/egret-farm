// TypeScript file
//全局枚举
//土地状态 有什么蔬菜
var landType;
(function (landType) {
    landType[landType["luobo_0_png"] = 0] = "luobo_0_png";
    landType[landType["luobo_1_png"] = 1] = "luobo_1_png";
    landType[landType["bocai_0_png"] = 2] = "bocai_0_png";
    landType[landType["bocai_1_png"] = 3] = "bocai_1_png";
    landType[landType["digua_0_png"] = 4] = "digua_0_png";
    landType[landType["digua_1_png"] = 5] = "digua_1_png";
})(landType || (landType = {}));
;
//操作状态
var ScType;
(function (ScType) {
    ScType[ScType["need_water_png"] = 0] = "need_water_png";
    ScType[ScType["need_fertilize_png"] = 1] = "need_fertilize_png";
    ScType[ScType["need_weed_png"] = 2] = "need_weed_png";
})(ScType || (ScType = {}));
;
