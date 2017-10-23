var arr,filtered;

arr = [1,2,3,4,5,7];
arr.filter((num) => {
    return (num < 5);
});

//filtered now contains [1, 2, 3, 4]