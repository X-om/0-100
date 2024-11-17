import { useMemo, useState } from "react";

const words = ["Harmony", "Pineapple", "Galaxy", "Momentum", "Spectrum", "Lighthouse", "Whisker", "Crescent", "Echo", "Breeze"];
const totalLines = 1000;
const allWords = [];
for(let i = 0; i < totalLines; i++){
    let sentense = "";
    for(let j = 0; j < words.length; j++){
        sentense += words[Math.floor(words.length * Math.random())];
        sentense += " ";
    }
    allWords.push(sentense);
}



export function Assignment2(){
    const [sentences, setSentences] = useState(allWords);
    const [input, setInput] = useState("");
    const [count,setCount] = useState(0);

    const filterSentences = useMemo(()=>{
        console.log('eexpensive operation');
        return sentences.filter(x => x.includes(input));
    }, [sentences,input]);
    

    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>count {count}</button>
            <br></br>
            <input type='text' onChange={(e)=>{setInput(e.target.value)}}></input>
            {
                filterSentences.map((word) => (
                    <h4>{word}</h4>
                ))
            }
        </div>
    )
}