// type keyInput = "up" | "down" | "left" | "right";

// // without enums
// function doSomething(key : keyInput) : void {
//     if(key == "up"){
//         console.log("going up");
//     }
//     if(key == "down"){
//         console.log("going down");
//     }
//     if(key == "left"){
//         console.log("going left");
//     }
//     if(key == "right"){
//         console.log("going right");
//     }
// }

// doSomething("left");

// with enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function doSomething(keyPressed: Direction): void {
    if(keyPressed == Direction.Up){
        console.log("going up");
    }
    if(keyPressed == Direction.Down){
        console.log("going down"); 
    }
    if(keyPressed == Direction.Left){
        console.log("going left");
    }
    if(keyPressed == Direction.Right){
        console.log("going right");
    }
    
}

doSomething(Direction.Down);
