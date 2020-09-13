import React from 'react'

const CustomInput = ({ label, name, onHandleChange, placeholder, value }) => {
    return (
        <div className="form-group">
            <label className="text-capitalize">{label}</label>
            <input type="text" value={value} name={name} onChange={onHandleChange} className="form-control" placeholder={placeholder} />
        </div>
    )
}

export default CustomInput
