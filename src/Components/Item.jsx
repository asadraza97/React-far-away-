export default function Item({ item, onDeleteItem , onToggleItem}) {
    return (
      <li>
          <input style={{ marginRight:"10px"}} type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)} />
  
        <span style={item.packed ? { textDecoration: "line-through", } : {}}>
          {item.quantity} {item.description}{" "}
        </span>
        <button
          style={{ border: "none", fontSize: "16px", color: "#ea0402", fontWeight: "500", paddingTop: "3px", paddingBottom: "0", background: "none",
          }}
        onClick={()=> onDeleteItem(item.id)}  >
          X
        </button>
      </li>
    );
  }