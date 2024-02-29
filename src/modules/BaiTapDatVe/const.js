export const TOTAL_SEATS = 120;
const max_num = 121;
export const handleInput = (name, num,len) => {
  if (!name || !num) {
    alert("Please Enter your Name and Number of Seats");
    return;
  }
  if (!Number.isInteger(+num) || +num < 1 || +num > max_num) {
    alert("Hãy nhập vào số ghế hợp lệ và chỉ được chọn tối đa 10 ghế");
    return;
  }

  const remain = TOTAL_SEATS - len
  if(num > remain){
    if(confirm(`Chỉ còn ${remain} ghế trống. Bạn có muốn đặt ${remain} ghế này không?`)){
        return remain
    }
  }
  return num;
};

export const clearObject = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
    }
  }
};
