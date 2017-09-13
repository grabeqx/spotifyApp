import React from 'react';
import ReactDOM from 'react-dom';

import { Album } from './Cards';

class AlbumDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
    }


    render() {
        return (
            <div>
   
            </div>
        )
    }
}

export default AlbumDetails;