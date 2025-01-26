interface Info {
    name : string,
    age : number,
    greet(phrase : string) : void
};


class Person implements Info {
    name : string
    age : number 

    constructor( n : string , a : number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(phrase);
    }
}


const om = new Person("om",21);

om.greet("whooo haaaa whoooo haaaa whooooooooooooo hs hs hs hs hs");