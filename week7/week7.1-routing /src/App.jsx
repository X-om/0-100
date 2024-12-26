import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// function App() {
//   return (
//     <div>

//       <div style={{color:"red"}}>
//         {/* this top level navbar div will remain constant across the pages
//         since its outside the BrowserRouter component */}

//         <h1>This is the navbar of this project</h1>

//       </div>

//       <BrowserRouter>
//         <Routes>
//           <Route path='/dashboard' element={<Dashboard/>}></Route>
//           <Route path='/' element={<Landing/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// using buttons 
// bellow is not the correct way of doing the client side routing it will still do the hard reload
// the correct way to do client side routing is to use useNavigate() hook  
// function App(){
//   return(
//     <div>
//         <div style={{display:"flex", gap:"100px"}}>
//           <button onClick={()=>{
//             window.location.href = '/'
//           }}>Landing Page</button>

//           <button onClick={()=>{
//             window.location.href = '/dashboard'
//           }}>Dashboard Page</button>
//         </div>


//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<Landing/>}></Route>
//             <Route path='/dashboard' element={<Dashboard/>}></Route>
//           </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// using useNavigate() hook 

// function App(){

//   return(
//     <div>
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path='/' element={<Landing/>}></Route>
//           <Route path='/dashboard' element={<Dashboard/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div>
//         <button onClick={()=>{
//           navigate('/');
//         }}>Landing Page </button>

//         <button onClick={()=>{
//           navigate('/dashboard');
//         }}>dashboard page</button>
//       </div>
//     </div>
//   )
// }


// React.lazy() loading final and optimal CSR

const Dashboard = React.lazy(()=>import('./components/Dashboard'));
const Landing = React.lazy(()=>import('./components/Landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => {
          navigate('/');
        }}>Landing Page </button>

        <button onClick={() => {
          navigate('/dashboard');
        }}>dashboard page</button>
      </div>
    </div>
  )
}


export default App
