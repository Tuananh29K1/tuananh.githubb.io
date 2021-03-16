
/** Bài 1 */


function xacDinhMua(thang){
    if(thang >= 1 && thang <= 3){
        console.log('Mùa Xuân');
    }else if(thang >= 4 && thang <= 6){
        console.log('Mùa Hè');
    }else if(thang >= 7 && thang <= 9){
        console.log('Mùa Thu');
    }else {
        console.log('Mùa Đông');
    } 
}

var d = new Date();
var m = d.getMonth();
console.log(d);
xacDinhMua(m);


/** bài 2 */
 function soNgayTrongThang (y, m){
   let day = new Date(y, m, 0).getDate(); 
   console.log(`Tháng ${m} có ${day} ngày`);
} 




/** bài 3 
 * Tính tổng chữ số có trong 1 số nguyên dương
*/
 function tinhTongChuSo1 (number){
     let tachSo = number % 10;
     console.log(tachSo);
 }
       
  





function tinhTongChuSo (n){
    let tachSo = n%10;
    let tong = 0;
    do 
}
/** bài 4 */
function layChuoi(string){
    if(string.length > 10){
       let a = string.slice(0, 10);
       console.log(`${a} +  ... `);
    }else{
        console.log('không hợp lệ');
    }
}

/** bài  5 */  
function soNguyenTo(n){
    let refult;
    if( n < 2 ){
        refult =false;
        console.log(refult);
    }else if(n == 2){
        refult = true;
        console.log(refult);
    }else if(n % 2 == 0){
        refult =false;
        console.log(refult);
    } 
}

  

