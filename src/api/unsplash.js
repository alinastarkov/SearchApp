import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            "Client-ID 1e550eca8172eff5e579191a4ded3d7c4323a259d0809ef9ab9d909c2a92e77a"
    }
});