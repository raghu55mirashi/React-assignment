import React from 'react'
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-actions'

const CartItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => (
    <React.Fragment>
        <div style={{ width: "25%" }}>
            <img src={cartItem.imageUrl} style={{ height: "8rem" }} alt="..." />
        </div>
        <div style={{ width: "25%" }}>
            <span>{cartItem.name}</span>
        </div>
        <div style={{ width: "25%" }}>
            <i className="fa fa-minus-square" onClick={() => removeItem(cartItem)} style={{ fontSize: "24px", color: "black", cursor: 'pointer' }}></i>
            <span className="p-1">{cartItem.quantity}</span>
            <i className="fa fa-plus-square" onClick={() => addItem(cartItem)} style={{ fontSize: "24px", color: "black", cursor: 'pointer' }}></i>
        </div>
        <div style={{ width: "25%" }}>
            <span>{cartItem.price}</span>
        </div>
        <div style={{ width: "25%" }}>
            <i className="fa fa-trash-o" onClick={() => clearItemFromCart(cartItem)} style={{ paddingLeft: "1rem", fontSize: "24px", color: "red", cursor: 'pointer' }}></i>
        </div>
    </React.Fragment>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem)