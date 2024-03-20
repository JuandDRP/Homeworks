class graph {
    constructor() {
        this.nodesPerson = []
    }

    addPerson(person) {
        this.nodesPerson.push(person)
    }
    
}



const graaph = new graph;
const person={
    Name:'Juan',
    Age:20
}
graaph.addPerson(person)
console.log("Persona agregada");

console.log(graaph)
