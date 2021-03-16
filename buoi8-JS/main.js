alert('main.js');
console.log("hello main.js");
/**
 * 1. Number
 * -So nguyen, so thuc
 * -infinity
 * -NaN (Not a Number)
 * 
 */

/**
 * 2. String (chuoi, xau)
 * 'dat trong nhay don'
 * "dat trong nhay keo"
 * `dat trong back-tick ${1+3}`
 * cu pháp ${} la cu pháp truyền vào 1 biểu thức
 * phép cộng có thể ép số về chuỗi để làm phép nối
 *      vd: "a" + 2 ----> a2
 *              khác với "a" / 2 -----> NaN 
 * 
 * 
 *      vd              `day là phep toan 1 + 3 =${1+3}`
 *              ----> "day la phep toan 1+ 3 =4"
 * 
 * 
 * về coi BigInt
 */


 /**
  * 3. Boolean
  * -chi co 2 gia tri dung/sai (true/false)
  * true=1 false=0 
  * nên true + false = 1;  
  */


/**
 * 4.null
 * -null là một biến hay một đối tượng trống ( trống khác với rỗng) 
 */

 /**
  * 4.undefined
  * - một biến hằng số đã được khai báo nhưng chưa được khởi tạo. 
  */
/**
 * 5. Hàm số
 *  function sendEmail(){
 *      //code
 * }
 * 
 * 
 * return là trả về cái gì đấy 
 */



 function sendEmail(){
     console.log("This is a function");
 }
 sendEmail();
  function getAMessage(from, message="khong co noi dung" ){
      console.log(from + ":" + message);
  }
  getAMessage('robin', 'hi' );
  getAMessage('john');

function getABox(){
    return "this is a box";
}
let box = getABox();
