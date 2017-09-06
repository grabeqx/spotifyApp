import React from 'react';
import ReactDOM from 'react-dom';


class FeaturedPlaylist extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getToken();
    }
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>FeaturedPlaylist</div>
        )
    }
}

export default FeaturedPlaylist;