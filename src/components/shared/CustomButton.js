import React from 'react'

const CustomButton = ({ label, onClickHandle }) => {
    return (
        <button type="submit" onClick={onClickHandle} className="btn btn-success ml-lg-1" >{label}</button>
    )
}

export default CustomButton
