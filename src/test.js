const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate population growth
function calculatePopulationGrowth(startingNumber, dailyIncrease, days) {
  let population = startingNumber;
  console.log("Day\tPopulation");

  for (let day = 1; day <= days; day++) {
    console.log(`${day}\t${population.toFixed(4)}`);
    population += population * (dailyIncrease / 100);
  }
}

// Get user input with readline
rl.question("Enter the starting number of organisms: ", (startingNumberInput) => {
  rl.question("Enter the average daily population increase (in %): ", (dailyIncreaseInput) => {
    rl.question("Enter the number of days to multiply: ", (daysInput) => {
      // Parse inputs to appropriate data types
      const startingNumber = parseFloat(startingNumberInput);
      const dailyIncrease = parseFloat(dailyIncreaseInput);
      const days = parseInt(daysInput, 10);

      // Validate input
      if (
        isNaN(startingNumber) || isNaN(dailyIncrease) || isNaN(days) ||
        startingNumber <= 0 || dailyIncrease <= 0 || days <= 0
      ) {
        console.log("Please enter valid positive numbers for all inputs.");
      } else {
        calculatePopulationGrowth(startingNumber, dailyIncrease, days);
      }

      rl.close();
    });
  });
});
