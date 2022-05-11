// After each step, run a console.log to show the data.
// You can comment out these logs as you move from task to task
    // Create an array of 5 different countries. 
	// Add a country to the beginning of the array, then to the end of it
    // Reverse the array,
    // Remove the last item of the array
    // Change the name of the 3rd item in the list to Costa Rica

// Math!: 
    // Find the average of Mary’s test scores:
    // -> 85, 90, 88, 83, 75, 91
    // If her average is over 85,
    // let her know that she has made the honor roll,
    // else, tell her she did not
let scores = [85, 90, 88, 83, 75, 91]

let average = scores.reduce((a, b) => a + b) / scores.length
average

// Pythagorean Theorem:
    // A Right Triangle has sides of 300 and 400,
    // what is the size of its longest side?
    // 500

    console.log(Math.sqrt(300**2 + 400**2))