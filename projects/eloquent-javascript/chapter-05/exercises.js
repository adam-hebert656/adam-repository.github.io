// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  
  // // ORIGINAL ANSWER W/O REDUCE
  // // declare an empty array
  // let flatArr = [];
  
  // // use a for loop to iterate over the outer array
  // for (let i=0; i < arr.length; i++) {
    
  //   // use a for loop to iterate over the inner arrays
  //   for (let j=0; j < arr[i].length; j++) {
      
  //     // push the value into the flatArr
  //     flatArr.push(arr[i][j]);
  //   }
  // }
  
  // // return the flatArr
  // return flatArr;
  
  
  // ANSWER W/ REDUCE
  return arr.reduce( (start, currentValue) => start.concat(currentValue), [] );
  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  
  // if the value fails the test function, stop the function
  if (!test(value)) {
    return
    
    // otherwise...
  } else {
    
    // apply the value to the body function
    body(value);
    
    // run the update function on the value and use that as the new value on a loop call
    loop(update(value), test, update, body);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, func) {
  for (let i=0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}



// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
