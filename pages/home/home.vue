<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<!-- <home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner> -->
		<!-- 推荐栏组件 -->
		<!-- <home-recommend :recommends="recommends"></home-recommend> -->
		<!-- 热门栏组件 -->
		<home-popular></home-popular>
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
	</view>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { storeToRefs } from 'pinia'
	import {
		useHomeStore
	} from '@/store/home.js'
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommend from './cpns/home-recommend.vue'
	import HomePopular from './cpns/home-popular.vue'
	
	
	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)

	onLoad(() => {
		// 触发一个异步的 action( 获取首页轮播数据 )
		homeStore.fetchHomeMultidata()
	})

	// 轮播图的点击事件
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	
	// tab-control的点击事件
	function handleTabItemClick(index) {
		console.log('handleTabItemClick=>', index);
	}
</script>

<style>

</style>
