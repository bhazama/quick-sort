
var arrayz = [2, 5, 7, 4, 3, 6];


function sortingFunctions(){

  return{
    quickSort : quickSort
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



  function bubbleSort(){

  }




}

var sort = sortingFunctions();
console.log(sort.quickSort(arrayz));