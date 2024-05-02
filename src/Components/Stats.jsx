import React from "react";
import "./logo.css"
function Stats({items}){

   if(!items.length) return <p  className="stats" style={{textAlign:"center", backgroundColor:"#67c1a3", paddingTop:"14px", paddingBottom:"14px" }}> <em >Start Adding Some items to your packing list </em> </p> 
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = Math.round(numPacked / numItems * 100)
  

    return(
        <footer style={{textAlign:"center", backgroundColor:"#67c1a3", paddingTop:"14px", paddingBottom:"14px" }} >
           <em >
            {percentage === 100 ? "You got everything ! Ready to go" : 
            ` You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>
           
        </footer>
    )
}

export default Stats