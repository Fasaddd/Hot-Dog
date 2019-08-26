import axios from 'axios';

const instance  =axios.create({
    baseURL: 'https://hot-dog-c4f67.firebaseio.com/'
});

export default instance;