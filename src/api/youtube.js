import axios from 'axios'

const KEY = "AIzaSyBF7heVm34dhxzMulED5dBfbyshqmmp1Qo"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5, 
        key: KEY
    }
})