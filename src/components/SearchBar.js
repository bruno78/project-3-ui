import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
      }
    
    //   handleSearchTermChange(event) {

    //     if(event.key === 'Enter'){
    //       console.log("please")
    //       this.props.onSearchTermChange(event.target.value);

    //     }
    // }
      
      handleSearchTermSubmit(event) {
        event.preventDefault();
        // this will change the 
        this.props.onSearchTermSubmit();
      }
      
      // update form
      _handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.props.onSearchTermChange(event.target.value);

        }
      }


      render() {
        console.log("test");
        // console.log("does it render?")
        return (
          <div className="SearchBar">
            <h1>SearchBar</h1>
            <form onSubmit={this.handleSearchTermSubmit}>
  
              <input type="text" onKeyPress={this._handleKeyPress} />

            </form>
          </div>
        );
      }
}
 
export default SearchBar;