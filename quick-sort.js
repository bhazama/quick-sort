
var arrayz = [5, 2, 7, 4, 3, 6];


function sortingFunctions(){

  return{
    quickSort : quickSort,
    selectionSort : selectionSort,
  };


  function quickSort(arr){
    //break case: when nothing is left in the array after splicing it out (pivot)
    if(arr.length === 0){
      return arr;
    }

    //takes out the first number in array and stores it as pivot.
    var pivot = arr.splice(0,1)[0];
    var lessThanArr = [];
    var greaterThanArr = [];
    //console.log("PIVOT: ", pivot);
    //console.log("ARR: ", arr);

    //checks if each element in array is less than / greater than pivot.
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < pivot){
        lessThanArr.push(arr[i]);
        //console.log(arr[i]);
      }else{greaterThanArr.push(arr[i]);
        }
      }

    //recursively does the quickSort function for less than subArray
    //then concats this to the pivot and the quickSort(ed) greater than subArray
    return quickSort(lessThanArr).concat(pivot, quickSort(greaterThanArr));



}

//SECOND WAY OF SOLVING QUICKSORT
/*function quicksort(arr) {
  // base case: if arr.length < 2, return arr
  if (arr.length < 2) { return arr; }

  // I will always pick first index
  var pivot = arr.shift();

  // loop through the array
  var left = [];
  var right = [];
  while (arr.length) {
    var current = arr.shift();
    // less than pivot goes left
    if (current < pivot) { left.push(current); }
    // greater than pivot goes right
    else { right.push(current); }
  }

  // return concat [ left, pivot, right ]
  var sortedLeft = quicksort(left);
  var sortedRight = quicksort(right);
  return sortedLeft.concat(pivot, sortedRight);
}
*/



  function selectionSort(arr){
    var start = arr[0];
    var emptyArr = [];
    var key;
    var newkey;
    var min = Math.min(arr);
    console.log(min);
    //console.log("MIN:",min);
    //var newArr = [];
    //var min = Math.min(arr);
    //var key;
    //console.log(key);
    for(var i = 1; i < arr.length; i++){
      if(start > arr[i]){

      }

    }


   //return min;

  }

  function mergeSort(arr){



  }





}

var sort = sortingFunctions();
console.log(sort.quickSort(arrayz));
//console.log(sort.selectionSort(arrayz));