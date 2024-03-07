class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

}

class TODOs {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node)

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = NewNode;
        }
    }


    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Titulo ${node.value.title} Descripcion ${node.value.description} | Next: ${node.next?.value || null} `)
            node = node.next;
        }
    }


}


let todoList = new TODOs();

let decision = prompt("Digite 1 para agregar una tarea o 2 para mostrar las tareas");

let objTask = { title: "tarea", description: "descipcion" };
todoList.append(objTask);
console.log("Tarea agregada");
todoList.print();





