import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomInput from '../shared/CustomInput'
import { setCurrentUser } from '../../redux/user/user-actions'
import CustomButton from '../shared/CustomButton'

class User extends Component {
    state = {
        currentUser: this.props.user
    }
    onHandleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            currentUser: { ...this.state.currentUser, [name]: value }
        })
    }
    onHandleSubmit = e => {
        e.preventDefault()
        const inputs = document.querySelectorAll(`input`)
        var valid = false
        for (let i = 0; i < inputs.length; i++) {

            if ((inputs[i].value).trim() === '') {
                valid = false
                break;
            } else {
                valid = true
            }
        }
        if (!valid) {
            alert('Please fill all fields')
        } else {
            this.props.setCurrentUser(this.state.currentUser)
            this.props.history.push('/cart')
        }
    }
    redirectToHome = () => {
        this.props.history.push('/')
    }
    render() {
        const { currentUser } = this.state
        return (
            <div>
                <form onSubmit={this.onHandleSubmit} style={{ width: '500px', margin: '0 auto' }}>
                    <h1 className="text-lg-center">Billing Address</h1>
                    {Object.entries(currentUser).map(([user, value]) => (
                        <CustomInput label={user.split('_').join(' ')} key={user} value={value} name={user} onHandleChange={this.onHandleChange} placeholder={`Enter ${user.split('_').join(' ')}`} />
                    ))}
                    <div className="pb-lg-2 text-lg-center">
                        <CustomButton label="Back" onClickHandle={this.redirectToHome} />
                        <CustomButton label="Next" />
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ user }) => ({
    user: user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: (data) => dispatch(setCurrentUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(User)
