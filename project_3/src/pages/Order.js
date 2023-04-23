import React from "react";
import '../style.css'

function Order() {
    return (
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City Name" />
                    <button><img src="/Images/search.png" alt="" /> </button>
                </div>
            </div>
        </div>
    )
}

export default Order