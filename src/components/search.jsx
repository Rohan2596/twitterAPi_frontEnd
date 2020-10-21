import React,{Component } from "react";
import './search.css'


class SearchComponent extends Component{
    render(){
        return(
            <div className="searchComponent">
                <input className="searchInput" type="text" name="" placeholder="Search Tweets by @username and #tag"/>
            </div>
        )
    }
}
export default SearchComponent;