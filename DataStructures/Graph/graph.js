class Graph {
    constructor() {
        this.numberOfNode = 0
        this.adjacentList = {}
    }

    addNode(value) {
        if (!this.adjacentList[value]) {
            this.adjacentList[value] = []
            this.numberOfNode += 1
        }
    }

    addEdge(node1, node2) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            return
        }
        const set1 = new Set(this.adjacentList[node1])
        const set2 = new Set(this.adjacentList[node2])
        if (!set1.has(node2)) {
            this.adjacentList[node1].push(node2)
        }
        if (!set2.has(node1)) {
            this.adjacentList[node2].push(node1)
        }
    }

    showConnections() {
        for (let node in this.adjacentList) {
            let res = ''
            for (let i = 0; i < this.adjacentList[node].length; i++) {
                res += this.adjacentList[node][i] + ' '
            }
            console.log(`${node}-->${res}`)
        }
    }
}

const graph = new Graph()
graph.addNode(0)
graph.addNode(1)
graph.addNode(2)
graph.addNode(3)
graph.addNode(4)
graph.addNode(5)
graph.addNode(6)
// graph.addEdge(0, 1)
// graph.addEdge(0, 2)
// graph.addEdge(1, 0)
// graph.addEdge(1, 2)
// graph.addEdge(1, 3)
// graph.addEdge(2, 0)
// graph.addEdge(2, 1)
// graph.addEdge(2, 4)
// graph.addEdge(3, 1)
// graph.addEdge(3, 4)
// graph.addEdge(4, 2)
// graph.addEdge(4, 3)
// graph.addEdge(4, 5)
// graph.addEdge(5, 4)
// graph.addEdge(5, 6)
// graph.addEdge(6, 5)
graph.addEdge(3, 1)
graph.addEdge(3, 4)
graph.addEdge(4, 2)
graph.addEdge(4, 5)
graph.addEdge(1, 2)
graph.addEdge(1, 0)
graph.addEdge(0, 2)
graph.addEdge(6, 5)
console.log(graph)
graph.showConnections()