import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'

class ProductItem extends Component {
    state = {
        hide: false
    }
    componentDidMount() {
        if (this.props.cart.cartItems.map(item => item.id).includes(this.props.product.id)) {
            this.setState({
                hide: true
            })
        }
    }
    onAddToCart = (product) => {
        this.props.addItem(product)
        this.setState({
            hide: true
        })
    }
    render() {
        const { product } = this.props;
        const { hide } = this.state
        return (
            <div className="col-3 text-center">
                <div className="card " style={{ marginBottom: "20px", alignItem: 'center' }}>
                    <div className="">
                        <img src={product.imageUrl} style={{ height: "15rem", width: '100%' }} alt="..." />
                    </div>
                    <div className="card-body1 p-2">
                        <div className="d-flex pb-2">
                            <div className="flex-grow-1">{product.name}</div>
                            <span className="pl-1">${product.price}</span>
                        </div>
                        <p className="card-text">
                            <button type="button" disabled={hide} id={product.id}
                                onClick={() => this.onAddToCart(product)}
                                className={`btn ${hide ? 'btn-danger' : 'btn-warning'} `}>
                                {hide ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ cart }) => ({
    cart
})
const mapDispatchToProps = dispatch => ({
    addItem: (data) => dispatch(addItem(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)