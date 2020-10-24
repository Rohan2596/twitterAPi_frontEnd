import React,{Component } from "react";
import './search.css'


class SearchComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            value:'',
            inputs:[]
        }
    }
    handleChange=(evt)=>{
        this.setState({
            value:evt.target.value
        });
    }
    handleKeyDown=(evt)=>{
        if(['Enter','Tab',','].includes(evt.key)){
            evt.preventDefault();
        }
        var input=this.state.value.trim();
        if(input){
            this.setState({
                inputs:[...this.state.inputs,input],
                value:''
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.state.inputs.map(input=>
                    <div key={input}>{input}</div>)}
            <div className="searchComponent">
                <input className="searchInput"
                 placeholder="Search Tweets by @username and #tag"
                 value={this.state.value}
                 onChange={this.handleChange}
                 onKeyDown={this.handleKeyDown}
                 />
            </div>
            </React.Fragment>
        )
    }
}
export default SearchComponent;