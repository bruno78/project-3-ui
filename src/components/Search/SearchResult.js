import React, { Component } from 'react';
import {Collection, Button } from 'react-materialize';
import SearchList from './SearchList';


class SearchResult extends Component {
constructor(props){
    super();    
}
    state = {
        dataApi: [],
        message: "",
    }

    retrieveData = () => {
        var url = `https://data.cityofnewyork.us/resource/24t3-xqyv.json?$q=${this.props.searchTerm.replace(/\s/g, '+')}&$limit=200&$offset=0`
        console.log('this data', url);
        try {
                fetch(url)
                    .then(results => {
                        return results.json();
                    })
                    .then(data =>{
                        const responseJSON = data
                        this.setState({dataApi: responseJSON});
                        console.log(data);

                    }).then(data => {
                        if(!data){
                            this.setState({message: "not found"})
                        }
                    })
            } catch (err) {
                console.log("Could not retrieve data from the server! " + err);
            }
    }


    componentWillReceiveProps(nextProps){
        if(this.props.search !== nextProps.search){
            this.retrieveData()
        }
    }



    render() {
        return (
            <div>
                <p>Search term: {this.props.searchTerm}</p>
                
                    {this.state.dataApi.length > 0 ?
                        <div>
                            <Collection>
                                {this.state.dataApi.map((data, index) => {
                                    return (
                                        <SearchList {...data} key={index} />
                                    ) 
                                })}
                            </Collection>
                        </div> : 
                    
                        this.state.message
                    
                    }    
            </div>   
        )
    }
}
 
export default SearchResult
