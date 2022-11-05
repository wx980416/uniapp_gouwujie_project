import { defineStore } from 'pinia'
import { getHomeMutidata } from '@/service/home'

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [] 
		}
	},
	actions: {
		// 获取首页轮播图和推荐栏的数据(异步的action)
		async fetchHomeMultidata() {
			const res = await getHomeMutidata()
			console.log('fetchHomeMultidata=>', res);
		}
	}
})