// Task-5 : implement queue..

class Queue{
    constructor(){
        this.items = []
    }

    // Add method.
    enqueue(data){
        this.items.push(data);
    }

    // remove method.
    dequeue(){
        if(this.items.length == 0){
            console.log("Queue is empty!")
            return;
        }
        return this.items.shift();
    }

    // view the first element
    front(){
        return this.items[0];
    }

    // get size of the queue.
    size(){
        return this.items.length
    }

    // isEmpty method 
    isEmpty(){
        return this.items.length === 0;
    }
}


// printer jobs implementation through queue

const printer = new Queue();

printer.enqueue("job 1")
printer.enqueue("job 2")
printer.enqueue("job 3")
printer.enqueue("job 4")
printer.enqueue("job 5")
printer.enqueue("job 6")

while(!printer.isEmpty()){
    console.log(printer.dequeue());
}
