var  arr,invalidd;
arr = [1,4,5,6,2,15];

invalidd = arr.some((num) => {
    return(num<2);
})

//// isValid is true