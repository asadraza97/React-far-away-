import { useState } from 'react'
import Logo from './Components/Logo'
import Form from './Components/Form'
import PackingList from "./Components/PackingList"
import Stats from './Components/Stats'


function App() {
  const [items, setItems] =useState([])

function handlerAddItems(item){
    setItems((items) => [...items, item])

}

function handlerDeleteItem(id){
  console.log(id);
      setItems(items => items.filter(item => item.id !== id))
}

function handleToggleItem(id){
  setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed }: item 
    )
    )
  }

  function handlerClearList(){
    const confirmed =window.confirm("Are you sure you want to delete item?")
    if(confirmed)setItems([]);
  }

  return (
    <div className='app'>

    <Logo/>
    <Form onAddItems ={handlerAddItems} />
    <PackingList items= {items} onDeleteItem ={handlerDeleteItem}  onToggleItem = {handleToggleItem}
    onClearList = {handlerClearList} />
    <Stats items = {items} />
    </div>
  )
}


export default App
