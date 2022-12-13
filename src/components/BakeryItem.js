// TODO: create a component that displays a single bakery item
import React from 'react';

function BakeryItem(prop){
    

    const handleClick = () =>{
        prop.onCart([...prop.cart,prop.item]);
    }
        return(
            <div className="item">
                <img src = {prop.item.image}></img>
                <h3>{prop.item.name}</h3>
                <h3>${prop.item.price}</h3>
                <button onClick={handleClick}>Add</button>
            </div>
        )
}

export default BakeryItem;
