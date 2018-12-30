var names = ["david","Chyntia","raymond","clayton","mike","jennifer"];
var namestr = names.join();
print(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
print(namestr);// David,Cynthia,Raymond,Clayton,Mike,Jennifer

//How concat work
var cisDept = ["mike","clinton","terril","danny","jenifer"];
var dmpDept = ["raymond","chyntia","brian"];
var itDiv = cisDept.concat(dmpDept);
print(itDiv);
itDiv = dmpDept.concat(cisDept);
print(itDiv);

//be shifted up one position before the new data is added. Here is some
//code to illustrate this scenario:

let nums = [2,3,4,5];
let newnum =1;
let N = nums.length;
for (var i = N; i > 0; --i){
    nums[i] = nums[i-1];
}
nums[0] = newnums;
console.log(nums);