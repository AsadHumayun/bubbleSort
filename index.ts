/**
 * @author AsadHumayun
 */

import Chalk from "chalk";

/**
 * Sorts an array by utilising the bubble sort search algoithm
 * @param {number[]} arr Array (of numbers) to be sorted
 * @param {boolean} logTotalPassess Whether or not to log the total amount of passes
 * @returns {number[]} arr Sorted array
 */
function bubbleSort(arr: number[], logTotalPassess: boolean | null = false): number[] {
	const len: number = arr.length;
	let none: number = 0;
	let x: number = 0;
	let swapsTotal: number = 0;
	let passes: number = 0;
	let d: number, c: number = 0;
	while (passes < (len ^ 2) && none < 100) {
		if (arr[x] > arr[x + 1]) {
			d = arr[x];
			c = arr[x + 1];
			arr[x] = c;
			arr[x + 1] = d;
		}
		else {
			none++;
		}
		x++;
		swapsTotal++;
		if (x == len + len) {
			x = 0;
			passes++;
		}
		console.clear();
		//console.log(arr.join(', ')); // UNCOMMENT THIS LINE AND COMMENT OUT ABOVE LINE IN ORDER TO LOG EVERY STEP OR BUBBLE SORT.
	}

	console.log(arr);
	if (logTotalPassess) {
		console.log(Chalk.greenBright("List Sorted!"));
		console.log(Chalk.cyanBright('\n\nIn ' + passes + ' Passes'));
		console.log(Chalk.cyanBright('\n\nIn ' + swapsTotal + ' Swaps'));
	}
	return arr;
}

let arr = [2, 34, 1];
bubbleSort(arr, true);