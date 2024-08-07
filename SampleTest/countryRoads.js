const readline = require("readline")
function input() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(res => {
        rl.on('line', (value) => {
            rl.close()
            res(value)
        })
    })
}

class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
            return
        }

        const edge1 = this.adjacentList[vertex1].find(item => item.node == vertex2)
        const edge2 = this.adjacentList[vertex2].find(item => item.node == vertex1)

        if (!edge1) {
            this.adjacentList[vertex1].push({
                node: vertex2,
                weight
            })
        } else {
            edge1.weight = weight
        }

        if (!edge2) {
            this.adjacentList[vertex2].push({
                node: vertex1,
                weight
            })
        } else {
            edge2.weight = weight
        }
    }
}

function visitedList(graph) {
    const visited = {}
    for (let vertex in graph) {
        visited[vertex] = false
    }
    return visited
}

function DFS(graph, vertex, visited, t, max, temp) {
    visited[vertex] = true
    const arr = graph.adjacentList[vertex]

    for (let item of arr) {
        if (!visited[item.node]) {
            if (item.weight > max) {
                max = item.weight
            }
            if (item.node == t) {
                temp.push(max)
                max = Number.MIN_VALUE
            }
            DFS(graph, item.node, visited, t, max, temp)
        }
    }
}

function countryRoads(graph, t) {
    for (let vertex in graph.adjacentList) {
        let max = Number.MIN_VALUE, temp = []
        const visited = visitedList(graph)

        if (vertex != t) {
            DFS(graph, vertex, visited, t, max, temp)
            console.log(temp.length ? Math.min(...temp) : 'Impossible')
        } else {
            console.log(0)
        }
    }
}

async function main() {
    const testCases = await input()

    for (let i = 0; i < testCases; i++) {
        const graph = new Graph()
        const nAndM = await input()
        const m = nAndM.split(' ')[1]

        for (let i = 0; i < m; i++) {
            const line = await input()
            const vertex1 = line.split(' ')[0]
            const vertex2 = line.split(' ')[1]
            const weight = line.split(' ')[2]

            graph.addVertex(vertex1)
            graph.addVertex(vertex2)
            graph.addEdge(vertex1, vertex2, weight)
        }

        const t = await input()
        console.log(`Case ${i + 1}:`)
        countryRoads(graph, t)
    }
}
main()