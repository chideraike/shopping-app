import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    CartItem,
    CartItemHolder
} from '../components';
import data from './data.json';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state ={
            cart: []
        }
    }

    handleAddItem = item =>{
        const { cart } = this.state;
        const list = cart;
        // list.filter(cartItem =>{
        //     return item.item_name === cartItem.item_name;
        // })
        list.push(item);
        this.setState({
            cart: list
        });
    }

    render() {
        return (
            <div className="">
                <div className="navbar bg-dark">
                    <Link href="/admin" className="navbar-brand ">Shopping App</Link>
                </div>
                <div className="container-fluid row mt-5">
                    <div className="col-lg-10" style={{
                        display:'flex',
                        flexDirection:'row',
                        flexWrap:'wrap'
                    }}>
                        {data.map(item =>(
                             <CartItem item={item} onClick={(e) =>this.handleAddItem(item)} />
                        ))}
                       
                    </div>
                    <div className="col-lg-2">
                       <CartItemHolder items={this.state.cart} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;