export const TOTAL_SEATS = 120;
const max_num = 10;
export const handleInput = (name, num,len) => {
  if (!name || !num) {
    alert("Hãy nhập vào tên và số ghế muốn đặt 😎");
    return;
  }
  if (!Number.isInteger(+num) || +num < 1 || +num > max_num) {
    alert("Hãy nhập vào số ghế hợp lệ và chỉ được chọn tối đa 10 ghế cho mỗi lần đăng ký 😡");
    return;
  }

  const remain = TOTAL_SEATS - len
  if(num > remain){
    if(confirm(`Chỉ còn ${remain} ghế trống. Bạn có muốn đặt ${remain} ghế này không? 🥲`)){
        return remain
    }else{
        return;
    }
  }
  return num;
};



export function sortArray(arr) {
    arr.sort((a, b) => {

        let charA = a.charAt(0);
        let numA = parseInt(a.substring(1));
        let charB = b.charAt(0);
        let numB = parseInt(b.substring(1));

        if (charA < charB) return -1;
        if (charA > charB) return 1;

        return numA - numB;
    });

    return arr;
}
