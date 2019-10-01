const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
  console.log(bonusCalculator(employees[i]));
  console.log(employeeBonus(employees[i]));
}

function bonusCalculator(onePerson) {
  let percentage;

  if (onePerson.reviewRating <= 2) {
    percentage = 0;
    

  } else if (onePerson.reviewRating === 3) {
    percentage = 4;
    
  } else if (onePerson.reviewRating === 4) {
    percentage = 6;
    
  } else {
    percentage = 10;
    
  }

  if (onePerson.employeeNumber.length === 4) {
    percentage += 5;
    
  }

  if (Number(onePerson.annualSalary) > 65000) {
    percentage -= 1;
    
  }

  if (percentage > 13) {
    percentage = 13;
    
  }
  if (percentage < 0) {
    percentage = 0
    
  }
  return percentage;
}

function employeeBonus(onePerson) {
  let newObject = {};
  newObject.name= onePerson.name;
  let percentage = bonusCalculator(onePerson);
  let decimalPercentage= percentage * .01;
  newObject.percentage = decimalPercentage;
  let totalBonus = Math.round(decimalPercentage * onePerson.annualSalary);
  newObject.totalBonus = totalBonus;
  newObject.totalCompensation = totalBonus + Number(onePerson.annualSalary);

  return newObject;
  
}
console.log(employeeBonus(employees[1]));

// bonusCalculator(employees[0]);
// bonusCalculator(employees[1]);
bonusCalculator(employees[2]);
// bonusCalculator(employees[3]);
// bonusCalculator(employees[4]);
//   let ouput = {
//     name: employees.name,
//     bonusPercentage: percentage,
//     totalCompensation: adjustedCompensation,
//     totalBonus: totalBonus




//   }
//   return output
// }

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
