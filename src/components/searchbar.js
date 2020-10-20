import React from "react";

class Searchbar extends React.Component {
    state={term: " "}
    onFormSubmit = (event) => {
        event.preventDefault();
        //Callback function from parent element
        this.props.onSearchSubmit(this.state.term);
        
    }

    render(){
        return(
            <div className="ui container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search a video you like</label>
                        <input onChange={(e) => {this.setState({term: e.target.value})}} type="text"/>
                    </div>
                </form>
            </div>
        )
    }
 }
 export default Searchbar 