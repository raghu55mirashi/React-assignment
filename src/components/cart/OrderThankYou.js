import React from 'react'
import CustomButton from '../shared/CustomButton'

const OrderThankYou = ({ history }) => {
    const redictToHome = () => {
        history.push('/')
    }
    return (
        <div className="card text-center" style={{ width: "18rem", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <div className="card-body">
                <h5 className="card-title">Success!</h5>
                <p className="card-text">Thank you for order</p>
                <CustomButton onClickHandle={redictToHome} label="OK" />
            </div>
        </div>
    )
}

export default OrderThankYou
