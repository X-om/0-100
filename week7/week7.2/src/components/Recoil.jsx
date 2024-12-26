import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../store/atom/count";

export default function Recoil(){
    return(
        <div>
            <RecoilRoot>
                <ChildA/>
            </RecoilRoot>
        </div>
    )
}

function ChildA(){
    console.log("child A renders");
    return (
        <div>
            <ChildB/>   
        </div>
    )
}
function ChildB(){
    console.log("child B renders");
    return (
        <div>
            <ChildC/>
        </div>
    )
}
function ChildC(){
    console.log("child C renders");
    return(
        <div>
            <CountRenderer/>
            <Buttons/>
            <IsEven/>
        </div>
    )
    
}
function CountRenderer(){
    console.log("child CountRenderer renders");
    const count = useRecoilValue(countAtom);
    return(
        <div>
            <b>
                count {count}
            </b>
        </div>
    )
}
function Buttons(){
    console.log("child Buttons renders");
    const setCount = useSetRecoilState(countAtom);
    return(
        <div>
            <button onClick={()=>{
                setCount(count => count + 1);
            }}>Increment count</button>

            <button onClick={()=>{
                setCount(count => count - 1);
            }}>Decrement count</button>
        </div>
    )
}

function IsEven(){
    const isEven = useRecoilValue(evenSelector);

    return(
        <>
            {(isEven) ? "It is even" : "It is odd"}
        </>    
    )
}