import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Link to={`/pages/1`}><h2>Page 1</h2></Link>
                <Link to={`/pages/2`}><h2>Page 2</h2></Link>
                <Link to={`/pages/3`}><h2>Page 3</h2></Link>
                <Link to={`/pages/4`}><h2>Page 4</h2></Link>
                <Link to={`/pages/5`}><h2>Page 5</h2></Link>
                <Link to={`/pages/6`}><h2>Page 6</h2></Link>
            </div>
        )
    }
}