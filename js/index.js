$(function(){
	var mySwiper1 = new Swiper('#swiper1',{
	    speed:500,
	    autoplay: 2000,
	    loop:true,
	});
	var mySwiper2 = new Swiper('#swiper2',{
	    pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        autoplay:2000,
        loop:true,
        paginationClickable: true,
	});
	var mySwiper3 = new Swiper('#swiper3',{
	    speed:500,
	    autoplay:2000,
	    loop:true,
	    pagination : '.swiper-pagination',
	});
	var mySwiper4 = new Swiper('#swiper4',{
	    speed:500,
	    autoplay:2000,
	    loop:true,
	    pagination : '.swiper-pagination',
	});
	var mySwiper5 = new Swiper('#swiper5',{
	   	speed:500,
		freeMode : true,
		slidesPerView : 'auto',
		resistant:true,
		resistanceRatio:0
	});
	//给三角形赋值边宽
	getTriangleWidth();
	window.onresize = function() {
		getTriangleWidth();
	}
	function getTriangleWidth() {
		var width = $(window).width()
		$('.triangle_down').css('border-left-width', width);
		$('.triangle_up').css('border-right-width', width);
	}
	//旋转动画
	$('.service_cont li a span').bind('click',function(){
		$(this).addClass('on');
		deleteOn();
	})
	function deleteOn(){
		setTimeout(function(){
			$('.service_cont li a span').removeClass('on')
		},2000)
	}
	//侧边导航
	var top=0;
	var mark=1;
	$(".slideBar").click(function(e) {
		if (mark == 1) { //把他展开
			top=$(window).scrollTop();
			$('body').css({'top':-top,'position':'fixed'});
			$('.slide_shade').fadeIn(500);
			$(this).children('a').addClass("close");
			$(".divBoxWrap").animate({"right": "67%"}, 500);
			$(".slideBar").animate({"right": "66.5%"}, 500);
			$(".sideMenu").animate({"right": "0"}, 500);
			e.stopPropagation(); //阻止冒泡
			mark = 2;
		} else if (mark == 2) { //收缩
			$('body').css({'top':'0','position':'relative'});
			$(window).scrollTop(top);
			$('.slide_shade').fadeOut(500);
			$(this).children('a').removeClass("close");
			$(".divBoxWrap").animate({"right": "0"}, 500);
			$(".slideBar").animate({"right": "0"}, 500);
			$(".sideMenu").animate({"right": "-67%"}, 500);
			mark = 1;
		}
	});
	$('.slide_shade').on('click',function(){
		$('body').css({'top':'0','position':'relative'});
		$(window).scrollTop(top);
		$('.slide_shade').fadeOut(500);
		$('.slideBar').children('a').removeClass("close");
		$(".divBoxWrap").animate({"right": "0"}, 500);
		$(".slideBar").animate({"right": "0"}, 500);
		$(".sideMenu").animate({"right": "-67%"}, 500);
		mark = 1;
	})
	//点击微信按钮，弹出二维码弹层
	$('.weixin_icon').on('click',function(){
		top=$(window).scrollTop();
		$('body').css({'top':-top,'position':'fixed'});
		$('.layer').fadeIn(200);
		$('.layer_cont').fadeIn(200);
	})
	$('#sure_btn').on('click',function(){
		$('body').css({'top':'0','position':'relative'});
		$(window).scrollTop(top);
		$('.layer').fadeOut(200);
		$('.layer_cont').fadeOut(200);
	})
	//联系我们信息发送成功
	$('#send_message').on('click',function(){
		top=$(window).scrollTop();
		$('body').css({'top':-top,'position':'fixed'});
		$('.layer').fadeIn(200);
		$('.message_prompt').fadeIn(200);
		delayFadeOut();
	});
	$('#send_message').on('touchstart',function(){
		$(this).css('background','rgba(255,255,255,0.1)');
	});
	$('#send_message').on('touchend',function(){
		$(this).css('background','');
	});
	$('.contact_first div').click(function(event) {
		var evt = event || window.event;
		$(this).css('box-shadow', '0px 0px 1px #fff inset');
		evt.stopPropagation();
	});
	$(document).click(function() {
		$('.contact_first div').css('box-shadow', 'none');
	});
	//延迟隐藏
	function delayFadeOut(){
		setTimeout(function(){
			$('.layer').fadeOut(200);
			$('.message_prompt').fadeOut(200);
			//刷新页面
			reloadPage();
		},1500)
	}
	function reloadPage(){
		setTimeout(function(){
			window.location.reload();
			$(window).scrollTop(0);
		},300)
	}
});
