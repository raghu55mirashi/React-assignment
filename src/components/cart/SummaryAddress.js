import React, { Component } from 'react'
import { connect } from 'react-redux'

class SummaryAddress extends Component {
    render() {
        const { currentUser } = this.props.user
        return (
            <div className="p-4" style={{ background: 'rgb(185 181 181)' }}>
                {Object.entries(currentUser).map(([user, value]) => (
                    <div key={user} className="row">
                        <div className="col-5 text-capitalize">{user.split('_').join(' ')}</div>
                        <div className="col-2">:</div>
                        <div className="col-5">{value}</div>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps)(SummaryAddress)