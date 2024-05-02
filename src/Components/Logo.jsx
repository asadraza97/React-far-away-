import React from "react";
import tree from "../assets/tree.png"
import bag from "../assets/bag.png"



function Logo(){
    return( 
        <div className="col-12" style={{ backgroundColor: "#f1971f",}}>
            <div className="childDiv d-flex justify-content-center align-items-center gap-2 p-1">
                <img src={bag} className="image" width={"70px"} />
                <h1 id="heading"> FAR-AWAY</h1>
                <img src={tree} className="image" width={"70px"} />
            </div>
        </div>
    )
}
export default Logo;