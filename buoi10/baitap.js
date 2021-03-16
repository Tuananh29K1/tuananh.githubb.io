/**Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm */

function muaTrongNam(month) {
  if (Number.isInteger(month) == false) {
    return "Mất Mùa";
  }
  if (month == 3 || month == 1 || (month < 3 && month > 1)) {
    return "Mùa Xuân";
  } else if (month == 4 || month == 6 || (month < 6 && month > 4)) {
    return "Mùa Hè";
  } else if (month == 7 || month == 9 || (month < 9 && month > 7)) {
    return "Mùa Thu";
  } else if (month == 10 || month == 12 || (month < 12 && month > 10)) {
    return "Mùa Đông";
  } else {
    return "Mất Mùa";
  }
}
var date = new Date();
var thang = date.getMonth() + 1;
var mua = muaTrongNam(thang);
console.log(`${date}/ Bây giờ là mùa: ${mua}`);

/**Viết hàm trả về số ngày có trong 1 tháng. */
function soNgayTrongThang(y, m) {
  let day = new Date(y, m, 0).getDate();
  console.log(`Tháng ${m} có ${day} ngày`);
}

/**tính tổng chữ số nguyên */
function tongChuSo(number) {
  if (number < 0 || Number.isInteger(number) == false) {
    return "Số không hợp lệ";
  }
  let tachSo;
  let tong = 0;
  for (; number != 0; ) {
    tachSo = number % 10;
    tong += tachSo;
    number = Math.floor(number / 10);
  }
  return tong;
}
/** In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự 
 * và hiển thị phía sau là dấu ba chấm (10 kí tự + ...)*/
function inRaChuoi (string){
    if(typeof string != 'string'){
        return ' Đây không phải là String';
    }

    if(string.length > 10){
        let result = string.slice(0, 10);
        return result;
    }else{
        return 'Chuỗi không đủ 10 ký tự';
    }
}
/**Viết hàm có tính năng translate.
 *  Truyền vào hàm tên đất nước bạn muốn biết về lời chào ở nuớc họ */
function loiChao(key){
    if(typeof key != 'string'){
        return 'Xin chào, Bạn không phải là chuỗi !';
    }
    
    switch (key) {
        case 'French':
            console.log('Bon Jour');
            break;
        case 'Hawaiian':
            console.log('Aloha');
            break;
        case 'Germany':
            console.log('gutten tag');
            break;
        case  'Italy':
            console.log('Cau');
            break;
       case 'Croatia':
            console.log('Cau');
            break;                   
        default:
            console.log('Xin Chào, bạn đã nhập sai cú pháp');
            break;
    }
}
 