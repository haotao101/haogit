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
});