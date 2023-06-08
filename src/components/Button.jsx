import React from 'react';

const Button = ({buttonText}) => {
    return (
        <>
            <button className="btn bg-red-600 border-0">{buttonText}</button>

        </>
    );
};

export default Button;