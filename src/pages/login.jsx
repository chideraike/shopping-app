import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class login extends Component {
    render() {
        return (
            <div className="container" style={{ display:"flex", justifyContent:'center', alignItems:'center'}}>
                <form action="" className="card mt-5 bg-dark p-3 text-white" style={{width:"40%"}}>
                    <div className="card-header">
                        <h2 className="text-center">Login</h2>
                    </div>
                    <div className="card-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <Link to="/register">Create an account if not a user</Link>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default login;