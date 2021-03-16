// ép hiểu dữ liệu          String(value)   Number(value)   Boolean(value)
/**
 * if(dieukien) alert("dung");
 * 
 * hoac if(dieukien){
 *       viet code vao day;   
 * }
 * 
 * hoac if (dieukien){
 *          viet code vao day;
 * }else {
 *          viet code vao day;
 * }
 * 
 * hoac if (dieukien){
 *      viet code vao day;
 * }else if (dieukien){
 *      viet code vao day;
 * }else{
 *       viet code vao day;   
 * }
 *  
 *  
 *  */ 

// kiem tra so lon hon 0
 function kiemTra(n){
     if( n > 0 ) console.log("dung");
 }
// kiem tra so chan le
function kiemTraSoChanLe(n){
    if( n%2 === 0 ){
        console.log("so chan");
    }else{
        console.log("so le");
    }
}

// kiem tra n la so duong, so am , hay so 0
function kiemTraSo(n){
    if(n > 0){
        console.log("so Duong");
    }else if( n === 0){
        console.log("so 0");
    }else{
        console.log("so am");
    }   
} 

//1. Kiem tra 2 so, tra ve so lon hon
function soLonHon(m,n){
    if( m > n){
        return m; // tra ve gia tri cho m
    }
    return n; /// tra ve gia tri cho n
}

// 2. cho 3 môn toán lý hoá
/**Viết hàm tính trung bình và kiểm tra xếp loại học lực 
 * Biết rằng:
 * ĐTB lớn hơn bằng 8 và nhỏ hơn bằng 10: Xếp loại Giỏi
 * ĐTB lớn hơn bằng 6.5 và nhỏ hơn bằng 8: Xếp loại Khá
 * ĐTB lớn hơn bằng 4 và nhỏ hơn bằng 6.5: Xếp loại Trung Bình
 * ĐTB lớn hơn 0 và nhỏ hơn 4: Xếp loại yếu
 * Lưu ý: thang điểm 10*/
function xepLoai (a,b,c){
    //a: Toan b:Ly c:Hoa
    
    if(10 >= a && a >= 0 && 10 >= b && b >= 0 && 10 >= c && c >= 0 ){ 
        return; // return lenh dung ham
    } 
    let tb = (a+b+c)/3;

    if( tb >= 8 && tb <= 10 ){
        console.log("Loai Gioi");
    }else if(tb >= 6.5 && tb <= 8){
        console.log("Loai Kha");
    }else if(tb >= 4 && tb <= 6.5){
        console.log("Loai yeu");
    }else{
        console.log("Khong duoc xep");
    }
    /// han che dung if else nhieu lan
}    

/**
 * switch-case-defaut
 * 
 */
function checkSo4(){
    let a = 2 + 2;
    switch (a) {
        case 3:
            console.log("small");
            break;
        case 4:
            console.log("equal");
            break;
        case 5:
            console.log("BIG");
            break; 
        default:
            console.log("default")
    }
}



//Cho 3 cạnh a,b,c. Kiểm tra a,b,c có tại thành một tam giác không. Nếu có, thì tính diện tích của tam giác đó.
function kiemTraTamGiac (a,b,c){
    if (a<=0 || b<=0 || c<=0 ){
        return;
    } 
    if(a+b >c && b+c > a && b+c>a){
        let p = (a+b+c)/2;
         let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        console.log(`dien tich tam giac ${s}`);
        return s;
}else{
    console.log("day khong phai la tam giac");
} 
}