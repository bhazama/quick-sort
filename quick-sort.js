
var arrayz = [2, 5, 7, 4, 3, 6];


function sortingFunctions(){

  return{
    quickSort : quickSort
  };




  function quickSort(arr){

    var pivot = arr[arr.length - 1];
    var lessArr = [];
    var greaterArr = [];
    var lessThanArr = [];
    var greaterThanArr = [];
    var sortedArr = [];
    console.log(pivot);
    if(arr.length === 0){
      return arr;
    }
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < pivot){
        lessThanArr.push(arr[i]);
        //console.log(arr[i]);
      }else if (arr[i] > pivot){
        greaterThanArr.push(arr[i]);
      }
    }
    if(lessThanArr === false){
        pivot = greaterThanArr[greaterThanArr.length - 1];
      }else {
        pivot = lessThanArr[lessThanArr.length - 1];
      }

      lessArr = lessThanArr;
      greaterArr = greaterThanArr;

    console.log(pivot);
    //console.log(lessThanArr);
    //console.log(greaterThanArr);
    console.log(lessArr);
    console.log(greaterArr);



      //return quickSort(lessArr).concat(pivot,quickSort(greaterArr));






  }



  function bubbleSort(){

  }




}

var sort = sortingFunctions();
sort.quickSort(arrayz);