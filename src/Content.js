import React, { Component } from 'react';
import logo from './logo.svg';
import './Content.css'
// import { handleSQLitePublish } from './db_work';
import sql from 'sql.js';
 
const book = 'harry potter';
const author = 'J. K. Rowling';

class Content extends Component {
    // componentDidMount() {
    //     console.log(new sql.Database());
    // }
    constructor(props) {
        super(props);
        this.state = {
            data: 0,
            input_1: 0,
            input_2: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleMongoDBPublish = this.handleMongoDBPublish.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        var sum = parseInt(this.state.input_1) + parseInt(this.state.input_2)
        this.setState({
            data: sum
        });
        event.preventDefault();
    }
    handleClear() {
        this.setState({
            data: 0,
            input_1: 0,
            input_2: 0
        });
    }

    handleMongoDBPublish() {
        console.log("Publishing in MongoDB");
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Input 1</span>
                                    </div>
                                    <input type="text" name="input_1" value={this.state.input_1} className="form-control" placeholder="Input 1" aria-label="Input 1" aria-describedby="basic-addon1" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Input 2</span>
                                    </div>
                                    <input type="text" name="input_2" value={this.state.input_2} className="form-control" placeholder="Input 2" aria-label="Input 2" aria-describedby="basic-addon1" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5"></div>
                            <div className="col-sm-2">
                                <div className="btn-group" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-danger" onClick={this.handleClear}>Clear</button>
                                    <button type="submit" className="btn btn-success">Process</button>
                                </div>
                            </div>
                            <div className="col-sm-5"></div>
                        </div>
                    </form>
                </div>
                <footer className="fixed-bottom bg-black fixed-height-40">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="terminal-heading col-sm-12">
                                    Output:
                                </div>
                                <div className="terminal-output col-sm-12">
                                    &#123;
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{this.state.data}
                                    <br />
                                    &#125;
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 center-align mt-4">
                            <div className="row mt-4">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <div className="btn-group-vertical" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-warning btn-lg">Publish</button>                                    
                                    <button type="button" className="btn btn-info btn-lg" onClick={this.handleSQLitePublish} >SQLite</button>                                    
                                    <button type="button" className="btn btn-success btn-lg" onClick={this.handleMongoDBPublish} >MongoDB</button>
                                    </div>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                        </div>
                    </div>


                </footer>
            </div>
        );
    }
}

export default Content;
