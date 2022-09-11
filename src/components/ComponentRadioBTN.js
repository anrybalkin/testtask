import React from 'react';

const ComponentRadioBTN = (props) => {
    if (props.reqired) {
        return (
            <label className={"role"}>{props.text}
                <input
                    type="radio"
                    name={props.name}
                    required
                    className={"role_option"}
                    onChange={() => {
                    document
                        .querySelector(".registration_fieldset .input_error")
                        .classList
                        .add("hide");
                    document
                        .querySelector(".registration_fieldset")
                        .classList
                        .remove("error")
                }}
                    value={props.value}/>
                <span className={"role_mark"}></span>
            </label>
        );
    } else {
        return (
            <label className={"role"}>{props.text}
                <input
                    type="radio"
                    name={props.name}
                    className={"role_option"}
                    onChange={() => {
                    document
                        .querySelector(".registration_fieldset .input_error")
                        .classList
                        .add("hide");
                    document
                        .querySelector(".registration_fieldset")
                        .classList
                        .remove("error")
                }}
                    value={props.value}/>
                <span className={"role_mark"}></span>
            </label>
        );
    }
}

export default ComponentRadioBTN;