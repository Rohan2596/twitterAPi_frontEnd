import axios from 'axios';
import { apiUrl,getByUsername, getByBoth,getByTag } from '../constant/constant';

export default class TweetService{
    
   
    getAllTweetsByUsername = (inputDto) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${getByUsername}`,
            data: inputDto
            
        });
    }

    getAllTweetsByTag = (inputDto) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${getByTag}`,
            data: inputDto
            
        });
    }

    getAllTweetsByBoth = (inputDto) => {
        return axios({
            method: "POST",
            url: `${apiUrl}${getByBoth}`,
            data: inputDto
            
        });
    }
    
    

}