import React, { Component } from 'react';
import { CollectionItem, Row, Col, Icon } from 'react-materialize';


class SearchList extends Component {

    getDate = (date) => {
        const dt = new Date(date);
        return (dt.getMonth() + 1) + "-" + dt.getDate() + "-" + dt.getFullYear(); 
    }

    render(){
        return (
            <CollectionItem>
                <div className='record-list'>
                    <Row className='record-title'>
                        <Col s={10}>
                            <h5>
                                {this.props.location}
                            </h5>
                        </Col>
                        <Col s={2} className='bookmark text-right'>
                            <Icon onClick='saveBookmark'>bookmark_border</Icon>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col s={6}>
                            <small><strong>{this.props.boroname}</strong></small>
                        </Col>
                        <Col s={6} className='text-right'>
                            <small>
                                <Icon>local_offer</Icon> {this.props.type} &nbsp;&nbsp;
                                <Icon>done</Icon> Activated {this.getDate(this.props.activated)}
                            </small>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12}>
                            <p className='short-description'>{this.props.remarks}</p>
                        </Col>
                        <Col s={4}>
                            <p>{this.props.provider}</p>
                        </Col>
                        <Col s={4}>
                            <p>{this.props.ssid}</p>
                        </Col>
                        <Col s={4}>
                            <p>{this.props.type}</p>
                        </Col>
                    </Row>
                    
                    
                </div>
            </CollectionItem>
        )
    }
}

export default SearchList;