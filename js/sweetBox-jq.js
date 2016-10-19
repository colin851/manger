var warnBox = (function ($) {

    var defaults = {
        winWidth: "",
        tittle: "",
        txt: "",
        iSshowBtn: true,
        btnOne: false,
        singleBtnText: "",
        shadeOff: false,
        iSshowClose: false,
        confirmBtnText: "确定",
        cancelBtnText: "取消",
        callBack: function () {

        }
    };

    function warnBox(settiing) {
        var opts = $.extend({}, defaults, settiing);
        var sweetBox = $('<div class="sweetBox" ></div>').appendTo('body');
        //		var shade = $('<div class="sweet-shade"></div>').appendTo(sweetBox);
        var sweet_warp = $('<div class="sweet-warp" style="width:' + opts.winWidth + '"></div>').appendTo(sweetBox);
        var sweet_content = $('<div class="sweet-content"></div>').appendTo(sweet_warp);
        var sweet_close;
        var btn_group;
        //		sweetBox.on("touchmove",function(e){
        //			return false;
        //		});
        sweet_warp.on("click", function (e) {
            e.stopPropagation();
        });

        if (opts.iSshowClose) {
            sweet_close = $('<p class="sweet-close"><i></i></p>').appendTo(sweet_content);
        }
        if (sweet_close) {
            //关闭按钮
            sweet_close.on("click", function () {
                sweetBox.removeClass("box-show");
                setTimeout(function () {
                    sweetBox.remove();
                }, 400);
            })

        }
        if (opts.tittle !== "") {
            var sweet_tittle = $('<span class="sweet-tittle">' + opts.tittle + '</span>').appendTo(sweet_content);
        }
        var sweet_text = $('<div class="sweet-text">' + opts.txt + '</div>').appendTo(sweet_content);
        if (opts.iSshowBtn) {
            if (!opts.btnOne) {
                btn_group = $('<div class="sweet-btn-group" style="text-align:center"></div>').appendTo(sweet_content);
                var sweet_confirm = $('<a style="margin-right:20px" class="btn btn-primary" type="button" id="" >' + opts.confirmBtnText + '</a>').appendTo(btn_group);
                var sweet_cancel = $('<a class="btn btn-default" type="button" id="" >' + opts.cancelBtnText + '</a>').appendTo(btn_group);
                sweet_cancel.on("click", function () {
                    sweetBox.removeClass("box-show");
                    setTimeout(function () {
                        sweetBox.remove();
                    }, 400)
                });
                sweet_confirm.on("click", function () {
                    sweetBox.removeClass("box-show");
                    opts.callBack();
                    setTimeout(function () {
                        sweetBox.remove();
                    }, 400)
                });
            } else {
                btn_single = $('<div class="btn_single"></div>').appendTo(sweet_warp);
                var single_confirm = $('<input class="single-confirm" type="button" id="" value="' + opts.singleBtnText + '" />').appendTo(btn_single);
                sweet_warp.css("padding-bottom", "44px");
                single_confirm.on("click", function () {
                    sweetBox.removeClass("box-show");
                    opts.callBack();
                    setTimeout(function () {
                        sweetBox.remove();
                    }, 400)
                });
            }
        }
        if (opts.shadeOff) {
            sweetBox.on("click", function (e) {
                e.stopPropagation();
                sweetBox.removeClass("box-show");
                setTimeout(function () {
                    sweetBox.remove();
                }, 400)
            });
        }
        var $img = $(".sweet-warp img").length;
        if ($img) {
            $(".sweet-warp img").on("load", function () {
                setTimeout(function () {
                    sweetBox.addClass("box-show");
                }, 10)
            });
        } else {
            setTimeout(function () {
                sweetBox.addClass("box-show");
            }, 10)
        }
        //		alert($img);

        //		sweetBox.addClass("box-show");
    }
    return warnBox;
}(jQuery))
