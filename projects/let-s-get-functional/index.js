// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-adam-hebert");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    let maleArray = _.filter(array, (element, index, array) => element.gender === "male");
    return maleArray.length;
};

var femaleCount = function(array) {
  let femaleArray = _.filter(array, (element, index, array) => element.gender === "female");
  return femaleArray.length;
};

var oldestCustomer = function(array) {
    let oldestCustomerName= "";
    let testAge = 0;
    _.each(array, (element, index, collection) => {
        if (element.age > testAge) {
            testAge = element.age;
            oldestCustomerName = element.name;
        }
    });
    return oldestCustomerName;
};

var youngestCustomer = function(array) {
    let youngestCustomerName = "";
    let testAge = 150;
    _.each(array, (element, index, collection) => {
        if (element.age < testAge) {
            testAge = element.age;
            youngestCustomerName = element.name;
        }
    });
    return youngestCustomerName;
};

var averageBalance = function(array) {
    // declare an empty array to store every customer's balance
    let balanceArray = [];
    // declare a result variable
    let result;
    // use each on the given array to push every customer's balance into the balance array
    _.each(array, (element, index, collection) => {
        balanceArray.push(element.balance);
    });
    // use each on the balance array to remove the special characters from the balance strings
    _.each(balanceArray, (element, index, collection) => {
        balanceArray[index] = element.replace(/[^a-zA-Z0-9.]/g, "");
    });
    // use each on the balance array to convert all the strings to numbers
    _.each(balanceArray, (element, index, collection) => {
       balanceArray[index] = parseFloat(element, 10);
    });
    // get an average of all the numbers in the balance array
    result = _.reduce(balanceArray, (prev, element, index) => {
        if (index === balanceArray.length - 1) {
            prev += element;
            return result = prev / balanceArray.length;
        } else {
            return prev += element;
        }
    }, 0);
    return result;
};

var firstLetterCount = function(customersArray, letterToTest) {
    let count = 0;
    _.each(customersArray, (customer, index, array) => {
        if (customer.name[0].toLowerCase() === letterToTest.toLowerCase()) {
            count += 1;
        }
    });
    return count;
};

var friendFirstLetterCount = function(customersArray, customerToTest, letterToTest) {
    let customerObject;
    _.each(customersArray, (element, index, array) =>{
        if (element.name.toLowerCase() === customerToTest.toLowerCase()) {
            customerObject = element;
        }
    });
    return firstLetterCount(customerObject.friends, letterToTest);
};

var friendsCount = function(customersArray, customerToTest) {
    let result = [];
    _.each(customersArray, (customer, index, array) => {
        _.each(customer.friends, (friend, index, array) => {
            if(friend.name.toLowerCase() === customerToTest.toLowerCase()) {
                result.push(customer.name);
            }
        });
    });
    return result;
};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
