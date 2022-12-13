import "./App.css";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/bakeryitem.js"
import { useState,useEffect } from "react";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
const [cart,setCart] = useState([]);
const [total, setPrice] = useState(0);

const updatePrice = () =>{
  let sum=0;
  if (cart.length==0) {
    var money = 0;
    sum = money;
    setPrice(sum)
  }
  else{
    for (var i=0;i<cart.length;i++){
      sum += cart[i].price;
    }
  }
  setPrice(sum)

}

useEffect(()=>{
  updatePrice();
})

  return (
    <div className="App">
      <h1>Dani's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      <div className="bakeryDiv">
        {bakeryData.map((item,index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem key={index} item={item} cart={cart} onCart={setCart} total={total} onPrice={setPrice}/>
           
        ))}
        
      </div>
       
{/* got help from Kayla Mukai */}
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item,index)=><p key={index}>{item.name}</p>)}
        <h3>total: {total}</h3>
      </div>
    </div>
  );
}

export default App;
