import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="container" style={{ display:"flex", justifyContent:'center', alignItems:'center'}}>
                <form action="" className="card mt-5 bg-dark p-3 text-white" style={{width:"40%"}}>
                    <div className="card-header">
                        <h2 className="text-center">Register</h2>
                    </div>
                    <div className="card-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Name</label>
                                <input type="text" className="form-control" placeholder="eg. John Doe"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Verify Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <Link to="/">Already a user? login</Link>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;