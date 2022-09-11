import React from "react";

const Button = React.forwardRef((props,ref) => {

    function handlerClick()
    {
        if(props.scrollTo!==undefined)
        {
            document.querySelector(props.scrollTo).scrollIntoView({block: "start", behavior: "smooth"});
        }
        if(props.onClick)
        {
            props.onClick()
        }
    }

    if(props.scrollTo!==undefined||props.onClick!=undefined)
    {
        return (
            <button type="button" ref={ref} className={props.type} onClick={handlerClick}>{props.children}</button>
        )
    }
    return (
        <button type="button" ref={ref} className={props.type}>{props.children}</button>
    )
})
export default Button;