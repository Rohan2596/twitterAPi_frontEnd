import React,{Component } from "react";
import './tweet.css';
import TweetService from '../services/TweetService'

class TweetComponent extends Component{


    getAllTweets(){
        let inputDto={
            inputList:["#elonmusk"]
         }
         console.log("THis:-  " + inputDto.inputList[0]);
         
        new TweetService().getAllTweetsByBoth(inputDto)
        .then(response => {
            console.log("output....."+ JSON.stringify(response.data.data));
        }, (err) => {
            console.log("Errorr......"+ JSON.stringify(err.data));
            
        });
        
 
    }   
     
    componentDidMount(){
        this.getAllTweets()      
       }
    render(){
        return(
            <div>
                <div className="tweetsMain">
            <div className="avatar">
                
            </div>
                <div className="tweet">
                    <span className="name">Rohan Kadam</span>
                    <span className="username">@RohanKadam2596</span>
                    <span className="text">Checkout my work and give me feedback.</span>
                    <div className="time">Mon 10.00 am 25/10/2020</div>
            </div>
            </div>

            </div>
            
        )
    }
}
export default TweetComponent;