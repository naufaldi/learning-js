var arr , inValid;

arr = [1,4,52,62,62,];
inValid = arr.every((num) => {
    return (num <10);
})

//isValid is false
//a callback function against each item in the array. It will return true if they all
//conform, or false if one or more fails to: