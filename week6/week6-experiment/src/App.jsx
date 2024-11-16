import React, { useEffect, useState } from "react";


/*
function App() {
   return (
    <div>  
      <Header title={"Hello"}></Header>
      <Header title={"Hello"}></Header>
    </div>
  )

  1
  function Header({title}){
    return <div>
        <h1>{title}</h1>
    </div>
  }
}
*/


// ========= re-render intro (everything re-renders even if sigle thing changes in state)

/*
function App(){
    const [value,setValue] = useState("om");
    return <>
        <button onClick={change}>click me to change the content of the name</button>
        <Header name = {value}></Header>
        <Header name= {"Om 1"}></Header> 
        <Header name= {"Om 2"}></Header> 
        <Header name= {"Om 3"}></Header> 
        <Header name= {"Om 4"}></Header> 
        <Header name= {"Om 5"}></Header> 
        <Header name= {"Om 6"}></Header> 

    </>

    function change(){
        setValue(Math.random());
    }
    
    function Header({name}){
        return <>
            <h1>My name is {name}</h1>
        </>
    }
}
*/

//============= prevent re-rendering 
/*
function App(){
    return<>
        <HeaderWithButton></HeaderWithButton>
        <Header name={"Hello World"}></Header>
        <Header name={"Hello World"}></Header>
        <Header name={"Hello World"}></Header>
        <Header name={"Hello World"}></Header>
    </>
}


function HeaderWithButton(){
    const [value,setValue] = useState("om");


    function change(){
        setValue(Math.random());
    }

    return <>
        <button onClick={change}>click me to change the content of 1st title</button>
        <Header name={value}></Header>
    </>
}

function Header({name}){
    return<>
        <h1>my name is {name}</h1>
    </>
}
*/



// ================ using memo

// function App(){

//     const [value,setValue] = useState("om");
//     const [newVal,setNewval] = useState("Hello This is another state variable");
    
//     function change(){
//         setValue(Math.random());
//     }

//     function change2(){
//         setNewval("Hello This is another state variable " + Math.random());
//     }

//     return <div>
//         <button onClick={change}>click me to change the content of the name</button>
//         <br/><br/><br/><br/><br/><br/><br/>
//         <button onClick={change2}>click me to change another state variable</button>
//         <br/><br/><br/><br/><br/><br/><br/>
//         <Header name = {value}></Header>
//         <br/><br/>
//         <Header name= {newVal}></Header> 
//         <br/><br/>
//         <Header name= {"Om 2"}></Header> 
//         <br/><br/>
//         <Header name= {"Om 3"}></Header> 
//         <br/><br/>
//         <Header name= {"Om 4"}></Header> 
//         <br/><br/>
//         <Header name= {"Om 5"}></Header> 
//         <br/><br/>
//         <Header name= {"Om 6"}></Header>
//         <br/><br/>
//     </div>
   
// }
// const Header = React.memo(function Header ({name}){
//     return <>
//         <h1>My name is {name}</h1>
//     </>
// })



// ============== adding keys to the child component 


/*
let counter = 4;

function App(){
   
    const [todos,setTodos] = useState([
        {
            id : 1,
            title : "Name",
            description : "Hello My Name Is Om"
        },
        {
            id : 2,
            title : "Hello",
            description : "How are you doing"
        },
        {
            id : 3,
            title : "Bye Bye",
            description : "Please play with me"
        }
    ]);

    function add(){
        setTodos([...todos,{
            id : counter++,
            title : "New Title",
            description : "New Description"
        }])
    }

    return <>
        
        <button onClick={add}>Add TODO</button>

        {todos.map(todo =>
            <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
        )}
    </>
}
function Todo({title,description}){
    return <div style={{backgroundColor:"beige"}}>
        <h1>{title}</h1>
        <h6>{description}</h6>
        <br></br>
    </div>

}

*/

// ========== wrapper component --- just a intro to the wrapper not actual wrapper 

// function App(){
//     return <> 
//         <CardWrapper innerComponent={<Textcomponent/>}></CardWrapper>
//     </>
// }

// function Textcomponent(){
//     return <div style={{textAlign:"center"}}>
//         <h1>Hi there</h1>
//     </div>
// }

// function CardWrapper({innerComponent}){
//     return <div style={{border : "2px solid black" , boxShadow: "-5px 5px 10px 0px black"}}>
//         {innerComponent}
//     </div>
// }



// function App(){
//     const [todos,setTodos] = useState([]);
    
//     useEffect(() => {
//         const fetchTodo = ()=>{
//             fetch("http://localhost:3000/todos").then(async function (res) {
//                 const json = await res.json();
//                 setTodos(json.todos);
//             });
//         };

//         fetchTodo();

//         const intervel = setInterval(fetchTodo,5000);
        
//         return () => clearInterval(intervel);
//     },[]);


//     return (
//     <>
//         {todos.map(todo => (<Todos key={todo.id} id={todo.id} note={todo.note}/> ) )}
//     </>
//     )
// }


// function Todos({id,note}){
//     return (
//     <>
//         <h1>{id}</h1>
//         <h2>{note}</h2>
//     </>
//     )
// }




// Assignment 

function App(){

    const [todos , setTodos] = useState([]);

    function getData(){
        fetch("http://localhost:8000/todos")
                .then(async function(res){
                const newTodos = await res.json();
                console.log(newTodos.length);
                setTodos(newTodos)
            });
    }
    useEffect(function(){
        getData();
        setInterval(()=>{
            getData();
        },10000)
    },[]); 

    return (
        <div>
            {
                todos.map(todo => (
                    <CardWrapper>
                        <Todo key={todo.id} title={todo.title} description={todo.description}/>
                    </CardWrapper> 
                ))
            }
        </div>
    )
        
}

function CardWrapper({children}){
    return (
        <div 
        style={{
            padding: "10px",
            width : "fit-content",
            backgroundColor : "beige",
            border : "1px solid black",
            borderRadius : "10px",
            justifyContent: "center",
            alignItems : "center",
            marginBottom : "10px"
        }}
        >
        {children}
        </div>
    )
}


function Todo({title,description}){
    return (
        <div style={{
           padding : "5px"
        }}>
            <h1>Title : {title}</h1>
            <h2>Description : {description}</h2>
        </div>
    )
}


export default App;
