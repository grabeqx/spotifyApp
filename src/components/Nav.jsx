import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <Link to="/search" className="nav-link">Search</Link>
            </ul>
        </div>
    )
}

const RightNav = (props) => {
    return (
        <div>
            <div className="my-2 my-lg-0 d-flex">
                <div className="mr-sm-2">
                    <img className="avatar" src={props.user.image} />
                </div>    
                <div className="my-2 my-sm-0 user-name">
                    <h5>{props.user.display_name}</h5>
                </div>
            </div>
        
        </div>
    )
}

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: this.props.data.appName,
            user: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.data.user
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">{this.state.appName}</Link>
                    <LeftNav />
                    <RightNav user={this.state.user} />
                </nav>
            </div>
        )
    }
}
