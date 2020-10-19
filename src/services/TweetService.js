import { axios } from 'axios';
import { apiUrl,getByUsername } from "../constant/constant";

export default class TweetService{
    
    getAllTweets=(args)=>{
    return axios({

        method:"GET",
        url:`${apiUrl}${getByUsername}`
    })
    }
}