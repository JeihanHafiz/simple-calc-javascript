//nilai awal
const defRes = 0;
let curRes = defRes;

//proses input dari string ke int
function getUserNum() {
  return parseInt(userInput.value);
}

//proses output deskripsi
function outputCreate(operator, resBfrCalc, calcNum) {
  const calcDes = `${resBfrCalc} ${operator} ${calcNum}`;
  outputRes(curRes, calcDes);
}

//fungsi operator keseluruhsan
function calculate(operator) {
  const nums = getUserNum();
  const initRes = curRes;
  switch (operator) {
    case "+":
      curRes += nums;

      break;
    case "-":
      curRes -= nums;
      break;
    case "*":
      curRes *= nums;
      break;
    case "/":
      curRes /= nums;
      break;
  }
  outputCreate(operator, initRes, nums)
}

// fungsi button operator
addBtn.addEventListener("click", () => calculate("+"));
subBtn.addEventListener("click", () => calculate("-"));
mulBtn.addEventListener("click", () => calculate("*"));
divBtn.addEventListener("click", () => calculate("/"));
