import React, { Component } from 'react';


class SearchList extends Component {
    render(){
        console.log("the child!!",this.props)
        return(
            <div>{this.props.dataApi.request_id}</div>
        )
    }
}

export default SearchList;