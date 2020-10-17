import React,{Component } from "react";
import './search.css'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

class SearchComponent extends Component{
    render(){
        return(
            <div className="searchComponent">
                <input class="searchInput" type="text" name="" placeholder="Search Tweets by @username and #tags or both."/>
                <InfoOutlinedIcon  className="infoInput"/>
            </div>
        )
    }
}
export default SearchComponent;