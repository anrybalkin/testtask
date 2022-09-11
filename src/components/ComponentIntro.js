import React from "react";
import Background from "../assets/pexels-alexandr-podvalny-1227513.jpeg"
import Button from "./ComponentButtton";

const Avatar = (props) => {
    return (
        <main className={"intro"}>
                    <div className={"intro_contaner"}>
                        <div className={"intro_block"}>
                            <h1 className={"intro_title"}>
                                Test assignment for front-end developer
                            </h1>
                            <p className={"intro_desc"}>
                                What defines a good front-end developer is one that has skilled knowledge of
                                HTML, CSS, JS with a vast understanding of User design thinking as they'll be
                                building web interfaces with accessibility in mind. They should also be excited
                                to learn, as the world of Front-End Development keeps evolving.
                            </p>
                            <Button scrollTo={".registration"} type={"intro_button"}>Sign up</Button>
                        </div>
                    </div>
                    <div className={"intro_bkgcontainer"}>
                        <img
                            src={Background}
                            className={"intro_bkg"}
                            alt="Background"/>
                    </div>
                </main>
    )
}
export default Avatar;