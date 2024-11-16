import { useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from 'axios';
// useState() 
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//         <button onClick={()=>{
//           setCount(count + 1);
//         }}>count {count}</button>
//     </div>
//   )
// }


//useEffect()
// function App(){
//   const [newIncome , setIncome] = useState({});
//   const [finalIncome , setFinalIncome] = useState({});
//   const [getData,setGetData] = useState(0);

//   useEffect(()=>{
//     axios.get('http://localhost:8000/income')
//       .then(async (res)=>{
//       const obj = await res.data;
//       console.log(obj);
//       setIncome(obj);
//     })
//   },[])
  
//   useEffect(()=>{
//     setTimeout(()=>{
//       setFinalIncome({
//         return : newIncome.income
//       })
//     },1000);
//   },[]);

  

//   return (
//     <div>
//         <h1>my newIncome is {newIncome.income} and finalIncome is {finalIncome.return}</h1>
//     </div>
//   )
// }



// useMemo()

function App(){
  const [data1,setData1] = useState();
  const [data2,setData2] = useState();
  const [finalReturn,setFinalData] = useState();

  useEffect(()=>{
    setData1(100);
    setData2(100);
  },[])


  useEffect(()=>{
    setTimeout(() => {
      setFinalData(100);
    }, 5000);
  })
  
  
  
  const dataSum = useMemo(()=>{
      console.log('hello before');
      return (data1 + data2);
  },[data1,data2])

  const incomeTaxReturn = (dataSum + finalReturn) * 0.3;

  return (
    <div>
        <h1>My final incometax return is {incomeTaxReturn}</h1>
    </div>
  )

}
export default App
