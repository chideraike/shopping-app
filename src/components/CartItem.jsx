import React from 'react';

const CartItem = (props) =>{

    return (
        <div style={{
            width: '200px',
            height:'200px',
            zIndex:99,
            backgroundColor:'grey',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            flexDirection:'column',
            borderRadius: 14,
            margin:10
        }}>
            <div>
                {props.item.item_name}
            </div>
            <div>
            {props.item.item_price}
            </div>
            <div>
                <button className="btn btn-info" onClick={props.onClick}>
                    Add to cart
                </button>
            </div>
        </div>
    )

}

export default CartItem;