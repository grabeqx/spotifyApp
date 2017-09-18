import React from 'react';
import ReactDOM from 'react-dom';


class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container content">
                <div className="row mb-5 col-md-12">
                    <h1>Szukaj:</h1>
                </div>            
                <div className="row">
                    <form className="search">
                        <input type="text" className="" placeholder="szykaj"/>
                    </form>
                </div>
                <div className="row mt-5">
                    lista
                </div>
            </div>
        )
    }
}

export default SearchComponent;