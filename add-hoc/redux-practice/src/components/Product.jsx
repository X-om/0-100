import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../store/slices/cart";
import { memo, useCallback, useEffect } from "react";




function ProductUi({name,price,onAdd,onRemove,isItemAdded}){
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
            width: "250px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            fontFamily: "Arial, sans-serif",
            margin: "16px auto",
            textAlign: "center"
        }}>
            <h4 style={{ margin: "0 0 8px", color: "#555" }}>Name: {name}</h4>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>Price: ₹{price}</h2>
            <div style={{ display: "flex", gap: '5px' }}>
                <button 
                    onClick={onAdd}
                    style={{ backgroundColor: "#3DB2FF", color: "white", padding: "10px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                    Add Item
                </button>

                <button 
                    disabled={!isItemAdded}
                    onClick={onRemove}
                    style={{ backgroundColor: "#FF2442", color: "white", padding: "10px 16px", border: "none", borderRadius: "6px", cursor: "pointer", marginLeft: "10px",}}>
                    Remove Item
                </button>

            </div>

        </div>)

}

const MemoizedProductUi = memo(ProductUi);

function Product({id,name,price}){
    const dispatch = useDispatch();
    const isItemAdded = useSelector(state => state.cart.id.includes(id))

    console.log(`${name} rendered`)

    const onAdd = useCallback(()=>{
        dispatch(addItem({price, id}));
    }, [id,price,dispatch])

    const onRemove = useCallback(()=>{
        dispatch(removeItem({price, id}));
    },[id,price,dispatch])

    return(
        <MemoizedProductUi
            name={name}
            price={price}
            onAdd={onAdd}
            onRemove={onRemove}
            isItemAdded={isItemAdded}

        />
    )
}

export default memo(Product);