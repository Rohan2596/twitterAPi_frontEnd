import axios from 'axios';
import { apiUrl,getByUsername } from '../constant/constant';

export default class TweetService{
    
   
    getAllTweetsByUsername = (inputDto) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${getByUsername}`,
            data: inputDto
            
        });
    }
}