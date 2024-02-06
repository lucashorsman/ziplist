// Without using underscore
function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error('Lists are not of equal length');
  }

  let result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }

  return result;
}

// Using underscore
function zipListTheSimpleWay(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error('Lists are not of equal length');
  }

  return _.flatten(_.zip(list1, list2));
}
let list1 = ['a','b','c']
let list2 = [1,2,3]
console.log(zipList(list1,list2))