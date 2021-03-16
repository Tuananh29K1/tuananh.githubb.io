/** vòng lăp for 
 * 
 * 
 * có vòng lặp for( biến đếm ,điều kiện chạy , bước nhảy){
        //code
         biến đếm cần phải khởi tạo thường dùng let

    }
    
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break; /// câu lệnh dừng vòng lặp luôn khi gặp lệnh break
  }
}

/**vòng lặp while check điều kiện trước khi chạy
 *
 * let i = 0;
 * while(i < 10){
 * console.log(i);
 * i++; //bước nhảy viết ở đây
 * }
 */

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

/***vòng lặo DO-While check điều kiện sau khi chạy
 *
 *
 * let k = 0;
 * do {
 *  console.log(i);
 *  i--
 * }while ( i >0 );
 */

let k = 10;
do {
  k--;
  if (k === 8) {
    console.log("8 chia het cho 2");
    continue; //// không dừng vòng lặp mà sẽ bắt đầu vòng lặp mới
  }
  console.log(k);
} while (k > 0);

/// cho n, (n < 50) đếm liệt kê các số chia hết cho 5 trong đoạn từ 0 đến n

function demPhanTu(n) {
  if (n < 0 || n > 50) {
      return;
    
  }


  let dem = 0;

  for (let i = 0; i <= n ; i++) {
    if ( i % 5 === 0){
        console.log(i);
        dem++;
    }
  }
  console.log(`co tat ca ${dem} so chia het cho 5`);
}



/**
 * Array
 *  
 */

 let array = [1,2,3];
 let names;
 names = ['an', 'anh', 'hieu'];
 names.length; /// dem so phan tu cua mang
 names[3]///lấy phần tử theo index
 console.log(names[1]);
 
 
 /// duyet mang dung vòng for

 for (let i = 0; i < names.length; i++){
        console.log(`Toi tên là ${names[i]}`)
 }
 ///phương thức với mảng 
 names.push

 //// cho một mảng số nguyên. Kiểm tra nếu có phần tử bé hơn 0 thì thay thế nó bằng 0
 var array2 = [1,2,3,4,5,0];
 function checkArray(arr){
     for (let i in arr){
         if (arr[i] < 0){
             arr[i] = 0;
         }
     }
     return arr;
 } 

 /// mảng 2 chiều  [[1,2],[1,2]]
 ///mảng 3 chiều 

 function drawSquare(n){
     for (let i = 0; i <=n; i ++){
         for(let j = 0; j <=n; j ++){
             console.log('*');
         }
     }
 }