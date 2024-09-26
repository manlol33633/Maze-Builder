// File: maze.js
// Create a random maze

// Create the maze
var maze = new Array(10);
for (var i = 0; i < maze.length; i++) {
  maze[i] = new Array(10);
}

// Create the walls
for (var i = 0; i < maze.length; i++) {
  for (var j = 0; j < maze[i].length; j++) {
    if (Math.random() > 0.7) {
      maze[i][j] = 'wall';
    } else {
      maze[i][j] = 'empty';
    }
  }
}

// Display the maze
var mazeDiv = document.getElementById('maze');
for (var i = 0; i < maze.length; i++) {
  for (var j = 0; j < maze[i].length; j++) {
    var cellDiv = document.createElement('div');
    cellDiv.style.width = '40px';
    cellDiv.style.height = '40px';
    cellDiv.style.display = 'inline-block';
    if (maze[i][j] === 'wall') {
      cellDiv.style.backgroundColor = 'black';
    }
    mazeDiv.appendChild(cellDiv);
  }
  var br = document.createElement('br');
  mazeDiv.appendChild(br);
}