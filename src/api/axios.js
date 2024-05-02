import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key:'a26b890f87b91ec0eceaee3575c08b02',
        language:'ko-KR'
    }
})

export default instance