import hyRequest from './index.js'

// http://152.136.185.210:7878/api/hy66/home/multidata
export const getHomeMutidata = () => {
	return hyRequest.get('/home/multidata', {})
}