import React from 'react';
import './Button.css';

const STYLES = ['btn--primaty', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;//HERE WAS STYLES.INCLUDES
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];//HERE WAS STYLES.INCLUDES

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}onClick={onClick} 
    type={type}>{children}</button>
    )
}