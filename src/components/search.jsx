import React,{Component } from "react";
import './search.css'
class SearchComponent extends Component{
    render(){
        return(
            <div className="searchComponent">
                <input class="searchInput" type="text" name="" placeholder="Search Tweets by @username and #tags or both."/>

            </div>
        )
    }
}
export default SearchComponent;