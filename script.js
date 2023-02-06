"use strict";

const maze = document.querySelector(".maze-container");

// create a function that creates the div boxes with a custom class
// create a function that calculates the width of the maze and the number of divs that i can fit in it

const mazeWidth = maze.offsetWidth;

function createBox() {
	const box = document.createElement("div");
	box.classList.add("box");

	return box;
}

for (let i = 0; i <= 713; ++i) {
	maze.append(createBox());
}
