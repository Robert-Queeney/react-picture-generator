import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fe0f538425ec15f97145ab06f6759039a9ab7324480f5947492c4d8f19968aa1'
    }
})

 