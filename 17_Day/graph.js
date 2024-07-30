// Task-9 : graph implementation

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  bfs(start) {
    const queue = [start];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      console.log(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }

  dfs(start) {
    const visited = {};

    const helper = (vertex) => {
      console.log(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          helper(neighbor);
        }
      });
    };

    helper(start);
  }
}

//