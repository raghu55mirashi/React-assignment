import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import SummaryAddress from './SummaryAddress'
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart-selector'
import CustomButton from '../shared/CustomButton'

class Cart extends Component {
    order = () => {
        this.props.history.push('/thankyou')
    }
    redirectToAddress = () => {
        this.props.history.push('/address')
    }
    render() {
        const { cartItems, cartTotal } = this.props
        return (
            <div style={{ width: '800px', margin: '0 auto' }}>
                <div style={{ fontWeight: "bold", display: "flex", padding: "10px 0", color: '#fff', borderBottom: "1px solid darkgrey" }}>
                    <div style={{ width: "25%" }}>
                        <span>Product</span>
                    </div>
                    <div style={{ width: "25%" }}>
                        <span>Name</span>
                    </div>
                    <div style={{ width: "25%" }}>
                        <span>Quatity</span>
                    </div>
                    <div style={{ width: "25%" }}>
                        <span>Price</span>
                    </div>
                    <div style={{ width: "25%" }}>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map((cartitem, id) =>
                    <div key={id} style={{ display: "flex", padding: "10px 0", color: '#fff' }}>
                        <CartItem cartItem={cartitem} />
                    </div>)}
                <div style={{ display: 'block', padding: "10px 0", color: '#fff', borderTop: "1px solid darkgrey" }}>
                    <h5 style={{ textAlign: 'right' }}>Total : ${cartTotal}</h5>
                </div>
                <div className="pb-lg-1 ">
                    <SummaryAddress />
                </div>
                <div className="pb-lg-2 text-lg-right">
                    <CustomButton label="Back to Address" onClickHandle={this.redirectToAddress} />
                    <CustomButton label="Order" onClickHandle={this.order} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})
export default connect(mapStateToProps)(Cart)
