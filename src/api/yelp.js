import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer SZBfvhhRqGM2foqirvE9Ec0ABqMbbQKNNZLwqo-Ve7-4jRzs-q4mQrtLs26BhXJ9BCYhGLW6x3bjl3r3SIFxVWciDruuQAwsuHwmTxi1hu2A4rJUW-VKSWJBnAipX3Yx'
    }
})