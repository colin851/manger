$(function(){
	
//加载html
	$(".leftpanel").load("leftpanel.html");
	$(".contentpanel").load("welcome.html");
	$(".leftpanel").on("click",".page-index",function(){
		$(".contentpanel").load("welcome.html");
		$(".pageheader h2").html("首页");
		$(".childen-menu").slideUp();
		$(".treeview").removeClass("active-tree");
		$(".treeview-menu").removeClass("active-childen-tree");
		$(".icon-more").html("+");
	});
	
	
//	左侧主菜单
	$(".leftpanel").on("click",".treeview",function(e){
		e.stopPropagation();
		var that = $(this);
		var url = that.attr("data-url");
		if(url){                            //不存在子菜单
			$(".contentpanel").load(url);
			$(".treeview").removeClass('active-tree');
			that.addClass('active-tree');
			var tittle = that.find(".menu-name").html();
			$(".pageheader h2").html(tittle);
			$(".childen-menu").slideUp();
			$(".treeview-menu").removeClass("active-childen-tree");
			$(".icon-more").html("+");
		}else{                            //存在子菜单
			$(".treeview").removeClass('active-tree');
			that.addClass('active-tree');
			var child = that.find(".childen-menu");
			if(child.css("display") == "none"){
				$(".childen-menu").slideUp()
				$(".icon-more").html("+");
				child.slideDown();
				that.find(".icon-more").html("-");	
			}else{
				child.slideUp();
				that.find(".icon-more").html("+");
				
			}
		}
	});
	
	
//	左侧子菜单	
	$(".leftpanel").on("click",".treeview-menu",function(e){
		e.stopPropagation();
		var that = $(this);
		var url = that.attr("data-url");
		var tittle = that.find(".menu-name").html();
		$(".pageheader h2").html(tittle);
		$(".contentpanel").load(url);
		$(".treeview-menu").removeClass("active-childen-tree");
		that.addClass('active-childen-tree');
		
	})
	
	
//退出登录	
	$(".user-menu").on("click",function(e){
		e.stopPropagation()
		if($(this).hasClass("menu-show")){
			$(".menu").hide();
			$(this).removeClass("menu-show");
		}else{
			$(".menu").show();
			$(this).addClass("menu-show");
		}
	});
	$("body").on("click",function(e){
		e.stopPropagation();
		$(".menu").hide();
		$(".user-menu").removeClass("menu-show");
	});
	
	
//	tab切换
	$(".contentpanel").on("click",".nav-tabs-item",function(){
//		alert("ss")
		var current = $(this).attr("data-tab");
		$(".nav-tabs-item").removeClass("active");
		$(this).addClass("active");
		$(".tab-pane").removeClass("active");
		$(current).addClass("active");
	})
	
	
	
	
});
