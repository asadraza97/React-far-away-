import React, { useState } from "react";
import Item from "./Item";
import "./logo.css"


function PackingList({items, onDeleteItem , onToggleItem, onClearList}) {
  const [sortBy, setSortBy] =useState("input");
  let sortedItem;

  if(sortBy === "input") sortedItem = items;

  if(sortBy === "description") sortedItem =items.slice().sort((a,b) => a.description.localeCompare(b.description) )

  if(sortBy === "packed") sortedItem = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  
  return (
    <div  style={{backgroundColor:"#4c3423", height:"66vh", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <ul style={{display:"flex", justifyContent: "space-evenly", color:"white", listStyleType: "none",}}>
        {sortedItem.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem}
          onToggleItem= {onToggleItem} key={item.id} />
        ))}
      </ul>

      <div className="bottomSelectList" style={{display:"flex", justifyContent:"center", marginBottom:"20px", gap:"10px",}} > 
      <select className="cars" style={{fontSize:"10px", borderRadius: "30px"}} value={sortBy} onChange={(e) => setSortBy(e.target.value)}   >
        <option className="option1" value="input"   > 
        SORT BY INPUT ORDER</option>

        <option value="description"> 
        SORT BY DESCRIPTION
        </option>
        <option value="packed" > 
        SORT BY PACKED STATUS</option>
        </select>

        <button className="btmBtn" style={{fontSize:"10px", borderRadius: "30px"}} onClick={onClearList}> CLEAR LIST</button>
         </div>
    </div>
  );
}

export default PackingList;

// div  style={{ backgroundColor: "#4c3423", height: "70vh",display: "flex", width: "100%",flexDirection: "column",justifyContent: "space-between",}} 
// ul   // style={{ display: "flex", // ,// color: "white",// ,}}
// div  style={{display: "flex", justifyContent: "center", } }
// select style={{margin: "10px", padding: "10px", borderRadius: "30px", backgroundColor: "#ffeb3b"}}
// button style={{margin: "10px", padding: "10px", borderRadius: "30px", backgroundColor: "#ffeb3b"}}