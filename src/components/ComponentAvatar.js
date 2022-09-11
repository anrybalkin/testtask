import React from "react";

const Avatar = (props) => {
    return (
        <div className={"user_avatar"}>
            <img
                src={props.url}
                className={"user_img"}
                alt=""/></div>
    )
}
export default Avatar;