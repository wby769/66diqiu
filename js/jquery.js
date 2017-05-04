// 首页
$(function(){
	// 系统登录
	$(".login").mouseover(function () {
        $(this).find(".system-item").show();
    });
    $(".login").mouseleave(function () {
        $(this).find(".system-item").hide();
    });


	//解决方案效果
	$(".project-item").hover(function(){
		$(this).find("img").toggle();
	},
	function(){
		$(this).find("img").toggle();
	});
	//我们坚持
	$(".userWrap-title").find("li").each(function(index) {
		$(this).mouseover(function() {
			$(this).addClass('on').siblings().removeClass('on');
			$(".userWrap-img").find("img").hide().eq(index).show();
		});
	});
	// 公司产品
	$(".list").find("li").mouseover(function() {
		$(this).addClass('in').siblings().removeClass('in');
		$(".cut-content").find("div").find("h1").html($(this).find(".tt").text());
		$(".cut-content").find("div").find("p").html($(this).find(".hid").text());
	});

}); 


// 新闻资讯页
$(function(){
	// 企业新闻
	$(".news-content-list").hover(function(){
		 $(this).find(".news-t").find("img").toggle();
	},
	function(){
		$(this).find(".news-t").find("img").toggle();
	});

	$(".other-box").hover(function(){
		$(this).find(".other-date").find("img").toggle();
	},
	function(){
		$(this).find(".other-date").find("img").toggle();
	});


	$(".news-title").find("span").click(function(){
		$(this).addClass('newsActive').siblings().removeClass('newsActive');
		$(".news-content").toggle();
	})
});



