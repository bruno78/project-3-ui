import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: '', search: false};
        this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
      }
      
      handleSearchTermChange(searchTerm) {
        this.setState({searchTerm, search: false});
      }
      
      handleSearchTermSubmit() {
        this.setState({search: true});
      }

      // handleSubmitListener(event, savedData) {
      //   // event.preventDefault();
      //   // event.target.content = "";
      //   axios
      //     .post("/api/save", {
      //       wifi: savedData
      //     })
      //     .then(res => {
      //       this.setState({savedWifi: res})
      //       // if (res.data.data.tweed.id !== undefined) {
      //       //   console.log(res.data.data.tweed.id);
      //       //   const newTweed = {
      //       //     tweed_text: res.data.data.tweed.tweed_text,
      //       //     id: res.data.data.tweed.id
      //       //   };
      //       //   this.setState(prevState => {
      //       //     console.log(prevState);
      //       //     return {
      //       //       data: prevState.data.concat(newTweed)
      //       //     };
      //       //   });
      //       // }
      //     })
      //     .catch(err => console.log(err));
      // }
      
      render() {
        return (
          <div className="container">
            <SearchBar
              searchTerm={this.state.searchTerm}
              onSearchTermChange={this.handleSearchTermChange}
              onSearchTermSubmit={this.handleSearchTermSubmit} />
            <SearchResult searchTerm={this.state.searchTerm} search={this.state.search} />
          </div>
        );
      }
}
 
export default SearchPage;