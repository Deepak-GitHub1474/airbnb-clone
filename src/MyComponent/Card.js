import React from "react";
export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
            <div className="cards">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <div>
                    <img src= {`${props.coverImg}`} alt="cat" className="card-img"/>
                </div>

                <div className="card-star-rating">
                    <img src= {`${props.star}`} alt="star" className="star-img"/>
                    <span className="card-rating">{props.stats.rating}</span>
                    <span className="card-reviewCount" >({props.stats.reviewCount})</span>
                    <span className="location">{props.location}</span>  
                </div>
                <p className="card-description">{props.description}</p>
                <div className="card-cost-person">
                    <p><span><b>From ${props.price}</b></span> / Person</p>
                </div>
                
            </div>
    )
}
