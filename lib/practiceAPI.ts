import API from '@/lib/api/api';
import { FormType } from '@/lib/data/practiceData';

const BASE_URL = 'http://jsonplaceholder.typicode.com'
const practiceAPI = {
    'getPost': (): Promise<FormType[]> =>
        API.get(`${BASE_URL}/posts`),

    'getPostById' : (id :number) : Promise<FormType> =>
        API.get(`${BASE_URL}/posts/${id}`)
    
}

export default practiceAPI;