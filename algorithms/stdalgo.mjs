// Standard Algorithm Library for NodeJS
// May have undefined behaviour for strings ... for now

// some algorithms are specialised for specific structures
// hence those algorithms will be available as a class-method

// finds the Minimum value through iteration and returns it
export const minVal = function(arr) {
    var elementPtr = arr[0];
    for(var element in arr) {
        if(element < elementPtr)
            elementPtr = element;
    }

    return elementPtr;
}

// finds the Maximum value through iteration and returns it
export const maxVal = function(arr) {
    var elementPtr = arr[0];
    for(var element in arr) {
        if(element > elementPtr)
            elementPtr = element;
    }

    return elementPtr;
}

// generate a fibonacci sequence up to a specified range
export const generateFib = function(range) {
    let ptr = 0; let ptr2 = 1;
    console.log(ptr); console.log(ptr2);

    for(var num = 0; num <= range; num++) {
        var newPtr = ptr + ptr2;
        ptr = ptr2;
        ptr2 = newPtr;
    }
}

// finds the nth term in a fibonacci sequence
// -- Recursive exmaple --
export const findFib = function(nterm) {
    // Recursive "base-case"
    if(nterm <= 1)
        return nterm;
    else
        return (findFib(nterm - 1) + findFib(nterm - 2));
}