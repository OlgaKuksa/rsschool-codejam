module.exports=function sumOfOther(arr) {
  let arrSum = arr.reduce((res, item) => (res += item), 0);
  return arr.map(item => arrSum - item);
}

