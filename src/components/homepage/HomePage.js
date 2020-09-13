import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomButton from '../shared/CustomButton'
import ProductItem from './ProductItem'

class HomePage extends Component {
    state = {
        products: this.props.shop
    }
    redirectToAddress = () => {
        this.props.history.push('/address')
    }
    render() {
        const { products } = this.state
        return (
            <div className="pb-4">
                <div className="jumbotron-fluid row">
                    {products.items.map(product => (
                        <ProductItem product={product} key={product.id} />
                    ))
                    }
                </div>
                <div className="pb-lg-2 text-lg-right" style={{ position: "sticky", bottom: 0 }}>
                    <CustomButton label="Next" onClickHandle={this.redirectToAddress} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ shop }) => ({
    shop
})
export default connect(mapStateToProps)(HomePage)