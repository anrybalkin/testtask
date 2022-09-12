import React from "react";

/**
 * Component Avatar who render img avatar
 * @param {*} param0 url from props 
 * @returns 
 */
const Avatar = ({url}) => {
    return (
        <div className={"user_avatar"}>
            <img
                src={url}
                className={"user_img"}
                alt=""/></div>
    )
}
export default Avatar;