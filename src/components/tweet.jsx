import React,{Component } from "react";
import './tweet.css'

class TweetComponent extends Component{
    render(){
        return(
            <div>
                <div className="tweetsMain">
            <div className="avatar">Ava</div>
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