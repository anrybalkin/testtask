import React from "react";
import PreloaderSVG from "../assets/Preloader.svg"

const ComponentPreloader=()=>{
return (

    <div className="preloader">
        <img src={PreloaderSVG} alt="preloader"/>
    </div>
)
}
export default ComponentPreloader;