//STACKS-- El ultimo que ingresa a la fila es el primero que sale!

class Book {

    constructor(nombre, isbn, author, editorial) {
        this.nombre = nombre;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }
    print() {
        console.log(this.stack);
    }
}

const stack = new Stack;
let objBook = new Book('Nombre', 'isbn', 'author', 'editorial');
stack.push(objBook);
console.log("Libro agregado");
stack.print(); // Llamamos al método print de la instancia de la clase TODOs

