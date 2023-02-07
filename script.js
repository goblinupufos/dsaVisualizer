"use strict";

const maze = document.querySelector(".maze");

// create a function that creates the div boxes with a custom class
// create a function that calculates the width of the maze and the number of divs that i can fit in it

function createBox(number) {
	const box = document.createElement("div");
	box.classList.add("box");
	// box.textContent = `${number}`;
	// box.textContent = `.`;
	// console.log(number);
	return box;
}

function renderMaze() {
	const mazeWidth = maze.offsetWidth;
	const mazeHeight = maze.offsetHeight;
	const boxesPerRow = Math.floor(mazeWidth / 26);
	const boxesPerCol = Math.floor(mazeHeight / 26);
	console.log(mazeWidth, mazeHeight);
	console.log(boxesPerRow, boxesPerCol);

	for (let row = 1; row <= boxesPerCol; ++row) {
		for (let col = 1; col <= boxesPerRow; ++col) {
			maze.append(createBox(col));
		}
	}
}
renderMaze();
