import { useMemo, useState } from "react";

export function Assignment3(){
    const [items, setItems] = useState([
        {name:'Apple' , price: 10},
        {name: 'pinapple', price : 20},
        {name: 'banana', price : 30}
    ]);
    const [count,setCount] = useState(0);

    let totalPrice = useMemo(()=>{
        console.log('expensive operation ran');
        let value = 0;
        for(let i = 0; i < items.length; i++){
            value += items[i].price;
        }
        return value;
    }, [items]);
    
    return (
        <div>
            {
                items.map((item , index) => (
                    <h4 key={index}>item : {item.name} , price : {item.price}</h4>
                ))
            }
            <h1>totalPrice : {totalPrice}</h1>
            <button 
                onClick={()=> {setCount(count + 1)}}
            >count {count}</button>
        </div>
    )
}