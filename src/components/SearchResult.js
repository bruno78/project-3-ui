import React, { Component } from 'react';
import SearchList from './SearchList';
class SearchResult extends Component {
constructor(props){
    super();

    
}
    state = {
        dataApi: [],
        message: ""
    }
    retrieveData = () => {
        var url = `https://data.cityofnewyork.us/resource/buex-bi6w.json?$q=${this.props.searchTerm.replace(/\s/g, '+')}$limit=5&$offset=0`
        console.log(url);
        try {
                fetch(url)
                    .then(results => {
                        return results.json();
                    })
                    .then(data =>{
                        const responseJSON = data
                        // console.log("just data", data)
                        // console.log(data.results);
                        this.setState({dataApi: responseJSON});

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
        console.log("here", this.state.dataApi)

        return (
            <div>
                <p>Search term: {this.props.searchTerm}</p>
                {this.state.dataApi.length > 0 ? this.state.dataApi.map((data, index) => {
                    console.log(data, "stuff")
                    return (
                        <SearchList dataApi={data} key={index} />
                    ) 
                }) : this.state.message
                
                 }
            </div>   
        )
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log("i just got fired")
    //     if(this.props.search !== nextProps.search ){
    //         return nextProps.search;
    //     }
    //   }
}
 
export default SearchResult
