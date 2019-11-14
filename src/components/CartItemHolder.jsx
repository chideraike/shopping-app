import React from 'react';

const CartItemHolder = (props) =>{

    return (
        <div className="card">
            <div className="card-header">
                Your shopping basket
            </div>
            <div className="card-body">
                <ul>
                    {props.items.map(item =>(
                        <li>{item.item_name}</li>
                    ))}
                </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-success">Checkout</button>
            </div>
        </div>
    )
}

export default CartItemHolder