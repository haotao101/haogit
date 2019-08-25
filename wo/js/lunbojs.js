$(document).ready(function () {
    var i = 0;
    var clone = $(".dad .img li").first().clone();//克隆第一张图片
    $(".dad .img").append(clone);                //复制到列表最后
    var size = $(".dad .img li").size();         //返回匹配元素的数量
    /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
    for (var j = 0; j < size-1; j++) {
        $(".dad .num").append("<li></li>");
    }
    $(".dad .num li").first().addClass("on");
    /*自动轮播*/
    // var t = setInterval(function () {
    //     i++;
    //     move();
    // },3000);
	//滑动
	$(".dad").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		//左滑
		if ( X > 0 ) {
			i--;
			move();
		}
		//右滑
		else if ( X < 0 ) {
			i++;
			move(); 
		}
	});
	
    /*移动事件*/
    function move() {
        if (i == size) {
            $(".dad .img").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {
            $(".dad .img").css({ left: (-(size - 1) * 90)+'rem' });
            i = size - 2;
        }
        $(".dad .img").stop().animate({ left: (-i * 90)+'rem' }, 660);
        if (i == size - 1) {
            $(".dad .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".dad .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
	
	//第二张
	var i1 = 0;
	var clone1 = $(".dad1 .img1 li").first().clone();//克隆第一张图片
	$(".dad1 .img1").append(clone1);                //复制到列表最后
	var size1 = $(".dad1 .img1 li").size();         //返回匹配元素的数量
	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j1 = 0; j1 < size1-1; j1++) {
	    $(".dad1 .num1").append("<li></li>");
	}
	$(".dad1 .num1 li").first().addClass("on");
	/*自动轮播*/
	// var t = setInterval(function () {
	//     i++;
	//     move();
	// },3000);
	//滑动
	$(".dad1").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX1 = e.originalEvent.changedTouches[0].pageX,
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad1").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX1 = e.originalEvent.changedTouches[0].pageX,
		moveEndY1 = e.originalEvent.changedTouches[0].pageY,
		X1 = moveEndX1 - startX1,
		Y1 = moveEndY1 - startY1;
		//左滑
		if ( X1 > 0 ) {
			i1--;
			move1();
		}
		//右滑
		else if ( X1 < 0 ) {
			i1++;
			move1(); 
		}
	});
	
	/*移动事件*/
	function move1() {
	    if (i1 == size1) {
	        $(".dad1 .img1").css({ left: 0 });
	        i1 = 1;
	    }
	    if (i1 == -1) {
	        $(".dad1 .img1").css({ left: (-(size1 - 1) * 90)+'rem' });
	        i1 = size1 - 2;
	    }
	    $(".dad1 .img1").stop().animate({ left: (-i1 * 90)+'rem' }, 660);
	    if (i1 == size1 - 1) {
	        $(".dad1 .num1 li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".dad1 .num1 li").eq(i1).addClass("on").siblings().removeClass("on");
	    }
	}
	
	//第三张
	var i2 = 0;
	var clone2 = $(".dad2 .img2 li").first().clone();//克隆第一张图片
	$(".dad2 .img2").append(clone2);                //复制到列表最后
	var size2 = $(".dad2 .img2 li").size();         //返回匹配元素的数量
	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j1 = 0; j1 < size2-1; j1++) {
	    $(".dad2 .num2").append("<li></li>");
	}
	$(".dad2 .num2 li").first().addClass("on");
	/*自动轮播*/
	// var t = setInterval(function () {
	//     i++;
	//     move();
	// },3000);
	//滑动
	$(".dad2").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX1 = e.originalEvent.changedTouches[0].pageX,
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad2").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX1 = e.originalEvent.changedTouches[0].pageX,
		moveEndY1 = e.originalEvent.changedTouches[0].pageY,
		X1 = moveEndX1 - startX1,
		Y1 = moveEndY1 - startY1;
		//左滑
		if ( X1 > 0 ) {
			i2--;
			move2();
		}
		//右滑
		else if ( X1 < 0 ) {
			i2++;
			move2(); 
		}
	});
	
	/*移动事件*/
	function move2() {
	    if (i2 == size2) {
	        $(".dad2 .img2").css({ left: 0 });
	        i2 = 1;
	    }
	    if (i2 == -1) {
	        $(".dad2 .img2").css({ left: (-(size2 - 1) * 90)+'rem' });
	        i2 = size2 - 2;
	    }
	    $(".dad2 .img2").stop().animate({ left: (-i2 * 90)+'rem' }, 660);
	    if (i2 == size2 - 1) {
	        $(".dad2 .num2 li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".dad2 .num2 li").eq(i2).addClass("on").siblings().removeClass("on");
	    }
	}
	
	//第四张
	var i3 = 0;
	var clone3 = $(".dad3 .img3 li").first().clone();//克隆第一张图片
	$(".dad3 .img3").append(clone3);                //复制到列表最后
	var size3 = $(".dad3 .img3 li").size();         //返回匹配元素的数量
	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j1 = 0; j1 < size3-1; j1++) {
	    $(".dad3 .num3").append("<li></li>");
	}
	$(".dad3 .num3 li").first().addClass("on");
	/*自动轮播*/
	// var t = setInterval(function () {
	//     i++;
	//     move();
	// },3000);
	//滑动
	$(".dad3").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX1 = e.originalEvent.changedTouches[0].pageX,
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad3").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX1 = e.originalEvent.changedTouches[0].pageX,
		moveEndY1 = e.originalEvent.changedTouches[0].pageY,
		X1 = moveEndX1 - startX1,
		Y1 = moveEndY1 - startY1;
		//左滑
		if ( X1 > 0 ) {
			i3--;
			move3();
		}
		//右滑
		else if ( X1 < 0 ) {
			i3++;
			move3(); 
		}
	});
	
	/*移动事件*/
	function move3() {
	    if (i3 == size3) {
	        $(".dad3 .img3").css({ left: 0 });
	        i3 = 1;
	    }
	    if (i3 == -1) {
	        $(".dad3 .img3").css({ left: (-(size3 - 1) * 90)+'rem' });
	        i3 = size3 - 2;
	    }
	    $(".dad3 .img3").stop().animate({ left: (-i3 * 90)+'rem' }, 660);
	    if (i3 == size3 - 1) {
	        $(".dad3 .num3 li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".dad3 .num3 li").eq(i3).addClass("on").siblings().removeClass("on");
	    }
	}
	//第五
	var i4 = 0;
	var clone4 = $(".dad4 .img4 li").first().clone();//克隆第一张图片
	$(".dad4 .img4").append(clone4);                //复制到列表最后
	var size4 = $(".dad4 .img4 li").size();         //返回匹配元素的数量
	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j1 = 0; j1 < size4-1; j1++) {
	    $(".dad4 .num4").append("<li></li>");
	}
	$(".dad4 .num4 li").first().addClass("on");
	/*自动轮播*/
	// var t = setInterval(function () {
	//     i++;
	//     move();
	// },3000);
	//滑动
	$(".dad4").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX1 = e.originalEvent.changedTouches[0].pageX,
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad4").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX1 = e.originalEvent.changedTouches[0].pageX,
		moveEndY1 = e.originalEvent.changedTouches[0].pageY,
		X1 = moveEndX1 - startX1,
		Y1 = moveEndY1 - startY1;
		//左滑
		if ( X1 > 0 ) {
			i4--;
			move4();
		}
		//右滑
		else if ( X1 < 0 ) {
			i4++;
			move4(); 
		}
	});
	
	/*移动事件*/
	function move4() {
	    if (i4 == size4) {
	        $(".dad4 .img4").css({ left: 0 });
	        i4 = 1;
	    }
	    if (i4 == -1) {
	        $(".dad4 .img4").css({ left: (-(size4 - 1) * 90)+'rem' });
	        i4 = size4 - 2;
	    }
	    $(".dad4 .img4").stop().animate({ left: (-i4 * 90)+'rem' }, 660);
	    if (i4 == size4 - 1) {
	        $(".dad4 .num4 li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".dad4 .num4 li").eq(i4).addClass("on").siblings().removeClass("on");
	    }
	}
	//第六
	var i5 = 0;
	var clone5 = $(".dad5 .img5 li").first().clone();//克隆第一张图片
	$(".dad5 .img5").append(clone5);                //复制到列表最后
	var size5 = $(".dad5 .img5 li").size();         //返回匹配元素的数量
	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j1 = 0; j1 < size5-1; j1++) {
	    $(".dad5 .num5").append("<li></li>");
	}
	$(".dad5 .num5 li").first().addClass("on");
	/*自动轮播*/
	// var t = setInterval(function () {
	//     i++;
	//     move();
	// },3000);
	//滑动
	$(".dad5").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX1 = e.originalEvent.changedTouches[0].pageX,
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad5").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX1 = e.originalEvent.changedTouches[0].pageX,
		moveEndY1 = e.originalEvent.changedTouches[0].pageY,
		X1 = moveEndX1 - startX1,
		Y1 = moveEndY1 - startY1;
		//左滑
		if ( X1 > 0 ) {
			i5--;
			move5();
		}
		//右滑
		else if ( X1 < 0 ) {
			i5++;
			move5(); 
		}
	});
	
	/*移动事件*/
	function move5() {
	    if (i5 == size5) {
	        $(".dad5 .img5").css({ left: 0 });
	        i5 = 1;
	    }
	    if (i5 == -1) {
	        $(".dad5 .img5").css({ left: (-(size5 - 1) * 90)+'rem' });
	        i5 = size5 - 2;
	    }
	    $(".dad5 .img5").stop().animate({ left: (-i5 * 90)+'rem' }, 660);
	    if (i5 == size5 - 1) {
	        $(".dad5 .num5 li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".dad5 .num5 li").eq(i5).addClass("on").siblings().removeClass("on");
	    }
	}
	//第七
	var i6 = 0;
	var clone6 = $(".dad6 .img6 li").first().clone();//克隆第一张图片
	$(".dad6 .img6").append(clone6);                //复制到列表最后
	var size6 = $(".dad6 .img6 li").size();         //返回匹配元素的数量
	/*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
	for (var j1 = 0; j1 < size6-1; j1++) {
	    $(".dad6 .num6").append("<li></li>");
	}
	$(".dad6 .num6 li").first().addClass("on");
	/*自动轮播*/
	// var t = setInterval(function () {
	//     i++;
	//     move();
	// },3000);
	//滑动
	$(".dad6").on("touchstart", function(e) {
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}   
		startX1 = e.originalEvent.changedTouches[0].pageX,
		startY1 = e.originalEvent.changedTouches[0].pageY;
	});
	$(".dad6").on("touchend", function(e) {         
		// 判断默认行为是否可以被禁用
		if (e.cancelable) {
			// 判断默认行为是否已经被禁用
			if (!e.defaultPrevented) {
				e.preventDefault();
			}
		}               
		moveEndX1 = e.originalEvent.changedTouches[0].pageX,
		moveEndY1 = e.originalEvent.changedTouches[0].pageY,
		X1 = moveEndX1 - startX1,
		Y1 = moveEndY1 - startY1;
		//左滑
		if ( X1 > 0 ) {
			i6--;
			move6();
		}
		//右滑
		else if ( X1 < 0 ) {
			i6++;
			move6(); 
		}
	});
	
	/*移动事件*/
	function move6() {
	    if (i6 == size6) {
	        $(".dad6 .img6").css({ left: 0 });
	        i6 = 1;
	    }
	    if (i6 == -1) {
	        $(".dad6 .img6").css({ left: (-(size6 - 1) * 90)+'rem' });
	        i6 = size6 - 2;
	    }
	    $(".dad6 .img6").stop().animate({ left: (-i6 * 90)+'rem' }, 660);
	    if (i6 == size6 - 1) {
	        $(".dad6 .num6 li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".dad6 .num6 li").eq(i6).addClass("on").siblings().removeClass("on");
	    }
	}
});