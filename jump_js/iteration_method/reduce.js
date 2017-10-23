var arr,total;
arr = [1,2,3,4,5];
total = arr.reduce((previous, current) => {
    return previous + current;
});
//total is 15