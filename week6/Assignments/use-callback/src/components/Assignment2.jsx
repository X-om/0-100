import { memo, useCallback, useState } from "react";

export function Assignment2(){
    const [inputText,setInputText] = useState('');

    const showAlert = useCallback(()=>{
        alert(inputText);
    }, [])

    return (
        <div>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}></input>
            <Alert setAlert={showAlert}/>
        </div>
    )
}

function Alert({setAlert}){
    return <button onClick={setAlert}>show alert</button>
}