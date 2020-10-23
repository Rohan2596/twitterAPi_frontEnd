import React,{Component } from "react";
import './tweet.css';
import TweetService from '../services/TweetService'

class TweetComponent extends Component{


    constructor(props){
        super(props)
        this.state={
            tweets:[]
        }
    }


    getAllTweets(){
        let inputDto={
            inputList:["#elonmusk"]
         }
         console.log("THis:-  " + inputDto.inputList[0]);
         
        new TweetService().getAllTweetsByBoth(inputDto)
        .then(response => {
            this.setState({tweets:response.data.data});
        }, (err) => {
            console.log("Errorr......"+ JSON.stringify(err.data));
            
        });
        
 
    }  
     
     
    componentDidMount(){
        this.getAllTweets()      
       }
 
       
    render(){
     var   displayTweets=this.state.tweets.map((item,i)=>{
            return(
                <div className="tweetsMain" key={i}>
                <div className="avatar">
                    <img src={item.profile_image_url_https} alt="" srcset=""/>
                </div>
                    <div className="tweet">
            <span className="name">{item.profile_name}</span>
            <span className="username">{item.profile_screen_name}</span>
            <span className="text">{item.text}</span>
            <div className="time">{item.created_time_stamp}</div>
                </div>
                </div>
            )
        })
        return(
            <div>
                 {displayTweets}
            </div>
            
        )
    }
}
export default TweetComponent;