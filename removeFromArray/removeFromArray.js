const removeFromArray = function(...args) {
    // pull out list of arguments in the array
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // loop through the array
    array.forEach((item) => {
        // push every element into the new array
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
    
};


module.exports = removeFromArray
