import React from "react";

const Button = (props) => {
    let { href, type = "", children, ...restprops } = props;
     href=`https://adc.com${href}`
     
    return (
        <>  
            {href ? (
                <a href={href} {...restprops} className={`btn ${type}`}>
                    {children}
                </a>
            ) : (
                <button {...restprops} className={`btn ${type}`}>
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
