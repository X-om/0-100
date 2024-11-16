class car{
    constructor(company,model,color,engine,types,topSpeed){
        this.company = company;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.types = types;
        this.topSpeed = topSpeed;
    }

    static getType() { console.log("This is JDM mode !")}

    getCarInfo(){
        console.log("The " + this.company + " " + this.model + " " + this.types + " " + this.engine + " in " + this.color + " with " + 
            this.topSpeed + " top speed !");
    }
}

const player1 = new car("Honda" , "civic" , "black" , "V8" , "drift edition","321 :: km/h");
const player2 = new car("BMW" , "M8" , "black" , "V12" , "compition","498 :: km/h");

player1.getCarInfo();
player2.getCarInfo();

car.getType();
