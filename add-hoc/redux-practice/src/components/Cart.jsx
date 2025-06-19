import { useSelector } from "react-redux";

export default function Cart() {
    const items = useSelector((state) => state.cart.items);
    const price = useSelector((state) => state.cart.price);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    margin: "20px auto",
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f9f9f9",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h2 style={{ margin: 0, color: "#333" }}>Items: { items }</h2>
                <h2 style={{ margin: 0, color: "#2c3e50" }}>Price: ₹{ price }</h2>
            </div>

        </>
    )
}