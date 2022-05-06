//            Z
//            ^
//  D <- G -> Y
//       ^
// A -> B

const graph = {
  a: ['b'],
  b: ['g'],
  g: ['d', 'y'],
  y: ['z'],
  z: [],
  d: [],
}

function depthFirstPrint(graph, startPoint = 'a') {
  console.log('depth first search');
  stack = [startPoint]

  while(stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

function breadthFirstRecursive(graph, startPoint = 'a') {
  console.log('breadth first search - RECURSIVE');
  stack = [startPoint]

  const neighbors = graph[startPoint];
  
  delete graph[startPoint];

  for (let neighbor of neighbors) {
    console.log(neighbor);
    breadthFirstRecursive(graph, neighbor)
  }
}

function breadthFirstPrint(graph, startPoint = 'a') {
  console.log('breadth first search');
  stack = [startPoint]

  while(stack.length > 0) {
    const current = stack.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

depthFirstPrint(graph);
console.log(' --- ');
breadthFirstRecursive(graph);
// breadthFirstPrint(graph);