import React from 'react'

const Button = (props) => {
    return (
            <button type='button' className={props.btnStyle}>
                {props.name}
            </button>
    )
}

export default Button
