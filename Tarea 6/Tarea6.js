class graph{
    
    constructor(){
        this.nodesPerson=[]
        this.nodesCity=[]
        this.adjListPerson={}
        this.adjListCity={}
    }

    addPerson(person={Name:String,Age:Number}) {
        this.nodesPerson.push(person);
        console.log(`${person.Name} fue agregada correctamente a los nodos de personas`);
        this.adjListPerson[person]=[]
    }
    addCity(city={NameCity:String}){
        this.nodesCity.push(city);
        console.log(`${city.Name} fue agregada correctamente a los nodos de ciudades`);
        this.adjListCity[city]=[]
    }
    addEdge(node1=String,node2=String){
        this.adjListPerson[node1.Name].push(node2.NameCity)
        this.adjListCity[node2.NameCity].push(node1.Name)
    }

    printGraph(){
        console.log(this.adjListPerson)
        console.log(this.adjListCity)

    }

    searchNode(value){
        if(!this.nodes.length){
            return ;
        }
        return this.nodes.find(item => item ===value);
    }

    printAdjacency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value])
        }else{
            return ;
        }
    }
}


const graaph = new graph;
const person={
    Name:'Juan',
    Age:20
}
const city={
    NameCity:'Cali'
}
graaph.addPerson(person);
graaph.addCity(city);

console.log(graaph)
console.log(graaph.addEdge('Juan','Cali'));