import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                
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
                <div className="my-0 ml-2 user-name">
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
            <nav className="container-fluid px-0">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand">{this.state.appName}</Link>
                    <LeftNav />
                    <RightNav user={this.state.user} />
                </nav>
            </nav>
        )
    }
}
