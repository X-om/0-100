import Product from "./Product";
import Cart from "./Cart";
import { useMemo } from "react";
export default function Home() {
    const productList = useMemo(() => [
        { id:1 ,name: "iPhone 14 Pro", price: 1299 },
        { id:2 ,name: "Samsung Galaxy S23", price: 1199 },
        { id:3 ,name: "MacBook Air M2", price: 1099 },
        { id:4 ,name: "Dell XPS 13,", price: 999 },
        { id:5 ,name: "Sony WH-1000XM5", price: 399 },
        { id:6 ,name: "JBL Flip 6 Speaker", price: 129 },
        { id:7 ,name: "iPad Pro 11\"", price: 899 },
        { id:8 ,name: "Apple Watch Series 9", price: 499 },
        { id:9 ,name: "GoPro Hero 12", price: 399 },
        { id:10 ,name: "Canon EOS R7", price: 1499 },
        { id:11 ,name: "Lenovo Yoga 7i", price: 849 },
        { id:12 ,name: "ASUS ROG Phone 7", price: 1099 },
        { id:13 ,name: "Nintendo Switch OLED", price: 349 },
        { id:14 ,name: "Samsung 4K Monitor", price: 299 },
        { id:15 ,name: "HP Envy x360", price: 799 },
        { id:16 ,name: "Bose SoundLink Flex", price: 149 },
        { id:17 ,name: "Google Pixel 8 Pro", price: 999 },
        { id:18 ,name: "DJI Mini 4 Pro Drone", price: 759 },
        { id:19 ,name: "Logitech MX Master 3S", price: 99 },
        { id:20 ,name: "Kindle Paperwhite", price: 169 },
        { id:21 ,name: "Razer Blade 15", price: 1899 },
        { id:22 ,name: "OnePlus Pad", price: 479 },
        { id:23 ,name: "Fitbit Charge 6", price: 159 },
        { id:24 ,name: "Samsung Galaxy Tab S9", price: 89 }
    ], [])

    return (
        <div>
            <div>
                <Cart />
            </div>
            <div
                id="productsdiv"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "20px",
                }}
            >
               {productList.map((product)=>(
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
       
                />
               ))}
            </div>

        </div>
    )
}