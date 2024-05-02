import React, { useState } from "react";

function Form({onAddItems}){

    const [description, setDescription] =useState("");
    const [quantity, setQuantity] = useState(1);

 function handlerSubmit(e){
        e.preventDefault();

     if(!description) return;

      const newItem = {description, quantity, packed: false, id: Date.now()};
    //   console.log(newItem);

      onAddItems(newItem)

      setDescription("")
      setQuantity(1)

 }
    return(

    <form className="add-form" onSubmit={ handlerSubmit} 
      style={{background : " orangered", display: "flex", justifyContent: "center", alignItems: "center"}} > 

        <h4>What Do you need for your 😍 trip? </h4>

        <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))} className="select-option" style={{padding: "5px 20px",gap: "4px", borderRadius: "20px", margin: "15px 15px", border: "none", outline: "none"}}>
           {Array.from({length: 20}, ( _, i) => i + 1).map(num =><option value={num} key={num}> {num} </option>)}

        </select>

        <input className="select-option" style={{padding: "5px 20px", borderRadius: "20px", margin: "15px 3px", border: "none", outline: "none"}} type="text" placeholder="Item..."
         value={description} onChange={(e)=> setDescription(e.target.value)}/>

        <button style={{padding: "5px 20px", borderRadius: "20px", margin: "15px 3px", border: "none", outline: "none", background:"#6cfdf8"}}  > Add </button>

     </form>

    )
}
export default Form;
