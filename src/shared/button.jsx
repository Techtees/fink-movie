import React from 'react';

const Button = (props) => {
    const{className, text,children} = props
    return ( 
        <button className={className}>
            {text}
            {children}
        </button>
     );
}

export default Button;