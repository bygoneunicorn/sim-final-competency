import React, {Component} from 'react';

export default class Page extends Component{
    render(){
        return(
            <div>
                <h1>This component renders a page item</h1>
                <h2>This is the number pulled from this.props.match.params.page: {this.props.match.params.page}</h2>
            </div>
        )
    }
}