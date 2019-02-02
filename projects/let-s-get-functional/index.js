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
    let maleArray = _.filter(array, (element) => element.gender === "male");
    return maleArray.length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, (count, element) => {
        if (element["gender"] === "female") {
            count += 1;
        }
        return count;
    }, 0);
    return females;
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
    let balanceArray = _.pluck(array, "balance");
    return _.reduce(balanceArray, (prev, element, index) => {
        balanceArray[index] = parseFloat(element.replace(/[^a-zA-Z0-9.]/g, ""), 10);
        if (index === balanceArray.length - 1) {
            prev += balanceArray[index];
            return prev / balanceArray.length;
        } else {
            return prev += balanceArray[index];
        }
    }, 0);
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
            if(friend.name === customerToTest) {
                result.push(customer.name);
            }
        });
    });
    return result;
};

var topThreeTags = function(customersArray) {
    // create a counts object
    let counts = {};
    // create a top3 array
    let topThree = [];
    // create a greatest varaible
    let greatest = 0;
    // create a greatestName variable
    let greatestName;
    // take a count of all tags
        // iterate through the customers array
    _.each(customersArray, (customer, index, array) => {
        // for each customer object, iterate through the customer's tags array
        _.each(customer.tags, (tag, index, array) => {
        // for each tag in the tags array, += 1 to the relevent key in the counts object
            if (isNaN(counts[tag])) {
                counts[tag] = 1;
            } else {
                counts[tag] += 1;
            }
        });
    });
    // iterate through the counts object
    function findGreatest(iterations) {
    // find the greatest count, add the name to the top3 array, delete the key in the object
        if (iterations > 0) {
            _.each(counts, (count, tag, object) => {
                if (count >= greatest) {
                    greatest = count;
                    greatestName = tag;
                }
            });
         topThree.push(greatestName);
         delete counts[greatestName];
         greatest = 0;
         findGreatest(iterations - 1);
        } 
    }
    findGreatest(3);
    // return the top3 array
    return topThree;
};

var genderCount = function(customersArray) {
  let counts = {male: 0, female: 0, transgender: 0};
  _.each(customersArray, (customer, index, array) => {
      counts[customer.gender] += 1;
  });
  return counts;
};

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
