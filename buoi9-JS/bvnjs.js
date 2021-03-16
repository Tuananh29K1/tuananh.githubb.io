/**Cho một số nguyên dương N,
 * viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N
 * (số hoàn hảo là số bằng
 * tổng các ước số của nó mà không kể chính nó). */
function showSo(N) {
  for (let i = 0; i < N; i++) {
    var sum = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j == 0) {
        sum += j;
      }
      if (sum == i) {
        console.log("Đây là số hoàn hảo", i);
      } else {
        console.log(i);
      }
    }
  }
}

/** Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên */
function soLonNhat(array){
    var maxInNumbers = Math.max.apply(Math, array); 
    var minInNumbers = Math.min.apply(Math, array);
    console.log(`đây là số nhỏ nhất ${minInNumbers} và số lớn nhất là ${maxInNumbers}`);
}


/**Tìm số lớn thứ 2 trong mảng số nguyên */
