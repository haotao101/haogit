<template>
	<view class="content">
		<view class="theDad">
			<view class="container container-fill" style="padding:0px;">
				<view class="scroll-fullpage" @touchstart="scrollTouchstart" @touchmove="scrollTouchmove" @touchend="scrollTouchend" 
					:style="{marginTop:margintop+'px', transform:theTranY}">
					<view :class="[scrollindex==0?'active':'section']" style="background: #3399FF;">
						<text class="section-maintitle">1</text>
					</view>
					<view :class="[scrollindex==1?'active':'section']" style="background: #00CC66;">
						<text class="section-maintitle">2</text>
					</view>
					<view :class="[scrollindex==2?'active':'section']" style="background: #33CCCC;">
						<text class="section-maintitle">3</text>
					</view>
					<view :class="[scrollindex==3?'active':'section']" style="background: #6699FF;">
						<text class="section-maintitle">4</text>
					</view>
					<view :class="[scrollindex==4?'active':'section']" style="background: #9966FF;">
						<text class="section-maintitle">5</text>
					</view>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollindex: 0,  //当前页面的索引值
				totalnum: 5,  //总共页面数
				starty: 0,  //开始的位置x
				endy: 0, //结束的位置y
				critical: 100, //触发翻页的临界值
				margintop: 0,  //滑动下拉距离
				theTranY:''
			}
		},
		watch:{
			"scrollindex":function(newVal,oldVal){
				this.theTranY='translateY(-'+newVal*100+'%'+')';
				console.log(this.theTranY);
			}
		},
		onLoad() {

		},
		methods: {
			scrollTouchstart: function (e) {
				let py = e.touches[0].pageY;
				this.starty= py;
			},
			scrollTouchmove: function (e) {
				let py = e.touches[0].pageY;
				this.endy=py;
				if (py - this.starty < 100 && py - this.starty > -100) {
					this.margintop= py - this.starty;
				}
			},
			scrollTouchend: function (e) {
				if (this.endy - this.starty > 100 && this.scrollindex > 0) {
					this.scrollindex= this.scrollindex - 1;
				} else if (this.endy - this.starty < -100 && this.scrollindex < this.totalnum - 1) {
					this.scrollindex= this.scrollindex + 1
				}
				this.starty= 0;
				this.endy= 0;
				this.margintop= 0;
			}
		}
	}
</script>

<style>
	.theDad{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.container-fill{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.scroll-fullpage{
		width: 100%;
		height: 100%;
		transition: all 0.3s;
	}
	.active{
		width: 100%;
		height: 100%;
	}
	.section{
		width: 100%;
		height: 100%;
	}
	.section-maintitle{
		display: block;
		text-align: center;
		font-size: 50rpx;
		color: #fff;
		font-weight: bold;
		letter-spacing: 10rpx;
		padding-top: 140rpx;
	}
	.section-subtitle{
		display: block;
		text-align: center;
		font-size: 40rpx;
		color: #fff;
		font-weight: bold;
		letter-spacing: 10rpx;
	}
	.active .section-maintitle,
	.active .section-subtitle{
		animation: mymove 0.8s;
	}
	@keyframes mymove{
		from {
			transform: translateY(-400rpx) scale(0.5) rotateY(90deg);
		}
		to {
			transform: translateY(0) scale(1) rotateY(0);
		}
	}
</style>