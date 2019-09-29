<template>
	<!--音频中心-->
	<view class="content">
		<view class="theDad">
			<view v-if="selected==0">
				音频营销
			</view>
			<view v-else-if="selected==1">
				个人中心
			</view>
			<view style="height: 60px;width: 30px;">
			</view>
		</view>
		<view @click="tier" class="imgDad confirm bubble">
			<image class="dianImg" src="/static/centerma.png"></image>
		</view>
		<view id="componentId" class="tab-bar">
		  <view class="tab-bar-border"></view>
		  <view v-for="(item,index) in list" :key="index" class="tab-bar-item" @click="switchTab(index)">
		  		<image class="coverImg" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
		  		<view :style="{color:selected === index ? selectedColor : color}">{{item.text}}</view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: 0,
				color: "#A2A2A2",
				selectedColor: "#FF8A00",
				list: [
				{
				  pagePath: "/pages/home/home",
				  iconPath: "/static/bottom_audio.png",
				  selectedIconPath: "/static/bottom_select_audio.png",
				  text: "音频营销"
				},
				{
				  pagePath: "/pages/index/index",
				  iconPath: "/static/bottom_me.png",
				  selectedIconPath: "/static/bottom_select_me.png",
				  text: "个人中心"
				}
				],
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#000000'
			})
		},
		methods: {
			switchTab(index){
				let that=this;
				that.selected=index;
			},
			tier(){
				console.log("视频")
			}
		}
	}
</script>

<style>
	.imgDad{
		width: 58px;
		height: 58px;
		position: fixed;
		bottom: 23px;
		bottom: calc(23px + env(safe-area-inset-bottom));/*兼容ios*/
		left:50%;
		transform: translateX(-50%);
		border-radius: 50%;
		background: transparent;
		z-index: 3000;
	}
	.imgDad:before{
		content: '';
		position: absolute;
		bottom: 0.5px;
		left:-1px;
		width: 57px;
		height:28px;
		border: 1.5px solid #E5E5E5;
		border-top:none;
		background: transparent;
		border-radius: 0px 0px 128px 128px;
	}
	.dianImg{
		width: 40px;
		height: 40px;
		position: absolute;
		border: 1.5px solid white;
		left: 50%;
		top:50%;
		transform: translate(-50%,-50%);
		border-radius: 50%;
		color: white;
		background: white;
	}
	.tab-bar {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  height: 53px;
	  display: flex;
	  padding-bottom: env(safe-area-inset-bottom);
	  z-index: 1000;
	  background-image: repeating-radial-gradient(500px 500px at 50% 0px ,
	  transparent 0%, transparent 28.8px,white 28.8px, white 200%);
	}
	.tab-bar-border {
	  background-image: repeating-radial-gradient(500px 500px at 50% 0px ,
	  transparent 0%, transparent 29px,#E6E6E6 29px, #E6E6E6 200%);
	  position: absolute;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 1.5px;
	}
	.tab-bar-item {
	  flex: 1;
	  text-align: center;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	}
	.tab-bar-item:nth-child(2){
		padding-right: 110rpx;
		/* border: 1px solid black; */
	}
	.coverImg{
	  width: 22px;
	  height: 22px;
	}
	.tab-bar-item view {
	  font-size: 10px;
	  position: relative;
	  bottom: -3px;
	}
	.theDad{
		position: absolute;
		height: calc(99%);
		width: 100%;
		overflow-y: auto;
	}
</style>
