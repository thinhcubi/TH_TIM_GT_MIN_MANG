

function minArray(arr){
    if(arr.length == 0)
        return -1;
    let min = arr[0];
    for(let i =0; i <arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}


  let  arr1= [3, 5, 1, 8, -3, 7, 8];
  let  min1 = minArray(arr1);
  document.write("So nho nhat ham 1 la" + min1 +"<br>")

 let arr2= [7, 12, 6, 9, 20, 56, 89]
let  min2 = minArray(arr2);
document.write("So nho nhat ham 2 la " + min2 + "<br>")

let arr3=[]
let min3 =minArray(arr3);
document.write("Mang rong" + min3)





