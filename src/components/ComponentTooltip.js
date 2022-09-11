import React from 'react';
/**
 * 
 * @param {props.text} props text for tooltip
 * @returns 
 */
const ComponentTooltip = (props) => {
    return (
        <div className={'tooltip '+(props.addClass!==undefined?props.addClass:"")}>
            {props.children}
            <div className={"tooltip_body"}>{props.text}</div>
        </div>
    );
}

export default ComponentTooltip;