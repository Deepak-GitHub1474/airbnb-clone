import React from "react";

import image from "./image/group.png"


export default function Hero(){
    return(
        <main className="hero">
            <img src= {image} alt="group-album" className="hero-group-img"/>
            <h1 className="hero-heading">Online Experience</h1>
            <p className="hero-paragraph">Join unique interactive activities led by one of a kind hosts all without leaving home</p>
        </main>
    )
}