module.exports = function recursion(treeObj) {
  let pairedObjects={};
  function setPathLengthValuesPairs(obj, level) {
      if (obj.value) 
     {
         if (pairedObjects[level]) pairedObjects[level].push(obj.value);
         else pairedObjects[level]=[obj.value];
     };
      if (obj.left) setPathLengthValuesPairs(obj.left, level+1);
      if (obj.right) setPathLengthValuesPairs(obj.right, level+1);
  };
  setPathLengthValuesPairs(treeObj, 0);
  console.log(Object.values(pairedObjects));
  return Object.values(pairedObjects);
};
